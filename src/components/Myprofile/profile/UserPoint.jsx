import { useEffect, useRef, useState } from 'react';
import styles from './userpoint.module.css';
import Exchange from './point/Exchange';
import Charge from './point/Charge';
import TradeLog from './point/TradeLog';
import { useDispatch, useSelector } from 'react-redux';

function UserPoint() {
  const userState = useSelector((state) => state.user);
  const [pointContent, setPointContent] = useState(1);

  const exchangeBtn = useRef();
  const chargeBtn = useRef();
  const tradelogBtn = useRef();

  const [hrShowExchange, setHrShowExchange] = useState(false);
  const [hrShowCharge, setHrShowCharge] = useState(false);
  const [hrShowTradelog, setHrShowTradelog] = useState(false);

  useEffect(() => {
    if (pointContent === 1) {
      exchangeBtn.current.style = 'color:#111111';
    } else {
      exchangeBtn.current.style = '';
    }
    if (pointContent === 2) {
      chargeBtn.current.style = 'color:#111111';
    } else {
      chargeBtn.current.style = '';
    }
    if (pointContent === 3) {
      tradelogBtn.current.style = 'color:#111111';
    } else {
      tradelogBtn.current.style = '';
    }
  }, [pointContent]);

  const exchangeHandler = () => {
    setPointContent(1);
    setHrShowExchange(true);
    setHrShowCharge(false);
    setHrShowTradelog(false);
  };
  const chargeHandler = () => {
    setPointContent(2);
    setHrShowCharge(true);
    setHrShowExchange(false);
    setHrShowTradelog(false);
  };
  const tradelogHandler = () => {
    setPointContent(3);
    setHrShowTradelog(true);
    setHrShowCharge(false);
    setHrShowExchange(false);
  };

  return (
    <>
      <div className={styles.point}>
        <div className={styles.pointcheckwrap}>
          <div className={styles.pointcheck}>
            <div className={styles.pointhead}>Your Point</div>
            <div className={styles.myPoint}>$ {userState.userPoint}</div>
          </div>
          <div className={styles.chargingBox}>
            <div className='flex flex-row'>
              <div className={styles.textline}>
                <button
                  className={styles.navbar_button}
                  ref={exchangeBtn}
                  onClick={exchangeHandler}
                >
                  Exchange
                </button>
                {pointContent === 1 || hrShowExchange ? (
                  <hr style={{ width: '88%', border: '1.5px solid #111111' }} />
                ) : (
                  ''
                )}
              </div>
              <div className={styles.textline}>
                <button
                  className={styles.navbar_button}
                  ref={chargeBtn}
                  onClick={chargeHandler}
                >
                  Charge
                </button>
                {pointContent === 2 || hrShowCharge ? (
                  <hr style={{ width: '88%', border: '1.5px solid #111111' }} />
                ) : (
                  ''
                )}
              </div>
              <div className={styles.textline}>
                <button
                  className={styles.navbar_button}
                  ref={tradelogBtn}
                  onClick={tradelogHandler}
                >
                  Trade log
                </button>
                {pointContent === 3 || hrShowTradelog ? (
                  <hr style={{ width: '88%', border: '1.5px solid #111111' }} />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className='maincontents'>
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
