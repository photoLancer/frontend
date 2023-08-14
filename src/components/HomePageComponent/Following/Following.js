import React, { useEffect, useState } from 'react';
import styles from './following.module.css';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';
import axios from 'axios';

function Following() {
  const [followingInfo,setFollowingInfo]=useState(null);
  const userState =useSelector((state)=>state.user);

  useEffect(()=>{
    const fetchFollowing = async()=>{
      const response = axios.get('http://photolancer.shop/following/users',{
        headers: {
          Authorization: userState.jwt,
        },
      });
      setFollowingInfo(response.data);
    };
    fetchFollowing();
  },[]);

  return(
    <>
   <div>안녕</div>
   <div className={styles.headframe}>
   <img className={styles.smallimg}></img>
   <p className={styles.nickname}>nickname {'>'}</p>
   </div>
   <div className={styles.content}>
        <Row gutter={[24, 24]}>
              {followingInfo &&
                followingInfo.map((photo, index) => (
                  <React.Fragment key={index}>
                    <PhotoCard id={photo.postId} image={photo.thumbNailUri} />
                  </React.Fragment>
                ))}
            </Row>
            </div>
    </>
  );
}

export default Following;
