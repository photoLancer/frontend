import React, { useState } from 'react';
import styles from './alarmpage.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Searchbar from '../../components/Searchbar/Searchbar';
import Total from './AlarmPageComponent/Total/Total';
import Sell from './AlarmPageComponent/Sell/Sell';
import Like from './AlarmPageComponent/Like/Like';
import System from './AlarmPageComponent/System/System';
import Point from './AlarmPageComponent/Point/Point';

function AlarmPage() {
  const [selectedButton, setSelectedButton] = useState(1);
  const totalHandler = () => {
    setSelectedButton(1);
  };
  const sellHandler = () => {
    setSelectedButton(2);
  };
  const likeHandler = () => {
    setSelectedButton(3);
  };
  const systemHandler = () => {
    setSelectedButton(4);
  };
  const pointHandler = () => {
    setSelectedButton(5);
  };

  return (
    <>
      <div className={styles.viewport}>
        <div className={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center border border-solid border-black'>
              <Sidebar current_page={3} />
            </div>
            <div className='main basis-3/4 border border-solid border-black'>
              <div className='searchbar'>
                <Searchbar />
              </div>
              <div className='navbar mb-8'>
                <div className='flex flex-row'>
                  <button
                    className={`${styles.navbar_button} ${
                      selectedButton === 1 ? styles.selected : ''
                    }`}
                    onClick={totalHandler}
                  >
                    전체
                  </button>
                  <button
                    className={`${styles.navbar_button} ${
                      selectedButton === 2 ? styles.selected : ''
                    }`}
                    onClick={sellHandler}
                  >
                    구매,판매
                  </button>
                  <button
                    className={`${styles.navbar_button} ${
                      selectedButton === 3 ? styles.selected : ''
                    }`}
                    onClick={likeHandler}
                  >
                    공감
                  </button>
                  <button
                    className={`${styles.navbar_button} ${
                      selectedButton === 4 ? styles.selected : ''
                    }`}
                    onClick={systemHandler}
                  >
                    시스템
                  </button>
                  <button
                    className={`${styles.navbar_button} ${
                      selectedButton === 5 ? styles.selected : ''
                    }`}
                    onClick={pointHandler}
                  >
                    포인트
                  </button>
                </div>
                <hr className={styles.navbar_hr} />
              </div>
              <div className='maincontents border border-solid border-red-500'>
                {selectedButton === 1 ? <Total /> : ''}
                {selectedButton === 2 ? <Sell /> : ''}
                {selectedButton === 3 ? <Like /> : ''}
                {selectedButton === 4 ? <System /> : ''}
                {selectedButton === 5 ? <Point /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlarmPage;
