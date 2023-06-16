import React, { useEffect } from 'react';
import Video from '../../components/video/Video';
import CategoriesBar from '../../components/categories/CategoriesBar';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import InfiniteScroll from 'react-infinite-scroll-component';
//import Skeleton from 'react-loading-skeleton'

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    if (activeCategory === 'All') 
      dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />
      <Row>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={<div className='spinner-border text-danger d-block mx-auto'></div>}
          className='row'
        >
          {videos.map((video) => (
            <Col lg={3} md={4} key={video.id}>
              <Video video={video} />
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default HomeScreen;
