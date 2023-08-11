import React, { useContext } from 'react';
import styles from './clickcontest.module.css';
import { PhotoDispatchContext } from '../../../routes/HomePage/HomePage';

function Clickcontest(props) {
  const photoDispatch = useContext(PhotoDispatchContext);
  const { info } = props;
  const photoClickHandler = (id) => {
    photoDispatch({ type: 'PHOTO_CLICK', id: id });
  };
  return (
    <>
      <div>
        <h2 className={styles.title}>Contest Ranked photo</h2>
        <div className='flex flex-row'>
          <div
            className={`basis-6/12 h-84 ${styles.contest_photo} ${styles.first_photo}`}
            onClick={() => photoClickHandler(info[0].post.postId)}
          >
            <div className={styles.ranking}>{info[0].ranked}</div>
            <img
              src={info[0].post.thumbNailUri}
              alt={info[0].post.postId}
              className={styles.contest_photo_img}
            />
          </div>
          <div className='basis-6/12'>
            <div
              className={`h-56 mb-4 ${styles.contest_photo} ${styles.second_photo}`}
              onClick={() => photoClickHandler(info[1].post.postId)}
            >
              <div className={styles.ranking}>{info[1].ranked}</div>
              <img
                src={info[1].post.thumbNailUri}
                alt={info[1].post.postId}
                className={styles.contest_photo_img}
              />
            </div>
            <div
              className={`h-56 ${styles.contest_photo} ${styles.second_photo}`}
              onClick={() => photoClickHandler(info[2].post.postId)}
            >
              <div className={styles.ranking}>{info[2].ranked}</div>
              <img
                src={info[2].post.thumbNailUri}
                alt={info[2].post.postId}
                className={styles.contest_photo_img}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clickcontest;
