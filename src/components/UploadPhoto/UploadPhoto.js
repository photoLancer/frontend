import React, { useContext, useState } from 'react';
import styles from './uploadphoto.module.css';
import { UploadDispatchContext } from '../../App';
import Uploading from './Uploading';
import Uploaded from './Uploaded';

function UploadPhoto() {
  const uploadDispatch = useContext(UploadDispatchContext);
  /*const screenClickHandler = () => {
    uploadDispatch({ type: 'SCREEN_CLICK' });
  };
  const uploadScreenClickHandler = (e) => {
    e.stopPropagation();
  };*/
  
  const [uploadPhoto1,setUploadPhoto1]=useState(true);
  const [uploadPhoto2,setUploadPhoto2]=useState(false);
  const [uploadPhoto3,setUploadPhoto3]=useState(false);

  const nextStepHandler1=()=>{
    setUploadPhoto1(false);
    setUploadPhoto2(true);
    setUploadPhoto3(false);
  };
  const nextStepHandler2=()=>{
    setUploadPhoto1(false);
    setUploadPhoto2(false);
    setUploadPhoto3(true);
  };
  const cancelHandler=()=>{
    setUploadPhoto1(false);
    setUploadPhoto2(false);
    setUploadPhoto3(false);
  }
  const backHandler=()=>{
    setUploadPhoto1(false);
    setUploadPhoto2(true);
    setUploadPhoto3(false);
  };
  const finishHandler=()=>{

  };
  
  const [agreeService,setAgreeService]=useState(false);

    const handleAgreeChange=()=>{
        setAgreeService(true);
    };
  return (   
    <>
      
          {uploadPhoto1&&(
            <>
         <div className={styles.screen}>
      <div className={styles.uploadScreen}>
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
          </div>
          </div>
           </>
          )}
          {uploadPhoto2&&(
          <>
          <div className={styles.screen}>
      <div className={styles.uploadScreen}>
            <Uploading />
            <div className={styles.agreebtn}>
                    <p className={styles.agreetext}>서비스 약관을 읽고 동의합니다.</p>
                    <input type='checkbox' onChange={handleAgreeChange}/>
                </div>
            {agreeService?(
              <>
              <button className={styles.nextbtn2} onClick={nextStepHandler2}>다음</button>
              </>
            ):(
              <>
              <button className={styles.nextbtn3}>다음</button>
              </>
            )}
          </div>
          </div>
          </>
          )}
           {uploadPhoto3&&(
          <>
          <div className={styles.screen}>
      <div className={styles.uploadScreen}>
            <Uploaded />
            <div className={styles.btnwrap}>
            <button className={styles.cancelbtn} onClick={cancelHandler}>취소</button>
            <button className={styles.backbtn} onClick={backHandler}>뒤로 가기</button>
            <button className={styles.finishbtn} onClick={finishHandler}>게시글 업로드</button>
            </div>
            </div>
            </div>
          </>
          )}
        
        
    </>
  );
}

export default UploadPhoto;
