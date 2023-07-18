import React from 'react';
import styles from './clickcontest.module.css';

function Clickcontest(props) {
  const { info } = props;
  return (
    <>
      <div>
        <h2 className={styles.title}>Contest Info</h2>
        <div className={`w-full h-80 ${styles.contest_info}`}>
          <p>contest info</p>
        </div>
        <h2 className={styles.title}>Contest Ranked photo</h2>
        <div className='flex flex-row'>
          <div
            className={`basis-6/12 h-84 ${styles.contest_photo} ${styles.first_photo}`}
          >
            <img
              src={info[0].img}
              alt={info[0].id}
              className={styles.contest_photo_img}
            />
          </div>
          <div className='basis-6/12'>
            <div
              className={`h-56 mb-4 ${styles.contest_photo} ${styles.second_photo}`}
            >
              <img
                src={info[1].img}
                alt={info[0].id}
                className={styles.contest_photo_img}
              />
            </div>
            <div
              className={`h-56 ${styles.contest_photo} ${styles.second_photo}`}
            >
              <img
                src={info[2].img}
                alt={info[0].id}
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
