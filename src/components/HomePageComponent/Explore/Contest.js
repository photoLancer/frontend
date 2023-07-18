import React, { useEffect } from 'react';
import styles from './contest.module.css';

function Contest(props) {
  const { info } = props;
  useEffect(() => {
    console.log(info);
  }, []);
  return (
    <>
      <div className='flex flex-row'>
        <div className={`basis-1/3 h-84 ${styles.contest_photo}`}>
          <img
            src={info[0].img}
            alt={info[0].id}
            className={styles.contest_photo_img}
          />
        </div>
        <div className='basis-1/3'>
          <div className={`h-40 mb-4 ${styles.contest_photo}`}>
            <img
              src={info[1].img}
              alt={info[0].id}
              className={styles.contest_photo_img}
            />
          </div>
          <div className={`h-40 ${styles.contest_photo}`}>
            <img
              src={info[2].img}
              alt={info[0].id}
              className={styles.contest_photo_img}
            />
          </div>
        </div>
        <div className={`basis-1/3 ${styles.contest_info}`}>
          <p>contest info</p>
        </div>
      </div>
    </>
  );
}

export default Contest;
