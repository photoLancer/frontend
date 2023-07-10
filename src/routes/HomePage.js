import React from 'react';
import styles from './homePage.module.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Searchbar from '../components/Searchbar/Searchbar';

function HomePage() {
  return (
    <>
      <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className='flex flex-row'>
            <div className='sidebar basis-1/4 flex flex-row justify-center border border-solid border-black'>
              <Sidebar />
            </div>
            <div className='main basis-3/4 border border-solid border-black'>
              <div className='searchbar'>
                <Searchbar />
              </div>
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
