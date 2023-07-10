import { React, useRef, useState } from 'react';
import styles from './searchbar.module.css';

function Searchbar() {
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
