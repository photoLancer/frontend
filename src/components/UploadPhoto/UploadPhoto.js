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
        <div className={styles.uploadScreen}>
          <div className={styles.uploadwrap}>
          <p className={styles.head}>사진 올리기</p>
          <form action='/target' className={styles.dropzone} id='myDropzone'>
            <div className={styles.innerwrap}>
            <p className={styles.text1}>파일을 이곳에 끌어 놓아주세요</p><br />
            <p className={styles.text2}>한 번에 1장까지만 업로드 가능</p>
            <button className={styles.selectbtn}>컴퓨터에서 선택</button>
            </div>
          </form>
          <button className={styles.nextbtn}>다음</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadPhoto;
