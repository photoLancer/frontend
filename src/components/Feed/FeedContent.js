import React, { useContext } from 'react';
import styles from './feedcontent.module.css';
import { PhotoContext } from '../../routes/HomePage/HomePage';

function FeedContent() {
  const gym =
    'https://news.skhynix.co.kr/hubfs/A_Medialibrary/10_Newsroom%20Upload/2022/11%EC%9B%94/%ED%95%98%EC%9D%B4%EC%9D%B8%ED%84%B0%EB%B7%B0_%EC%B2%B4%EC%9C%A1%EC%8B%9C%EC%84%A4/SK%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4_%ED%97%AC%EC%8A%A4%EC%9E%A52.jpg';

  const photo = useContext(PhotoContext);

  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={`w-7/12 flex justify-center ${styles.content}`}
        onClick={onClickHandler}
      >
        <div className='w-11/12 h-full border border-solid border-black'>
          <div className='header flex flex-row justify-between items-center py-2'>
            <div className='uploader_info flex flex-row w-full items-center'>
              <div className={styles.uploader_profile_img}>
                <img src='' alt='' />
              </div>
              <div className={styles.uploader_level}>Lv.4</div>
              <div className={styles.uplaoder_name}>Namna</div>
            </div>
            <div className='buttons flex flex-row'>
              <button className={styles.btn}>1</button>
              <button className={styles.btn}>2</button>
              <button className={styles.btn}>3</button>
              <button className={styles.btn}>4</button>
            </div>
          </div>
          <div className={styles.photo_img}>
            <img src={gym} alt={photo.photo_id} />
          </div>
          <div className='tags flex flex-row mb-4'>
            <p className={styles.tag}>#Trip</p>
            <p className={styles.tag}>#Travel</p>
            <p className={styles.tag}>#Journey</p>
            <p className={styles.tag}>#Tour</p>
          </div>
          <div className='comment'>
            <p className={styles.comment_p}>이번 여행은 열기구 타고 오예~</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedContent;
