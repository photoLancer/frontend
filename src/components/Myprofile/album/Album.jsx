import React, { useEffect,useRef, useState } from 'react';
import styles from './album.module.css';
import MyPost from "./MyPost";
import SavedPost from "./SavedPost";
import BoughtPhoto from "./BoughtPhoto";



function Album() {
    const [albumContent,setAlbumContent]=useState(1);
   

    const mypostBtn=useRef();
    const savedpostBtn=useRef();
    const boughtphotoBtn=useRef();

    const [hrShowMyPost,setHrShowMyPost]=useState(false);
    const [hrShowSavedPost,setHrShowSavedPost]=useState(false);
    const [hrShowBoughtPhoto,setHrShowBoughtPhoto]=useState(false);

    useEffect(()=>{
      if(albumContent===1){
        mypostBtn.current.style='color:#111111';
      }
      else{
        mypostBtn.current.style='';
      }
      if(albumContent===2){
        savedpostBtn.current.style='color:#111111';
      }
      else{
        savedpostBtn.current.style='';
      }
      if(albumContent===3){
        boughtphotoBtn.current.style='color:#111111';
      }
      else{
        boughtphotoBtn.current.style='';
      }
  },[albumContent]);

        const mypostHandler=()=>{
            setAlbumContent(1);
            setHrShowMyPost(true);
            setHrShowBoughtPhoto(false);
            setHrShowSavedPost(false);
        };
        const savedpostHandler=()=>{
            setAlbumContent(2);
            setHrShowMyPost(false);
            setHrShowBoughtPhoto(false);
            setHrShowSavedPost(true);
        };
        const boughtphotoHandler=()=>{
            setAlbumContent(3);
            setHrShowMyPost(false);
            setHrShowBoughtPhoto(true);
            setHrShowSavedPost(false);
        };
    
    return (
        <>
        <div className='main basis-3/4 border border-solid border-black'>
                <div className={styles.navbar}>
                <div className={styles.textline}>
                  <button
                    className={styles.navbar_button}
                    ref={mypostBtn}
                    onClick={mypostHandler}
                  >
                    My Post
                  </button>
                  {albumContent===1||hrShowMyPost?(
                    <hr style={{ width: '88%', border: '1.5px solid #111111' }} />
                  ):('')}
                  </div>
                  <div className={styles.textline}>
                  <button
                    className={styles.navbar_button}
                    ref={savedpostBtn}
                    onClick={savedpostHandler}
                  >
                    Saved Post
                  </button>
                  {albumContent===2||hrShowSavedPost?(
                    <hr style={{ width: '88%', border: '1.5px solid #111111' }} />
                  ):('')}
                  </div>
                  <div className={styles.textline}>
                  <button
                    className={styles.navbar_button}
                    ref={boughtphotoBtn}
                    onClick={boughtphotoHandler}
                  >
                    Bought Photo
                  </button>
                  {albumContent===3||hrShowBoughtPhoto?(
                    <hr style={{ width: '88%', border: '1.5px solid #111111' }} />
                  ):('')}
                  </div>
                </div>

              <div className='maincontents border border-solid border-red-500'>
                {albumContent === 1 ? <MyPost /> : ''}
                {albumContent === 2 ? <SavedPost /> : ''}
                {albumContent === 3 ? <BoughtPhoto /> : ''}
              </div>
            </div>

        </>
    );
}
export default Album;