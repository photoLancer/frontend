import React from 'react';
import Profile from '../../components/Myprofile/profile/Profile';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './myprofile.module.css';

function MyprofilePage() {
  return (
    <>
      <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center border border-solid border-black'>
              <Sidebar current_page={2} />
            </div>
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyprofilePage;
