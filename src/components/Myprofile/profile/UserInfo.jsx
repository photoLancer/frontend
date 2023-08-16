
import { useEffect, useState } from 'react';
import styles from './userinfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const UserInfo=()=>{
    const userState=useSelector((state)=>state.user);
     /*const [showBookmark,setShowBookmark]=useState(null);

    useEffect(()=>{
        const fetchBookmark=async()=>{
            try{
                const response = await axios.get('http://photolancer.shop/api/v1/bookmark/list',{
                    headers:{
                        Authorization:userState.jwt,
                    },
                })
                const bookmarks=response.data;
                setShowBookmark(bookmarks);
                console.log(bookmarks);
            }
            catch(error){
                console.error('Error fetching bookmark',error);
            }
        };
        fetchBookmark();
    },[userState.jwt]);  */

    return(
        <>
        <div className={styles.user}>
            <div className={styles.info}>
            <div className={styles.userinfo1}>
                <div className={styles.userinfo1wrap}>
                <div className={styles.myTitle}>{userState.userTitle}</div>  
                <img 
                src={userState.userProfileImg}
                alt='#'
                className={styles.myImg}
                />
                <div className={styles.numbering}>
                    <div className={styles.box} value="follower">
                        <div className={styles.num}>{userState.num_follower}</div>
                        <div className={styles.value}>Followers</div>
                        
                    </div>
                    <div className={styles.box} value="post">
                        <div className={styles.num}>{userState.num_post}</div>
                        <div className={styles.value}>Posts</div>
                    </div>
                    <div className={styles.box} value="following">
                        <div className={styles.num}>{userState.num_following}</div>
                        <div className={styles.value}>Following</div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.userinfo2}>
                <div className={styles.userinfo2wrap}>
                    <div className={styles.smallboxing}>
                    <div className={styles.myLev}>Lv.{userState.userLv}</div>
                <div className={styles.myName}>{userState.userName}</div>
                </div>
                <div className={styles.infotext}>{userState.explane}</div>
                <div className={styles.footer}>
                <div className={styles.taghead}>관심 키워드</div>
                    
                
                            <div className={styles.tagging}>
                {userState.bookmark.map((item, index) => (
                    index < 4 && (
                        <span className={styles.tag} key={index}>
                            {item}
                        </span>
                    )
                ))}
            </div>
         
                
                </div>
            </div>
            </div>
            </div>
        </div>

        </>
    );

}
export default UserInfo;