import React, { useContext } from 'react';
import styles from './uploadphoto.module.css';
import { UploadDispatchContext } from '../../App';

function UploadPhoto() {
  const uploadDispatch = useContext(UploadDispatchContext);
  const screenClickHandler = () => {
    uploadDispatch({ type: 'SCREEN_CLICK' });
  };
  return (
    <>
      <div className={styles.screen} onClick={screenClickHandler}>
        <div className={styles.uploadScreen}></div>
      </div>
    </>
  );
}

export default UploadPhoto;
