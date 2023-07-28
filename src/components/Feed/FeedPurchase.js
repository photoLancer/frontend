import React, { useContext } from 'react';
import styles from './feedpurchase.module.css';
import { FeedOptionDispatchContext } from './Feed';

function FeedPurchase(props) {
  const purchasePoint = 130;
  const holdingPoint = 50224;
  //화면 제어
  const screenClickHandler = (e) => {
    e.stopPropagation();
  };
  const contentClickHandler = (e) => {
    e.stopPropagation();
  };
  const shareDispatch = useContext(FeedOptionDispatchContext);
  const closeShareScreen = () => {
    shareDispatch({ type: 'PURCHASE_SCREEN_CLICK' });
  };

  //구매
  const purchase = () => {
    console.log('purchase');
    shareDispatch({ type: 'PURCHASE_SCREEN_CLICK' });
  };
  return (
    <div className={styles.screen} onClick={screenClickHandler}>
      <div className={styles.content} onClick={contentClickHandler}>
        <div className={`w-11/12 border border-solid border-black ${styles.a}`}>
          <div>
            <div className='flex flex-row justify-end'>
              <button onClick={closeShareScreen}>X</button>
            </div>
            <h2 className={styles.title}>사진 구매</h2>
            <div className='flex flex-row justify-between mb-2'>
              <p className={styles.pp}>사진 구매 포인트</p>
              <p className={styles.point}>{purchasePoint} point</p>
            </div>
            <hr className='border border-solid border-gray-200 mb-4' />
            <div className='flex flex-row justify-between mb-2'>
              <p className={styles.pp}>보유 포인트</p>
              <p className={styles.point}>{holdingPoint} point</p>
            </div>
            <hr className='border border-solid border-gray-200 mb-4' />
          </div>
          <div>
            <div className='flex flex-row justify-between mb-2'>
              <p className={styles.pp}>구매 후 포인트</p>
              <p className={styles.point}>
                {holdingPoint - purchasePoint} point
              </p>
            </div>
            <hr className='border border-solid border-gray-200 mb-4' />
            <button className={styles.purchase_btn} onClick={purchase}>
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPurchase;
