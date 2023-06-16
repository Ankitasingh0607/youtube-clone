import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../redux/actions/videos.action'
import { Container } from 'react-bootstrap'
import VideoHorizontal from '../components/videohorizontal/VideoHorizontal'

const Searchscreen = () => {

const {query} = useParams()


const dispatch = useDispatch()

useEffect(()=>{
dispatch(getVideosBySearch(query))
},[query,dispatch])

const {videos,loading} = useSelector(state=>state.searchedVideos)


  return (
    <Container>
        {
            !loading?(
                videos?.map(video=><VideoHorizontal video={video} key={video.id.videoId} Searchscreen/>)
            ):(
                <h1>Loading....</h1>
            )
        }
    </Container>
  )
    }

export default Searchscreen