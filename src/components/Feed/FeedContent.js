import React, { useContext } from 'react';
import styles from './feedcontent.module.css';
import { PhotoContext } from '../../routes/HomePage/HomePage';

function FeedContent() {
  const photo = useContext(PhotoContext);

  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className={`w-7/12  ${styles.content}`} onClick={onClickHandler}>
        {photo.photo_id}
      </div>
    </>
  );
}

export default FeedContent;
