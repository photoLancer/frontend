import { React, useRef, useState, useContext, useEffect } from 'react';
import styles from './searchbar.module.css';
import { SearchDispatchContext } from '../../routes/HomePage/HomePage';
import axios from 'axios';

function SearchBookmark(props) {
  const { id, postNum, bookmarkName, onClick } = props;
  console.log(id, postNum, bookmarkName);
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
  console.log(bookmarks);
  console.log(isFocus);
  return (
    <>
      <div className='border border-solid border-black w-full mb-10'>
        <div className={styles.search_bar} onClick={onFocus}>
          <div className='w-11/12 flex flex-row justify-between'>
            <input
              type='text'
              placeholder='search..'
              className={styles.search_input}
              ref={inputRef}
              value={searchInput}
              onChange={inputHandler}
              onBlur={onBlur}
            />
            <button onClick={searchHandler}>O</button>
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
          <div className={styles.tag}>#Trip</div>
          <div className={styles.tag}>#Travel</div>
          <div className={styles.tag}>#Journey</div>
          <div className={styles.tag}>#Tour</div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
