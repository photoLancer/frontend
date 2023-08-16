import React, { useState } from 'react';
import Profile from '../../components/Myprofile/profile/Profile';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './myprofile.module.css';
import Album from '../../components/Myprofile/album/Album';

function MyprofilePage() {
  const [profileContent, setProfileContent] = useState(1);

  const profileHandler = () => {
    setProfileContent(1);
  };
  const albumHandler = () => {
    setProfileContent(2);
  };

  return (
    <>
      <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center '>
              <Sidebar current_page={2} />
            </div>
            <div className='main basis-3/4 '>
              <div className='navbar mb-8'>
                <div className='flex flex-row'>
                  <button
                    className={`${styles.navbar_button} ${
                      profileContent === 1 ? styles.selected : ''
                    }`}
                    onClick={profileHandler}
                  >
                    Profile
                  </button>
                  <button
                    className={`${styles.navbar_button} ${
                      profileContent === 2 ? styles.selected : ''
                    }`}
                    onClick={albumHandler}
                  >
                    Album
                  </button>
                </div>
                <hr className={styles.navbar_hr} />
              </div>
              <div className='maincontents '>
                {profileContent === 1 ? <Profile /> : ''}
                {profileContent === 2 ? <Album /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyprofilePage;
