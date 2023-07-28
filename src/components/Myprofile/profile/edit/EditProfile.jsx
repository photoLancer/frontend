import { useState } from 'react';
import styles from './editprofile.module.css';

const EditProfile=()=>{
    const [inputValue,setInputValue]=useState('');

    const handleChange=(event)=>{
        setInputValue(event.target.value);
    };

    return(
        <>
        <div className={styles.header}><p>프로필 수정</p></div>
        <div className={styles.contents}>
            <div className={styles.editimg}>
                <img className={styles.imgage}></img>
                <button className={styles.editbtn}>사진 변경</button>
            </div>
            <div className={styles.editinfo}>
                <div className={styles.nicknamewrap}>
                <p className={styles.nicknamehead}>닉네임</p>
                <input type='text' className={styles.nickname} placeholder='제목을 입력해주세요'value={inputValue} onChange={handleChange}/>
                </div>
                <div className={styles.infotextwrap}>
                <p className={styles.infohead}>소개</p>
                <input type='text' className={styles.infotext} placeholder='소개를 입력해주세요' value={inputValue} onChange={handleChange} />
                </div>
            </div>
            <div className={styles.bookmark}>
                <div className={styles.bookmarkwrap}>
                <p className={styles.bookmarkhead}>북마크 설정</p>
                <input type='text' className={styles.search} placeholder='#Trip' value={inputValue} onChange={handleChange}/>
                <div className={styles.tagbox}>
                    <div className={styles.tagwrap}>
                    <span className={styles.tag}>#Trip</span>
                    <span className={styles.tag}>#food</span>
                    
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        <div className={styles.footer}>
            <button className={styles.apply}>적용</button>
            <button className={styles.cancel}>취소</button>
        </div>
        </>
    );
}
export default EditProfile;