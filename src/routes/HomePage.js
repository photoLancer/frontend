import React, { useState } from 'react';
import styles from './homePage.module.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Searchbar from '../components/Searchbar/Searchbar';
import Explore from '../components/HomePageComponent/Explore/Explore';
import Bookmark from '../components/HomePageComponent/Bookmark/Bookmark';
import Following from '../components/HomePageComponent/Following/Following';
import Notice from '../components/HomePageComponent/Notice/Notice';

function HomePage() {
  const [homeContent, setHomeContent] = useState(4);

  const exploreHandler = () => {
    setHomeContent(1);
  };
  const bookmarkHandler = () => {
    setHomeContent(2);
  };
  const followingHandler = () => {
    setHomeContent(3);
  };
  const noticeHandler = () => {
    setHomeContent(4);
  };

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
              <div className='navbar mb-8'>
                <div className='flex flex-row'>
                  <button
                    className={styles.navbar_button}
                    onClick={exploreHandler}
                  >
                    Explore
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={bookmarkHandler}
                  >
                    Bookmark
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={followingHandler}
                  >
                    Following
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={noticeHandler}
                  >
                    Notice
                  </button>
                </div>
                <hr className={styles.navbar_hr} />
              </div>

              <div className='maincontents border border-solid border-red-500'>
                {homeContent === 1 ? <Explore /> : ''}
                {homeContent === 2 ? <Bookmark /> : ''}
                {homeContent === 3 ? <Following /> : ''}
                {homeContent === 4 ? <Notice /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
