import React, { useContext } from 'react';
import styles from './uploadphoto.module.css';
import { UploadDispatchContext } from '../../App';

function UploadPhoto() {
  const uploadDispatch = useContext(UploadDispatchContext);
  const screenClickHandler = () => {
    uploadDispatch({ type: 'SCREEN_CLICK' });
  };
  const uploadScreenClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className={styles.screen} onClick={screenClickHandler}>
        <div
          className={styles.uploadScreen}
          onClick={uploadScreenClickHandler}
        ></div>
      </div>
    </>
  );
}

export default UploadPhoto;
