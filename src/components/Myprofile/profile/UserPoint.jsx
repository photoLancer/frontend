import { useState } from 'react';
import styles from './userpoint.module.css';
import Exchange from './point/Exchange';
import Charge from './point/Charge';
import TradeLog from './point/TradeLog';

function UserPoint() {
    const [pointContent,setPointContent]=useState(1);

    const exchangeHandler=()=>{
        setPointContent(1);
    };
    const chargeHandler=()=>{
        setPointContent(2);
    };
    const tradelogHandler=()=>{
        setPointContent(3);
    };

    return(
    <>
    <div className={styles.point}>
        <div className={styles.pointcheckwrap}>
            <div className={styles.pointcheck}>
                <div className={styles.pointhead}>Your Point</div>
                <div className={styles.myPoint}>$ 55,000</div>
            </div>
            <div className={styles.chargingBox}>
            <div className='flex flex-row'>
                  <button
                    className={styles.navbar_button}
                    onClick={exchangeHandler}
                  >
                    Exchange
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={chargeHandler}
                  >
                    Charge
                  </button>
                  <button
                    className={styles.navbar_button}
                    onClick={tradelogHandler}
                  >
                    Trade log
                  </button>
                </div>
                <div className='maincontents border border-solid border-red-500'>
                {pointContent === 1 ? <Exchange /> : ''}
                {pointContent === 2 ? <Charge /> : ''}
                {pointContent === 3 ? <TradeLog /> : ''}
              </div>
            </div>
            </div>
    </div>
    </>
    );
}
export default UserPoint;