import styles from './editprofile.module.css';

const EditProfile=()=>{
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
                <p>닉네임</p>
                <p><input type='text' className={styles.nickname}>Tokemoo</input></p>
                </div>
                <div className={styles.infotextwrap}>
                <p>소개</p>
                <p><input type='text' className={styles.infotext} placeholder='코멘트를 입력하세요'></input></p>
                </div>
                <div className={styles.bookmark}>
                <p>북마크 설정</p>
                <p><input type='text' className={styles.search} placeholder='키워드를 입력하세요'></input></p>
                <div className={styles.tagbox}>
                    <span className={styles.tag}></span>
                    <span className={styles.tag}></span>
                    <span className={styles.tag}></span>
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