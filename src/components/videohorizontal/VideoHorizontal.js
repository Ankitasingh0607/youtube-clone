import React, { useState,useEffect } from 'react'
import "./_Videohorizontal.scss"

import request from '../../Api';

import { AiFillEye } from 'react-icons/ai';
import moment, { duration } from 'moment';
import numeral from 'numeral';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VideoHorizontal = ({video, Searchscreen}) => {

  const {id,
    snippet:{channelId,channelTitle,description,title,publishedAt,thumbnails:{medium}}
  } = video

   const [views,setViews] = useState(null)
   const [duration,setDuration] = useState(null)
   const [channelIcon,setChannelIcon]= useState(null)

   useEffect(() => {
    const getVideoDetails = async () => {
      const { data: { items } } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: id.videoId,
        },
      });
      console.log(items);
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [id]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const { data: { items } } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [channelId]);




  const seconds= moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds*1000).format('mm-ss')
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate(`/watch/${id.videoId}`);
  }

  return (
    <Row className='videoHorizontal m-1 p-2 align-items-center 'onClick={handleClick}>
       <Col xs={6} md={Searchscreen?4:6} className='videoHorizontal__left'>
        <LazyLoadImage
        src={medium.url}
        effect='blur'
        className='videoHorizontal__thumbnail'
        wrapperClassName='videoHorizontal__thumbnail-wrapper'
        />
        <span className='video__top__duration'>{_duration}</span>
       

       </Col>
       <Col xs={6} md={Searchscreen?8:6} className='videoHorizontal__right p-0'>
        <p className='videoHorizontal__title mb-1'>
            {title}
        </p>
        <div className='videoHorizontal__details'>
     
          <AiFillEye /> {numeral(views).format('0.a')} views·
      
        {moment(publishedAt).fromNow()}
        </div>
        <div className='videoHorizontal__channel d-flex my-1 align-items-center'>
        {/* <LazyLoadImage
        src=''
        effect='blur'
        /> */}
        <p className='videoHorizontal__title'>{channelTitle}</p>
        </div>
       </Col>
    </Row>
  )
}

export default VideoHorizontal