import React, { useState } from 'react';
import Profile from '../../components/Myprofile/profile/Profile';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './myprofile.module.css';
import Album from '../../components/Myprofile/album/Album';
import EditProfile from '../../components/Myprofile/profile/edit';

function MyprofilePage() {
  const [profileContent,setProfileContent]=useState(1);

  const profileHandler=()=>{
    setProfileContent(1);
  };
  const albumHandler=()=>{
    setProfileContent(2);
  };
  const editprofileHandler=()=>{
    setProfileContent(3);
  };

  return (
    <>
      <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center border border-solid border-black'>
              <Sidebar current_page={2} />
            </div>
            <div className='main basis-3/4 border border-solid border-black'>
              <div className='navbar mb-8'>
                <div className='flex flex-row'>
                  <button
                    className={styles.navbar_button}
                    onClick={profileHandler}
                  >
                    Profile
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={albumHandler}
                  >
                    Album
                  </button>
                </div>
                <hr className={styles.navbar_hr} />
              </div>
              <div className='maincontents border border-solid border-red-500'>
                {profileContent === 1 ? <Profile /> : ''}
                {profileContent === 2 ? <Album /> : ''}
                {profileContent === 3 ? <EditProfile /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyprofilePage;
