import React, { useEffect, useState } from 'react';
import './_video.scss';
import request from '../../Api';
import { Navigate, useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import moment from 'moment';
import numeral from 'numeral';



const Video = ({ video }) => { // Change 'videos' to 'video'
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video; 


  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');

  const _videoId = id?.videoId || id;

  const navigate = useNavigate()

  useEffect(() => {
    const getVideoDetails = async () => {
      const { data: { items } } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: _videoId,
        },
      });
      console.log(items);
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);

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

const handleVideoClick = ()=>{
    navigate(`/watch/${_videoId}`);
}


  return (
    <div className="video"onClick={handleVideoClick}>
      <div className="video__top">
        <img src={medium.url} alt="" />
        <span>{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format('0.a')} views·
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img src={channelIcon?.url} alt="" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
