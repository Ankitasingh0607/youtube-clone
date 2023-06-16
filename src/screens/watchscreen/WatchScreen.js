import React, { useEffect } from 'react'
import './watchscreen.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Col, Row } from 'react-bootstrap'
import MetaData from '../../components/videometadata/MetaData'
import VideoHorizontal from '../../components/videohorizontal/VideoHorizontal'
import Comments from '../../components/comments/Comments'
import { useParams } from 'react-router-dom'
import { getRelatedVideo, getVideoById } from '../../redux/actions/videos.action'

import { useDispatch, useSelector } from "react-redux"

export const WatchScreen = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(getVideoById(id))
  
  dispatch(getRelatedVideo(id))

  },[dispatch,id])

  const {videos,loading:relatedVideosLoading} = useSelector(state=>state.relatedVideos)

 const {video,loading}= useSelector(state=>state.selectedVideo)

  return (
    <Row>
        <Col lg={8}>
        <div className='watchScreen__player'>
  <iframe
    src={`https://www.youtube.com/embed/${id}`}
    frameBorder="0"
    title={video?.snippet?.title}
    allowFullScreen
    width="100%"
    height="100%"
  ></iframe>
</div>

{
  !loading ? <MetaData video={video} videoId = {id}/> : <h6>Loading.....</h6>
}

            
            <Comments  videoId = {id}
            totalComments={video?.statistics?.commentCount}
            />
        </Col>
        <Col lg={4}>
        {!loading ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal video={video} key={video.id.videoId} />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )}
        </Col>
    </Row>
  )
}
