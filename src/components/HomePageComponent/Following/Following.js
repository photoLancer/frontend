import React, { useEffect, useState, useContext } from 'react';
import styles from './following.module.css';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';
import axios from 'axios';
import { SearchDispatchContext } from '../../../routes/HomePage/HomePage';

function Following() {
  const searchDispatch = useContext(SearchDispatchContext);

  const [followingData, setFollowingData] = useState({
    users: [],
    posts: [],
  });

  const userState = useSelector((state) => state.user);

  useEffect(() => {
    //searchInput ->null로 바꾸기
    searchDispatch({ type: 'MAKE_NULL' });

    const fetchFollowingData = async () => {
      try {
        const infoResponse = await axios.get(
          'http://photolancer.shop/following/users',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        const photoResponse = await axios.get(
          'http://photolancer.shop/following/posts?page=0',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        const users = infoResponse.data;
        const postsByUserId = {};
  
        // Group posts by userId for efficient retrieval
        photoResponse.data.content.forEach((contentItem) => {
          const userId = contentItem.id;
          const postList = contentItem.postList;
          postsByUserId[userId] = postList;
        });
  
        setFollowingData({ users, postsByUserId });
      } catch (error) {
      console.error('Error fetching following data', error);
    }
    };
    fetchFollowingData();
  }, [userState.jwt]);

  return (
    <>
        <Row>
  {followingData.users.map((user) => (
    <>
    <div key={user.id} className={styles.headframe}>
      <div className={styles.smallimg}>{user.profileUrl}</div>
      <div className={styles.nickname}>{user.nickname}</div>
    </div>
    <Row className={styles.contentsframe}>
      {followingData.postsByUserId[user.id] && (
        followingData.postsByUserId[user.id].map((userPost) => (
          <React.Fragment key={userPost.postId}>
            <PhotoCard id={userPost.postId} image={userPost.thumbNailUri} />
          </React.Fragment>
        ))
      )}
    </Row>
    </>
  ))}
</Row>
    </>
  );
}

export default Following;
