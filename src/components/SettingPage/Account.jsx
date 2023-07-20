import styles from './account.module.css';

const Account=()=>{
    return(
    <>
    <div className={styles.bigbox}>
        <div className={styles.middlebox}>
            <p className={styles.headtext}>소셜 로그인</p>
            <div className={styles.content}>
                <div className={styles.smallbox1}>
                    <img className={styles.snslogo}></img>
                    <p className={styles.snsname}>Twitter</p>
                    <button className={styles.connectbtn}>연결해제</button>
                </div>
                <div className={styles.smallbox1}>
                    <img className={styles.snslogo}></img>
                    <p className={styles.snsname}>Naver</p>
                    <button className={styles.connectbtn}>연결</button>
                </div>
            </div>
        </div>
        <div className={styles.middlebox}>
            <p className={styles.headtext}>암호</p>
            <div className={styles.content}>
                <div className={styles.smallbox2}>
                    <p className={styles.pwtext}>현재 이용 비밀번호</p>
                    <input type='password' className={styles.pwbox}></input>
                </div>
                <div className={styles.changepw}><button className={styles.changepwbtn}>변경하기</button></div>
            </div>
        </div>
        <div className={styles.middlebox}>
            <p className={styles.headtext}>플랜</p>
            <div className={styles.content}>
                <div className={styles.smallbox3}>
                    <p className={styles.plantext}>현재 이용 플랜</p>
                    <p className={styles.myplan}>Standard</p>
                </div>
                <div className={styles.smallbox4}>
                    <p className={styles.smalltext}>혜택 소개소개소개</p>
                    <p className={styles.smalltext}>혜택 소개소개소개</p>
                    <p className={styles.smalltext}>혜택 소개소개소개</p>
                </div>
                <div className={styles.changeplan}><button className={styles.changeplanbtn}>Pro 버전으로 변경</button></div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Account;