import React, { useState } from 'react';
import styles from './album.module.css';
import MyPost from "./MyPost";
import SavedPost from "./SavedPost";
import BoughtPhoto from "./BoughtPhoto";


function Album() {
    const [albumContent,setAlbumContent]=useState(1);

        const mypostHandler=()=>{
            setAlbumContent(1);
        };
        const savedpostHandler=()=>{
            setAlbumContent(2);
        };
        const boughtphotoHandler=()=>{
            setAlbumContent(3);
        };
    
    return (
        <>
        <div className='main basis-3/4 border border-solid border-black relative'>
                <div className={styles.navbar}>
                  <button
                    className={styles.navbar_button}
                    onClick={mypostHandler}
                  >
                    My Post
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={savedpostHandler}
                  >
                    Saved Post
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={boughtphotoHandler}
                  >
                    Bought Photo
                  </button>
                </div>

              <div className={styles.editphotobox}><button className={styles.editphotobtn}>Edit Photo</button></div>

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