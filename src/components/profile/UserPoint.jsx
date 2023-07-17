import styles from './userpoint.module.css';

const UserPoint=()=>{
    return(
    <>
    <div className={styles.point}>
        <div className={styles.pointcheckwrap}>
            <div className={styles.pointcheck}>
                <div className={styles.pointhead}>Your Point</div>
                <div className={styles.myPoint}>$ 55,000</div>
            </div>
            <div className={styles.chargingBox}>
                <nav className={styles.option}>
                    <a href=""><div className={styles.exchange}>Exchange</div></a>
                    <a href=""><div className={styles.charge}>Charge</div></a>
                    <a href=""><div className={styles.tradelog}>Trade log</div></a>
                </nav>
                <div class={styles.tradeLogcheck}>
                    <table border={1}>
                        <th>포인트</th>
                        <th>적립 구분</th>
                        <th>날짜</th>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                    </table>
                </div>
                <div className={styles.pagenum}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
            </div>
            </div>
    </div>
    </>
    );
}
export default UserPoint;