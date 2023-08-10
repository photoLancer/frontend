import React, { useState } from 'react';
import styles from './setting.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Payment from '../../components/SettingPage/Payment';
import Account from '../../components/SettingPage/Account';

const SettingPage = () => {
  const [settingContent, setSettingContent] = useState(1);

  const accountHandler = () => {
    setSettingContent(1);
  };
  const paymentHandler = () => {
    setSettingContent(2);
  };

  return (
    <>
      <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center border border-solid border-black'>
              <Sidebar current_page={6} />
            </div>
            <div className='main basis-3/4 border border-solid border-black'>
              <p className={styles.head}>설정</p>
              <div className='flex flex-row'>
                <button
                  className={styles.navbar_button}
                  onClick={accountHandler}
                >
                  계정 정보
                </button>
                <button
                  className={styles.navbar_button}
                  onClick={paymentHandler}
                >
                  결제 정보
                </button>
              </div>
              <div className='maincontents border border-solid border-red-500'>
                {settingContent === 1 ? <Account /> : ''}
                {settingContent === 2 ? <Payment /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SettingPage;
