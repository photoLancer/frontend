import React from 'react';
import ProfileFrame from '../../components/profile/ProfileFrame';
import UserInfo from '../../components/profile/UserInfo';
import UserLevel from '../../components/profile/UserLevel';
import UserPoint from '../../components/profile/UserPoint';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

function MyprofilePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='bigboxing'>
        <ProfileFrame />
        <UserInfo />
        <div className='smallboxing'>
          <UserLevel />
          <UserPoint />
        </div>
      </div>
    </>
  );
}

export default MyprofilePage;
