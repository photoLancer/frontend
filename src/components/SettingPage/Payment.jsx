import styles from './payment.module.css';

const Payment=()=>{
    return(
        <>
        <p className={styles.header}>결제 관리</p>
        <div className={styles.bigbox}>
            <div className={styles.mediumbox}>
                <div className={styles.smallbox1}>
                    <p className={styles.text1}>메인계좌</p>
                    <div className={styles.tinybox}>
                        <p className={styles.bankname}>농협</p>
                        <p className={styles.number}>34782939</p>
                    </div>
                    <button className={styles.deletebtn1}>삭제</button>
                </div>
                <div className={styles.smallbox2}>
                    <p className={styles.text2}>서브계좌</p>
                    <div className={styles.tinybox}>
                        <p className={styles.bankname}>국민</p>
                        <p className={styles.number}>34782939</p>
                    </div>
                    <button className={styles.deletebtn2}>삭제</button>
                </div>
            </div>
            <div className={styles.footer}>
                <button className={styles.set}>메인 계좌로 설정</button>
                <button className={styles.add}>계좌 추가하기</button>
            </div>
        </div>
        </>
    );
}
export default Payment;