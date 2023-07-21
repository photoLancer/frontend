import React, { useContext } from 'react';
import styles from './feed.module.css';
import FeedContent from './FeedContent';
import { PhotoDispatchContext } from '../../routes/HomePage/HomePage';
function Feed() {
  const photoDispatch = useContext(PhotoDispatchContext);
  const screenClickHandler = () => {
    photoDispatch({ type: 'SCREEEN_CLICK' });
  };
  const leftBtnHandler = (e) => {
    e.stopPropagation();
    console.log('a');
  };
  const rightBtnHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className={styles.screen} onClick={screenClickHandler}>
        <div className={styles.contents}>
          <button
            className={styles.feed_btn}
            onClick={leftBtnHandler}
          >{`<`}</button>
          <FeedContent />
          <button
            className={styles.feed_btn}
            onClick={rightBtnHandler}
          >{`>`}</button>
        </div>
      </div>
    </>
  );
}

export default Feed;
