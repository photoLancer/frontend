import { React, useRef, useState, useContext } from 'react';
import styles from './searchbar.module.css';
import { SearchDispatchContext } from '../../routes/HomePage/HomePage';

function Searchbar() {
  const searchDispatch = useContext(SearchDispatchContext);
  const [searchInput, setSearchInput] = useState('');
  const inputRef = useRef();
  const onFocus = () => {
    inputRef.current.focus();
  };

  const inputHandler = (e) => {
    setSearchInput(e.currentTarget.value);
  };

  const searchHandler = (e) => {
    console.log(searchInput);
    searchDispatch({ type: 'SEARCH', search: searchInput });
    setSearchInput('');
  };

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
            />
            <button onClick={searchHandler}>O</button>
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
