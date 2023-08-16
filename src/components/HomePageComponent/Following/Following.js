import React, { useEffect, useState, useContext } from 'react';
import styles from './following.module.css';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';
import axios from 'axios';
import { SearchDispatchContext } from '../../../routes/HomePage/HomePage';

function Following() {
  const searchDispatch = useContext(SearchDispatchContext);
  /*const [followingNickname,setFollowingNickname]=useState(null);
  const [followingImg,setFollowingImg]=useState(null); */
  const [followingInfo, setFollowingInfo] = useState(null);
  const [followingPhoto, setFollowingPhoto] = useState([]);

  const userState = useSelector((state) => state.user);

  useEffect(() => {
    //searchInput ->null로 바꾸기
    searchDispatch({ type: 'MAKE_NULL' });

    const fetchFollowingInfo = async () => {
      try {
        const response = await axios.get(
          'http://photolancer.shop/following/users',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        //console.log(response.data);
        const users = response.data;
        setFollowingInfo(users);
      } catch (error) {
        console.error('Error fetching following info', error);
      }
    };
    fetchFollowingInfo();
  }, [userState.jwt]);

  useEffect(() => {
    const fetchFollowingPhoto = async () => {
      try {
        const response = await axios.get(
          'http://photolancer.shop/following/posts?page=0',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        console.log(response.data);

        const userPosts = response.data.content[1].postList;
        setFollowingPhoto(userPosts);
      } catch (error) {
        console.error('Error fetching following photo', error);
      }
    };
    fetchFollowingPhoto();
  }, [userState.jwt]);

  return (
    <>
      <Row>
        {followingInfo &&
          followingInfo.map((user, index) => (
            <>
              <div key={index} className={styles.headframe}>
                <div className={styles.smallimg}>{user.profileUrl}</div>
                <div className={styles.nickname}>{user.nickname}</div>
              </div>
              <Row className={styles.contentsframe}>
                {followingPhoto && //content[1] - postList 배열 map
                  followingPhoto.map((userPost, index) => (
                    <>
                      <React.Fragment key={index}>
                        <PhotoCard
                          id={userPost.postId}
                          image={userPost.thumbNailUri}
                        />
                      </React.Fragment>
                    </>
                  ))}
              </Row>
            </>
          ))}
      </Row>
    </>
  );
}

export default Following;
