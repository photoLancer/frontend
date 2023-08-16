import React, { useState, createContext, useReducer } from 'react';
import styles from './homePage.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Searchbar from '../../components/Searchbar/Searchbar';
import Explore from '../../components/HomePageComponent/Explore/Explore';
import Bookmark from '../../components/HomePageComponent/Bookmark/Bookmark';
import Following from '../../components/HomePageComponent/Following/Following';
import Notice from '../../components/HomePageComponent/Notice/Notice';
import Feed from '../../components/Feed/Feed';

export const PhotoContext = createContext();
export const PhotoDispatchContext = createContext();

export const SearchContext = createContext();
export const SearchDispatchContext = createContext();

const initialPhotoState = {
  photoClicked: false,
  photo_id: 0,
};
const photoReducer = (state, action) => {
  switch (action.type) {
    case 'PHOTO_CLICK':
      return {
        ...state,
        photoClicked: true,
        photo_id: action.id,
      };
    case 'SCREEEN_CLICK':
      return {
        ...state,
        photoClicked: false,
        photo_id: 0,
      };
    default:
      throw new Error('Unhandled action');
  }
};

const initialSearchState = {
  searchInput: null,
};
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        searchInput: action.search,
      };
    case 'MAKE_NULL':
      return {
        ...state,
        searchInput: null,
      };

    default:
      throw new Error('Unhandled action');
  }
};

function HomePage() {
  const [homeContent, setHomeContent] = useState(1);
  const [photoState, photoDispatch] = useReducer(
    photoReducer,
    initialPhotoState
  );
  const [searchState, searchDispatch] = useReducer(
    searchReducer,
    initialSearchState
  );

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
        {/* <p>{photoState.photo_id}</p> */}
        {photoState.photoClicked ? (
          <PhotoContext.Provider value={photoState}>
            <PhotoDispatchContext.Provider value={photoDispatch}>
              <Feed />
            </PhotoDispatchContext.Provider>
          </PhotoContext.Provider>
        ) : (
          ''
        )}
        <SearchContext.Provider value={searchState}>
          <SearchDispatchContext.Provider value={searchDispatch}>
            <div class={styles.contents}>
              <Header />
              <div className='flex flex-row'>
                <div className='sidebar basis-1/4 flex flex-row justify-center '>
                  <Sidebar current_page={1} />
                </div>
                <div className='main basis-3/4 '>
                  <div className='searchbar'>
                    <Searchbar />
                  </div>
                  <div className='navbar mb-8'>
                    <div className='flex flex-row'>
                      <button
                        className={`${styles.navbar_button} ${
                          homeContent === 1 ? styles.selected : ''
                        }`}
                        onClick={exploreHandler}
                      >
                        Explore
                      </button>
                      <button
                        className={`${styles.navbar_button} ${
                          homeContent === 2 ? styles.selected : ''
                        }`}
                        onClick={bookmarkHandler}
                      >
                        Bookmark
                      </button>
                      <button
                        className={`${styles.navbar_button} ${
                          homeContent === 3 ? styles.selected : ''
                        }`}
                        onClick={followingHandler}
                      >
                        Following
                      </button>
                      <button
                        className={`${styles.navbar_button} ${
                          homeContent === 4 ? styles.selected : ''
                        }`}
                        onClick={noticeHandler}
                      >
                        Notice
                      </button>
                    </div>
                    <hr className={styles.navbar_hr} />
                  </div>

                  <PhotoDispatchContext.Provider value={photoDispatch}>
                    <div className='maincontents'>
                      {homeContent === 1 ? <Explore /> : ''}
                      {homeContent === 2 ? <Bookmark /> : ''}
                      {homeContent === 3 ? <Following /> : ''}
                      {homeContent === 4 ? <Notice /> : ''}
                    </div>
                  </PhotoDispatchContext.Provider>
                </div>
              </div>
            </div>
          </SearchDispatchContext.Provider>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default HomePage;
