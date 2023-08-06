import styles from './edittitle.module.css';
import React from 'react';
import { UseSelector, useSelector } from 'react-redux';

function EditTitle() {
    const userState=useSelector((state)=>state.user);
    
    return(
        <>
        
        <div className={styles.screen}>
      <div className={styles.editScreen}>
        <div className={styles.titlewrap}>
            <div className={styles.titleheader}>
            <h1 className={styles.bigtext}>YOUR TITLE</h1><br/>
            <p className={styles.smalltext}>프로필에 노출될 타이틀을 선정해주세요.</p>
            </div>
            <div className={styles.titlecontent}>
                <div className={styles.titlecontentwrap}>
                <button className={styles.mytitle}>Beginner{userState.userTitle}</button>
                </div>
            </div>
            <a href='/profile'><div className={styles.titlefooter}>적용하기</div></a>
        </div>
      </div>
      </div>
        </>
    );
}
export default EditTitle;