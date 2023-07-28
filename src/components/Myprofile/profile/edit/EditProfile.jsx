import { useState } from 'react';
import styles from './editprofile.module.css';
import Profile from '../Profile';

const EditProfile=()=>{
    const [inputValue, setInputValue] = useState('');

    const HandleChange=(event)=>{
        setInputValue(event.target.value);
    };

    const [applyData,setApplyData]=useState(false);
    const [cancelData,setCancelData]=useState(false);

    const applyHandler=()=>{
        setInputValue(inputValue);
        setApplyData(true);
        setCancelData(false);
    };
    const cancelHandler=()=>{
        setInputValue('');
        setApplyData(false);
        setCancelData(true);
    };

    return(
        <>
        {applyData || cancelData ? (
        <Profile />
        ) : (
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
                <input type='text' className={styles.nickname} placeholder='제목을 입력해주세요'value={inputValue} onChange={HandleChange}/>
                </div>
                <div className={styles.infotextwrap}>
                <p className={styles.infohead}>소개</p>
                <input type='text' className={styles.infotext} placeholder='소개를 입력해주세요' value={inputValue} onChange={HandleChange} />
                </div>
            </div>
            <div className={styles.bookmark}>
                <div className={styles.bookmarkwrap}>
                <p className={styles.bookmarkhead}>북마크 설정</p>
                <div className={styles.searchwrap}><input type='text' className={styles.search} placeholder='#Trip' value={inputValue} onChange={HandleChange}/><button className={styles.add}>+</button></div>
                <div className={styles.tagbox}>
                    <div className={styles.tagwrap}>
                    <span className={styles.tag}>#Trip<button className={styles.delete}>x</button></span>
                    <span className={styles.tag}>#food<button className={styles.delete}>x</button></span>
                    
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        <div className={styles.footer}>
            <button className={styles.apply} onClick={applyHandler}>적용</button>
            <button className={styles.cancel } onClick={cancelHandler}>취소</button>
        </div>
        </>
        )}
        </>
    );
}
export default EditProfile;