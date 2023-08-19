import React, { useContext, useState } from 'react';
import styles from './uploadphoto.module.css';
import { UploadDispatchContext } from '../../App';
import Uploading from './Uploading';
import Uploaded from './Uploaded';
import { useSelector } from 'react-redux';
import axios from 'axios';

function UploadPhoto() {
  const userState=useSelector((state)=>state.user);
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
  const [inputValueFromUploading,setInputValueFromUploading]=useState({});
  
    const onValueChange=(inputValue)=>{
      setInputValueFromUploading(inputValue);

    };
  
  const finishHandler=async()=>{
    console.log('upload');
    try {
      const postContent = {
        content: inputValueFromUploading.content,
        isSale: inputValueFromUploading.isSale,
        point: inputValueFromUploading.point,
        bookmark: inputValueFromUploading.bookmark,
      };
  
      const headers = {
        Authorization: userState.jwt,
        "Content-type": "application/json",
      };
  
      const responseContent = await axios.post(
        'http://photolancer.shop/postContent',
        postContent,
        { headers }
      );
      console.log('포스트 내용 업로드 완료:', responseContent.data);
  
      const formData = new FormData();
      formData.append('imgFile', mainImg);
  
      const responseImage = await axios.post(
        'http://photolancer.shop/imgFile',
        formData,
        { headers: { Authorization: headers.Authorization, ...formData.getHeaders() } }
      );
      console.log('이미지 파일 업로드 완료:', responseImage.data);
  
    } catch (error) {
      console.error('오류:', error);
    }
  };
  
  const [agreeService,setAgreeService]=useState(false);

    const handleAgreeChange=()=>{
        setAgreeService(true);
    };

    const [mainImg,setMainImg]=useState('');

    const displayPreview = (file)=>{
      const reader = new FileReader();
      
        reader.onload = function (event) {
          setMainImg(event.target.result);
        };
      
        reader.readAsDataURL(file);
    };

    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0]; // 드롭한 파일 가져오기
      
      if (file) {
        displayPreview(file);
      }
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };

    const setPreviewImg=(event)=>{
      const file = event.target.files[0]; // 선택한 파일 가져오기
      
      if (file) {
        displayPreview(file);
      }
    }
    
  return (   
    <>
      
          {uploadPhoto1&&(
            <>
         <div className={styles.screen}>
      <div className={styles.uploadScreen}>
          <div className={styles.uploadwrap}>
          <p className={styles.head}>사진 올리기</p>
          <form className={styles.dropzone} id='myDropzone' onDrop={handleDrop}
  onDragOver={handleDragOver} >
            <div className={styles.innerwrap}>
            {mainImg?(
              <>
              <img alt='메인사진' src={mainImg} className={styles.previewimg} />
              
              </>
            ):(
            <>
            <p className={styles.text1}>파일을 이곳에 끌어 놓아주세요</p><br />
            <p className={styles.text2}>한 번에 1장까지만 업로드 가능</p><br/>
            <input type="file" className={styles.selectbtn} accept='image/*' onChange={setPreviewImg}/>
           </>
           )}
            </div>
          </form>
          {mainImg?(
            <>
             <button className={styles.nextbtn1_1} onClick={nextStepHandler1}>다음</button>
            </>
          ):(
          <button className={styles.nextbtn1} >다음</button>
          )}
          </div>
          </div>
          </div>
           </>
          )}
          {uploadPhoto2&&(
          <>
          <div className={styles.screen}>
      <div className={styles.uploadScreen}>
            <Uploading mainImg={mainImg} handleValue={onValueChange}/>  {/*함수 전달로 자식컴포에서 정보 불러옴*/}
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
            <Uploaded mainImg={mainImg}/>
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
