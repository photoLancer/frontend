import { useEffect, useState } from 'react';
import React from 'react';
import styles from './savedpost.module.css';
import axios from 'axios';
import PhotoCard from '../../HomePageComponent/PhotoCard/PhotoCard';
import { Row } from 'antd';
import { useSelector } from 'react-redux';

const SavedPost=()=>{
    const userState=useSelector((state)=>state.user);
    const [savedPost,setSavedPost]=useState([]);

    useEffect(()=>{
        const fetchSavedPost=async()=>{
            try{
                const response =await axios.get('http://photolancer.shop/my-profile/album/saved-post?page=0',{
                    headers:{
                        Authorization: userState.jwt,
                    },
                });
                setSavedPost(response.data.content);
            }
            catch(error){
                console.error('Error fetching saved posts',error);
            }
        };
        fetchSavedPost();
    },[]);
    return(
        <>
        <div className={styles.boxing}>
        <div className={styles.photobox}>
        <div className={styles.myimage}>
        <Row gutter={[24, 24]}>
              {savedPost &&
                savedPost.map((photo, index) => (
                  <React.Fragment key={index}>
                    <PhotoCard id={photo.postId} image={photo.thumbNailUri} />
                  </React.Fragment>
                ))}
            </Row>
        </div>
        </div>
        </div>
        </>
    );
}
export default SavedPost;