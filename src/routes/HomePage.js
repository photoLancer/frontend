import React from 'react';
import styles from './homePage.module.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';

function HomePage() {
  return (
    <>
      <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center border border-solid border-blackd'>
              <Sidebar />
            </div>
            <div className='main basis-3/4'>
              <div className='searchbar'>searchbar</div>
              <div className='navbar'>navbar</div>
              <div classname='maincontents'>maincontents</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
