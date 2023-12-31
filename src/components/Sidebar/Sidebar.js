import { React, useContext, useEffect, useState } from 'react';
import styles from './sidebar.module.css';
import { UploadDispatchContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import home from '../../img/home.png';
import profile from '../../img/profile.png';
import alarm from '../../img/alarm.png';
import chat from '../../img/chat.png';
import picture from '../../img/picture.png';
import settings from '../../img/settings.png';

function Sidebar(props) {
  const userState = useSelector((state) => state.user);
  const uploadDispatch = useContext(UploadDispatchContext);
  const { current_page } = props;

  const user_image_url =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC8LH9YxLxyznRum-miHeKOtlHHIXzq-KAA&usqp=CAU';

  // const [lv, setLv] = useState(userState.userLvExp);

  const uploadHandler = (e) => {
    e.preventDefault();
    uploadDispatch({ type: 'UPLOAD_CLICK' });
  };

  return (
    <>
      <div className='flex flex-col items-center  w-9/12'>
        <div className='user flex flex-col items-center mb-4 w-full'>
          <div className={styles.user_image}>
            <img
              src={userState.userProfileImg}
              alt='#'
              className={styles.user_image_img}
            />
          </div>
          <p className={styles.user_name}>{userState.userName}</p>
        </div>
        <div className='user_info w-full mb-10'>
          <div className='lv flex mb-2'>
            <p className={styles.user_info_left}>LV.{userState.userLv}</p>
            <div className={styles.user_info_lv}>
              <div
                className={styles.user_info_black_bar}
                style={{ width: `${userState.userLvExp}%` }}
              ></div>
              <div className={styles.user_info_lv_number}>
                {userState.userLvExp}%
              </div>
            </div>
          </div>
          <div className='point flex'>
            <p className={styles.user_info_left}>Point</p>
            <p className={styles.user_info_point_right}>
              {userState.userPoint}
            </p>
          </div>
        </div>
        <nav className='flex flex-col w-full items-center'>
          <a href='/home' className={styles.nav_contents_home}>
            <div className='w-10/12 flex flex-row items-center'>
              <div className='w-10 h-10  mr-2'>
                <img src={home} alt='a' className={styles.home_img} />
              </div>
              <p className={`${current_page === 1 ? 'font-semibold' : ''}`}>
                홈
              </p>
            </div>
          </a>
          <a href='/profile' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5  mr-2'>
                <img src={profile} alt='' />
              </div>
              <p className={`${current_page === 2 ? 'font-semibold' : ''}`}>
                나의 프로필
              </p>
            </div>
          </a>
          <a href='/alarm' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5  mr-2'>
                <img src={alarm} alt='' />
              </div>
              <p className={`${current_page === 3 ? 'font-semibold' : ''}`}>
                알림
              </p>
            </div>
          </a>
          <a href='/chat' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5  mr-2'>
                <img src={chat} alt='' />
              </div>
              <p className={`${current_page === 4 ? 'font-semibold' : ''}`}>
                채팅
              </p>
            </div>
          </a>
          <a href='/' className={styles.nav_contents} onClick={uploadHandler}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5  mr-2'>
                <img src={picture} alt='' />
              </div>
              <p className={`${current_page === 5 ? 'font-semibold' : ''}`}>
                사진 올리기
              </p>
            </div>
          </a>
          <a href='/setting' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5  mr-2'>
                <img src={settings} alt='' />
              </div>
              <p className={`${current_page === 6 ? 'font-semibold' : ''}`}>
                설정
              </p>
            </div>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
