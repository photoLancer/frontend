import { React, useRef, useState, useContext, useEffect } from 'react';
import styles from './searchbar.module.css';
import { SearchDispatchContext } from '../../routes/HomePage/HomePage';
import axios from 'axios';
import search from '../../img/search.png';

function SearchBookmark(props) {
  const { id, postNum, bookmarkName, onClick } = props;
  // console.log(id, postNum, bookmarkName);
  return (
    <>
      <div
        className={`flex flex-row w-full  h-8 justify-center items-center ${styles.searchBookmark}`}
        onClick={() => onClick(bookmarkName)}
      >
        <div className='flex flex-row justify-between w-11/12 items-center'>
          <p className={styles.bookmarkName}>#{bookmarkName}</p>
          <p className={styles.postNum}>게시물 {postNum}</p>
        </div>
      </div>
    </>
  );
}

function Searchbar() {
  const searchDispatch = useContext(SearchDispatchContext);
  const [isFocus, setIsFocus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [recentlySearch, setRecentlySearch] = useState([]);
  const inputRef = useRef();
  const onFocus = () => {
    inputRef.current.focus();
    setIsFocus(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 100);
  };

  const inputHandler = (e) => {
    setSearchInput(e.currentTarget.value);
  };

  const searchHandler = (e) => {
    searchDispatch({ type: 'SEARCH', search: searchInput });
    setSearchInput('');
    setIsFocus(false);

    //최신 검색어 추가
    if (!recentlySearch.includes(searchInput)) {
      const updatedRecentlySearch = [searchInput, ...recentlySearch].slice(
        0,
        4
      );
      setRecentlySearch(updatedRecentlySearch);
    }
  };
  const handleBookmarkClick = (clickedBookmarkName) => {
    console.log('Clicked bookmark:', clickedBookmarkName);
    setSearchInput(clickedBookmarkName);
  };

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const bookmark = await axios.get(
          `http://photolancer.shop/bookmark/data`
        );
        setBookmarks(bookmark.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookmark();
  }, []);
  return (
    <>
      <div className=' w-full mb-10'>
        <div className={styles.search_bar} onClick={onFocus}>
          <div className='w-11/12 flex flex-row justify-between items-center'>
            <input
              type='text'
              placeholder='search..'
              className={styles.search_input}
              ref={inputRef}
              value={searchInput}
              onChange={inputHandler}
              onBlur={onBlur}
            />
            <button onClick={searchHandler}>
              <img src={search} alt='a' className={styles.search_img} />
            </button>
            {isFocus && (
              <div
                className={`drop-shadow-lg rounded-xl py-2 border border-solid border-black z-10 ${styles.search_bookmark}`}
              >
                {loading ? (
                  <p>loading ...</p>
                ) : (
                  bookmarks.map((bookmark) => (
                    <>
                      <SearchBookmark
                        id={bookmark.id}
                        bookmarkName={bookmark.bookmarkName}
                        postNum={bookmark.postNum}
                        onClick={handleBookmarkClick} // 클릭 핸들러 함수 전달
                      />
                    </>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        <div className='tags flex flex-row'>
          <p className={styles.recently_search_p}>최신 검색어</p>
          {recentlySearch.map((search) => (
            <>
              <div className={styles.tag}>#{search}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Searchbar;
