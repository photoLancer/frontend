import styles from './account.module.css';

const Account=()=>{
    return(
    <>
    <div className={styles.bigbox}>
        <div className={styles.middlebox1}>
            <p className={styles.headtext}>소셜 로그인</p>
            <div className={styles.content1}>
                <div className={styles.smallbox1}>
                    <div className={styles.boxwrap}>
                    <img className={styles.snslogo}></img>
                    <p className={styles.snsname}>카카오</p>
                    </div>
                    <div className={styles.btnwrap}>
                    <button className={styles.connectbtn}>연결</button>
                    </div>
                </div>
                <div className={styles.smallbox1}>
                <div className={styles.boxwrap}>
                    <img className={styles.snslogo}></img>
                    <p className={styles.snsname}>Naver</p>
                </div>
                <div className={styles.btnwrap}>
                    <button className={styles.connectbtn}>연결해제</button>
                    </div>   
                </div>
            </div>
        </div>
        <div className={styles.middlebox2}>
            <p className={styles.headtext}>암호</p>
            <div className={styles.content2}>
                <div className={styles.smallbox2}>
                    <p className={styles.pwtext}>현재 이용 비밀번호</p>
                    <input type='password' className={styles.pwbox}></input>
                </div>
                <div className={styles.changepw}><button className={styles.changepwbtn}>변경하기</button></div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Account;