import styles from './charge.module.css';

const Charge=()=>{
    return(
        <>
        <div className={styles.a}><p className={styles.chargepoint}>충전 포인트 : 12,000</p></div>
        <div className={styles.box1}>
            <p className={styles.text1}>충전할 금액</p>
            <input type='text' className={styles.entermoney} placeholder='14,000'></input>
        </div>
        <div className={styles.b}><p className={styles.afterpoint}>충전 후 보유포인트   =   22,000원</p></div>
        <div className={styles.c}><button className={styles.addbank}>- 계좌 추가</button></div>
        <div className={styles.box2}>
            <p className={styles.text2}>출금할 계좌</p>
            <input type='text' className={styles.enterbankname} placeholder='국민은행'></input>
        </div>
        <div className={styles.footer}>
            <button className={styles.chargebtn}>충전하기</button>
        </div>
        </>
    );
}
export default Charge;