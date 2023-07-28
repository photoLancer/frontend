import React, { createContext, useContext, useReducer } from 'react';
import styles from './feed.module.css';
import FeedContent from './FeedContent';
import { PhotoDispatchContext } from '../../routes/HomePage/HomePage';
import FeedShare from './FeedShare';

export const FeedOptionDispatchContext = createContext();

const initialShareState = {
  shareClicked: false,
};

const shareReducer = (state, action) => {
  switch (action.type) {
    case 'SHARE_CLICK':
      return {
        ...state,
        shareClicked: true,
      };
    case 'SHARE_SCREEEN_CLICK':
      return {
        ...state,
        shareClicked: false,
      };
    default:
      throw new Error('Unhandled action');
  }
};

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

  const [shareState, shareDispatch] = useReducer(
    shareReducer,
    initialShareState
  );
  return (
    <>
      <div className={styles.screen} onClick={screenClickHandler}>
        <FeedOptionDispatchContext.Provider value={shareDispatch}>
          {shareState.shareClicked ? <FeedShare /> : ''}
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
        </FeedOptionDispatchContext.Provider>
      </div>
    </>
  );
}

export default Feed;
