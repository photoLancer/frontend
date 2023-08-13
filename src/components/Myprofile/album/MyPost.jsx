
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './mypost.module.css';
import axios from 'axios';
import PhotoCard from '../../HomePageComponent/PhotoCard/PhotoCard';
import { Row } from 'antd';
import { useSelector } from 'react-redux';

const MyPost=()=>{
    const userState=useSelector((state)=>state.user);
    const [myPost,setMyPost]=useState([]);

    useEffect(()=>{
        const fetchMyPost = async()=>{
            try {
                const response = await axios.get('http://photolancer.shop/my-profile/album/mypost?page=0', {
                    headers: {
                        Authorization: userState.jwt,
                    },
                });
                
                setMyPost(response.data.content);
            }
            catch (error) {
                console.error('Error fetching my posts:', error);
            }
        };

        fetchMyPost();
    },[]);
    return(
        <>
        <div className={styles.boxing}>
        <div className={styles.editphotobox}><button className={styles.editphotobtn}>Edit Photo</button></div>
        <div className={styles.photobox}>
        <div className={styles.myimage}>
        <Row gutter={[24, 24]}>
              {myPost &&
                myPost.map((photo, index) => (
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
export default MyPost;