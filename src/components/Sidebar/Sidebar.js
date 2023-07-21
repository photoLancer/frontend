import { React, useEffect, useState } from 'react';
import styles from './sidebar.module.css';

function Sidebar(props) {
  const { current_page } = props;

  const user_image_url =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC8LH9YxLxyznRum-miHeKOtlHHIXzq-KAA&usqp=CAU';

  const [lv, setLv] = useState(92.4);

  return (
    <>
      <div className='flex flex-col items-center border border-solid border-black  w-9/12'>
        <div className='user flex flex-col items-center mb-4'>
          <div className={styles.user_image}>
            <img
              src={user_image_url}
              alt='#'
              className={styles.user_image_img}
            />
          </div>
          <p className={styles.user_name}>name</p>
        </div>
        <div className='user_info w-full mb-10'>
          <div className='lv flex mb-2'>
            <p className={styles.user_info_left}>LV.5</p>
            <div className={styles.user_info_lv}>
              <div
                className={styles.user_info_black_bar}
                style={{ width: `${lv}%` }}
              ></div>
              <div className={styles.user_info_lv_number}>{lv}%</div>
            </div>
          </div>
          <div className='point flex'>
            <p className={styles.user_info_left}>Point</p>
            <p className={styles.user_info_point_right}>93400</p>
          </div>
        </div>
        <nav className='flex flex-col w-full items-center'>
          <a href='/' className={styles.nav_contents_home}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5 bg-slate-300 mr-2'></div>
              <p className={`${current_page === 1 ? 'font-semibold' : ''}`}>
                홈
              </p>
            </div>
          </a>
          <a href='/profile' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5 bg-slate-300 mr-2'></div>
              <p className={`${current_page === 2 ? 'font-semibold' : ''}`}>
                나의 프로필
              </p>
            </div>
          </a>
          <a href='/' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5 bg-slate-300 mr-2'></div>
              <p className={`${current_page === 3 ? 'font-semibold' : ''}`}>
                알람
              </p>
            </div>
          </a>
          <a href='/' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5 bg-slate-300 mr-2'></div>
              <p className={`${current_page === 4 ? 'font-semibold' : ''}`}>
                채팅
              </p>
            </div>
          </a>
          <a href='/' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5 bg-slate-300 mr-2'></div>
              <p className={`${current_page === 5 ? 'font-semibold' : ''}`}>
                사진 올리기
              </p>
            </div>
          </a>
          <a href='/setting' className={styles.nav_contents}>
            <div className='w-10/12 flex flex-row'>
              <div className='w-5 h-5 bg-slate-300 mr-2'></div>
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
