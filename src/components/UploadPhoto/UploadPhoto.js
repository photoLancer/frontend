import React, { useContext, useState } from 'react';
import styles from './uploadphoto.module.css';
import { UploadDispatchContext } from '../../App';
import Uploading from './Uploading';

function UploadPhoto() {
  const uploadDispatch = useContext(UploadDispatchContext);
  const screenClickHandler = () => {
    uploadDispatch({ type: 'SCREEN_CLICK' });
  };
  const uploadScreenClickHandler = (e) => {
    e.stopPropagation();
  };
  
  const [uploadPhoto1,setUploadPhoto1]=useState(false);
  const [uploadPhoto2,setUploadPhoto2]=useState(true);

  const nextStepHandler1=()=>{
    setUploadPhoto1(false);
    setUploadPhoto2(true);
  };
  const nextStepHandler2=()=>{
    setUploadPhoto1(false);
    setUploadPhoto2(true);
  };

  return (   
    <>
      <div className={styles.screen} onClick={screenClickHandler}>
      <div className={styles.uploadScreen}>
          {uploadPhoto1&&(
            <>
         
          <div className={styles.uploadwrap}>
          <p className={styles.head}>사진 올리기</p>
          <form action='/target' className={styles.dropzone} id='myDropzone'>
            <div className={styles.innerwrap}>
            <p className={styles.text1}>파일을 이곳에 끌어 놓아주세요</p><br />
            <p className={styles.text2}>한 번에 1장까지만 업로드 가능</p><br/>
            <button className={styles.selectbtn}>컴퓨터에서 선택</button>
            </div>
          </form>
          <button className={styles.nextbtn1} onClick={nextStepHandler1}>다음</button>
          </div>
          
           </>
          )}
          {uploadPhoto2&&(
          <>
            <Uploading />
            <button className={styles.nextbtn2} onClick={nextStepHandler2}>다음</button>
          </>)}
        
          </div>
      </div>
    </>
  );
}

export default UploadPhoto;
