import styles from './uploading.module.css';

const Uploading =()=>{
    return(
        <>
        <div className={styles.uploadwrap}>
          <p className={styles.head}>사진 올리기</p>
          <div className={styles.uploadbox}>
            <img className={styles.photo}></img>
            <div className={styles.infowrap}>
                <div className={styles.commentwrap}>
                    <p className={styles.texthead}>코멘트</p>
                    <input type='text' className={styles.commentbox} />
                </div>
                
                <div className={styles.bookmarkwrap}>
                <p className={styles.texthead}>북마크 설정</p>
                <div className={styles.searchwrap}><input type='text' className={styles.search} placeholder='#Trip'/><button className={styles.add}>+</button></div>
                <div className={styles.tagbox}>
                    <div className={styles.tagwrap}>
                    <span className={styles.tag}>#Trip<button className={styles.delete}>{`x`}</button></span>
                    <span className={styles.tag}>#food<button className={styles.delete}>{`x`}</button></span>
                    </div>
                
                </div>
            </div>
            <div className={styles.selectwrap}>
            <div className={styles.selecthead}>
            <p className={styles.texthead}>판매 여부 설정</p>
            <div className={styles.checkboxwrap}>
            <input type='checkbox'/><p className={styles.answer}>예</p>
            <input type='checkbox'/><p className={styles.answer}>아니요</p>
            </div>
            </div>
            <div className={styles.selectcontent}>
                <h1>* 판매 시 주의사항</h1><br/>
                <h1>판매 설정 시, 해당 사진에 대한 저작권에 대한 책임은 본인에게 있다.</h1>
            </div>
            <div className={styles.selectfoot}>
                <button className={styles.servicebtn}>서비스 약관</button>
                <div className={styles.agreebtn}>
                    <p className={styles.agreetext}>서비스 약관을 읽고 동의합니다.</p>
                    <input type='checkbox' />
                </div>
            </div>
            </div>
            </div>
          </div>
         
          </div>
        </>
    );
}
export default Uploading;