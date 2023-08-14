import React, { useEffect, useState } from 'react';
import styles from './following.module.css';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';
import axios from 'axios';

function Following() {
  const [followingNickname,setFollowingNickname]=useState(null);
  const [followingImg,setFollowingImg]=useState(null);
  const [followingPhoto,setFollowingPhoto]=useState(null);
  const userState =useSelector((state)=>state.user);

  useEffect(()=>{
    const fetchFollowingInfo=async()=>{
      try{
        const response = await axios.get('http://photolancer.shop/following/users',{
          headers: {
            Authorization: userState.jwt,
          },
        });

        setFollowingNickname(response.data.nickname);
        setFollowingImg(response.data.profileUrl);

      }
      catch(error){
        console.error('Error fetching following info',error);
      }
    };
    fetchFollowingInfo();
  },[]);

  useEffect(()=>{
    const fetchFollowingPhoto = async()=>{
      try{
      const response = axios.get('http://photolancer.shop/following/posts?page=0',{
        headers: {
          Authorization: userState.jwt,
        },
      });
      setFollowingPhoto(response.data.content.postList);
    }
    catch(error){
      console.error('Error fetching following photo',error);
    }
    };
    fetchFollowingPhoto();
  },[]);

  return(
    <>
   <div>안녕</div>
   <div className={styles.headframe}>
   <img className={styles.smallimg}></img>
   <p className={styles.nickname}>nickname {'>'}</p>
   </div>
   
        <Row gutter={[24, 24]}>
              {followingPhoto &&
                followingPhoto.map((photo, index) => (
                  <React.Fragment key={index}>
                    <PhotoCard id={photo.postId} image={photo.thumbNailUri} />
                  </React.Fragment>
                ))}
            </Row>
          
    </>
  );
}

export default Following;
