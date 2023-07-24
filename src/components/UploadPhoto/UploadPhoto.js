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
        <div className={styles.uploadScreen}>
          <div className={styles.uploadwrap}>
          <p className={styles.text}>사진 올리기</p>
          <form action='/target' className={styles.dropzone} id='myDropzone'></form>
          <button className={styles.nextbtn}>다음</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadPhoto;
