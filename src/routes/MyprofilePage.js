import React from 'react';
import ProfileFrame from '../components/ProfileFrame';
import UserInfo from '../components/UserInfo';
import UserLevel from '../components/UserLevel';
import UserPoint from '../components/UserPoint';
import "../components/profile.css";


function MyprofilePage() {
  return(
    <>
    {/*<Header />  
    <Sidebar />*/}
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
