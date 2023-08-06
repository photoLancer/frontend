import React, { useEffect, useRef, useState } from 'react';
import styles from './setting.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Payment from '../../components/SettingPage/Payment';
import Account from '../../components/SettingPage/Account';

const SettingPage = () => {
  const [settingContent, setSettingContent] = useState(1);
  const accountbtn=useRef();
  const paymentbtn=useRef();

  const [hrShowAccount,setHrShowAccount]=useState(false);
  const [hrShowPayment,setHrShowPayment]=useState(false);

  const accountHandler = () => {
    setSettingContent(1);
    setHrShowAccount(true);
    setHrShowPayment(false);
  };
  const paymentHandler = () => {
    setSettingContent(2);
    setHrShowAccount(false);
    setHrShowPayment(true);
  };

    useEffect(()=>{
      if(settingContent===1){
        accountbtn.current.style='color:#111111';
      }
      else{
        accountbtn.current.style='';
      }
      if(settingContent===2){
        paymentbtn.current.style='color:#111111';
      }
      else{
        paymentbtn.current.style='';
      }
    },[settingContent]);

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
                <div>
                <button
                  className={styles.navbar_button}
                  ref={accountbtn}
                  onClick={accountHandler}
                >
                  계정 정보
                </button>
                {settingContent===1||hrShowAccount?(<hr style={{ width: '88%', border: '1.5px solid #111111' }}></hr>):('')}
                </div>
                <div>
                <button
                  className={styles.navbar_button}
                  ref={paymentbtn}
                  onClick={paymentHandler}
                >
                  결제 정보
                </button>
                {settingContent===2||hrShowPayment?(<hr style={{ width: '88%', border: '1.5px solid #111111' }}></hr>):('')}
                </div>
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
