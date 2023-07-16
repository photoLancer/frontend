import React from 'react';
import ProfileFrame from '../../components/profile/ProfileFrame';
import UserInfo from '../../components/profile/UserInfo';
import UserLevel from '../../components/profile/UserLevel';
import UserPoint from '../../components/profile/UserPoint';
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
              <Sidebar />
            </div>
            <div className='main basis-3/4 border border-solid border-black'>
              <div className={styles.bigboxing}>
                <ProfileFrame />
                <UserInfo />
                <div className={styles.smallboxing}>
                  <UserLevel />
                  <UserPoint />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyprofilePage;
