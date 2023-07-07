import React from 'react';
import styles from './sidebar.module.css';

function Sidebar() {
  return (
    <>
      <div className='user'>
        <img src='' alt='' />
        <p>name</p>
      </div>
      <div className='user_info'>
        <div className='lv'>
          <p>LV.5</p>
          <div>92.4%</div>
        </div>
        <div className='point'>
          <p>Point</p>
          <p>93400</p>
        </div>
      </div>
      <nav>
        <a href='/'>홈</a>
        <a href='/profile'>나의 프로필</a>
        <a href='#'>알림</a>
        <a href='#'>채팅</a>
        <a href='#'>사진 올리기</a>
        <a href='#'>설정</a>
      </nav>
    </>
  );
}

export default Sidebar;
