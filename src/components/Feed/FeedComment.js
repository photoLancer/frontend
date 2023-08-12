import React from 'react';
import styles from './feedcomment.module.css';

function FeedComment(props) {
  const { user_id, name, lv, text, profileUrl, comment_id } = props;
  // console.log(comment_id);  -> 삭제, 대댓글에 필요
  return (
    <>
      <div className='flex flex-row mb-6'>
        <div className={styles.user_profile_img}>
          <img src={profileUrl} alt='#' />
        </div>
        <div className='flex flex-col'>
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
