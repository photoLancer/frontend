import React from 'react';
import ProfileFrame from '../components/ProfileFrame';
import UserInfo from '../components/UserInfo';
import UserLevel from '../components/UserLevel';
import UserPoint from '../components/UserPoint';
import "../components/profile.css";


function MyprofilePage() {
  return(
    <>
    <div>프로필</div>
    {/*<Header />  
    <Sidebar />*/}
    <ProfileFrame />
    <UserInfo />
    <UserLevel />
    <UserPoint />
    </>
  );
}

export default MyprofilePage;
