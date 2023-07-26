import React from 'react';
import styles from './feedcomment.module.css';

function FeedComment(props) {
  const { user_id, name, lv, text } = props;
  return (
    <>
      <div className='flex flex-row mb-6'>
        <div className={styles.user_profile_img}>
          {/* <img src='' alt='#' /> */}
        </div>
        <div>
          <div className={styles.user_info}>
            Lv{lv}. {name}
          </div>
          <p className={styles.user_comment}>{text}</p>
          <button className={styles.reply_comment_btn}>답글달기</button>
        </div>
      </div>
    </>
  );
}

export default FeedComment;
