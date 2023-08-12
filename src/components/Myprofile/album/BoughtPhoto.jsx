import { useEffect, useState } from 'react';
import styles from './boughtphoto.module.css';
import axios from 'axios';
import PhotoCard from '../../HomePageComponent/PhotoCard/PhotoCard';
import { Row } from 'antd';
import { useSelector } from 'react-redux';

const BoughtPhoto=()=>{
    const [boughtPhoto,setBoughtPhoto]=useState([]);

    useEffect(()=>{
        const fetchBoughtPhoto=async()=>{
            try{
            const response = await axios.get('http://photolancer.shop/my-profile/album/bought-photo',{
                headers:{
                    Authorization:userState.jwt,
                },
            });
            setBoughtPhoto(response.data.content);
        }
        catch(error){
            console.error('Error fetchong bought photo:',error);
        }
        };
        fetchBoughtPhoto();
    },[]);
    return(
        <>
        <div className={styles.boxing}>
        <div className={styles.photobox}>
        <div className={styles.myimage}>
        <Row gutter={[24, 24]}>
              {boughtPhoto &&
                boughtPhoto.map((photo, index) => (
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
export default BoughtPhoto;