import React, { useState } from 'react';
import styles from './setting.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const SettingPage=()=>{
    return(
        <>
        <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center border border-solid border-black'>
              <Sidebar current_page={2} />
            </div>
            <div className='main basis-3/4 border border-solid border-black'>


            </div>
            </div>
            </div>
            </div>
        </>
    );
}
export default SettingPage;