import React, { useEffect, useState } from 'react';
import styles from './noticeContent.module.css';

function NoticeContent(props) {
  const { id, category, title, createdAt, onClick } = props;
  return (
    <>
      <div className={`py-6 ${styles.contents}`} onClick={() => onClick(id)}>
        <div className={styles.contents1}>{category}</div>
        <div className={styles.contents2}>{title}</div>
        <div className={styles.contents3}>{createdAt}</div>
      </div>
      <hr className={styles.hr2} />
    </>
  );
}

export default NoticeContent;
