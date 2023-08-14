import React, { useEffect, useState } from 'react';
import styles from './following.module.css';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';
import axios from 'axios';

function Following() {
  /*const [followingNickname,setFollowingNickname]=useState(null);
  const [followingImg,setFollowingImg]=useState(null); */
  const [followingInfo,setFollowingInfo]=useState(null);
  const [followingPhoto,setFollowingPhoto]=useState([]);
  const userState =useSelector((state)=>state.user);

  useEffect(()=>{
    const fetchFollowingInfo=async()=>{
      try{
        const response = await axios.get('http://photolancer.shop/following/users',{
          headers: {
            Authorization: userState.jwt,
          },
        });
        //console.log(response.data);
        const users =response.data;
        setFollowingInfo(users);

      }
      catch(error){
        console.error('Error fetching following info',error);
      }
    };
    fetchFollowingInfo();
  },[userState.jwt]);

  useEffect(()=>{
    const fetchFollowingPhoto = async()=>{
      try{
      const response = await axios.get('http://photolancer.shop/following/posts?page=0',{
        headers: {
          Authorization: userState.jwt,
        },
      });
      //console.log(response.data);
      const userPosts = response.data.content[0].postList.slice(0,3);
      setFollowingPhoto(userPosts);
    }
    catch(error){
      console.error('Error fetching following photo',error);
    }
    };
    fetchFollowingPhoto();
  },[userState.jwt]);

  return(
    <>
   <div className={styles.headframe}>
   <Row>
      {followingInfo&&
      followingInfo.map((user, index) => (
        <>
        <div key={index} className={styles.headframe}>
          <div className={styles.smallimg}>{user.profileUrl}</div>
          <div className={styles.nickname}>{user.nickname}</div>
        </div>
        <div className={styles.contentsframe}>
        <Row gutter={[24, 24]}>
              {followingPhoto &&
                followingPhoto.map((user, index) => (
                  <React.Fragment key={index}>
                    <PhotoCard id={user.postId} image={user.thumbNailUri} />
                  </React.Fragment>
                ))}
            </Row>
            </div> 
            </>
      ))}
    </Row>
    </div>
  
    </>
  );
}

export default Following;
