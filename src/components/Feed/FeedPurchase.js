import React, { useContext, useEffect, useState } from 'react';
import styles from './feedpurchase.module.css';
import { FeedOptionDispatchContext } from './Feed';
import { PhotoContext } from '../../routes/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { photoPurchase } from '../../_actions/user_action';
import axios from 'axios';

function FeedPurchase(props) {
  const photo = useContext(PhotoContext);
  const userState = useSelector((state) => state.user); //유저 상태 들고옴
  const dispatch = useDispatch();

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

  const [feedInfo, setFeedInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchasePoint, setPurchasePoint] = useState(0);

  useEffect(() => {
    //사진 정보 들고오기 -> 가격 위해서
    const fetchFeedInfo = async () => {
      try {
        const response = await axios.get(
          `http://photolancer.shop/post/${photo.photo_id}`,
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setFeedInfo(response.data);
      } catch (error) {
        console.error('Error fetching feed info:', error);
      } finally {
        setLoading(false); // 로딩 상태를 false로 업데이트
      }
    };
    fetchFeedInfo();
  }, []);
  console.log(feedInfo);

  useEffect(() => {
    if (feedInfo) {
      setPurchasePoint(feedInfo.point);
    }
  }, [feedInfo]);

  //구매
  const holdingPoint = userState.userPoint;
  const afterPrice = holdingPoint - purchasePoint;

  const purchase = async () => {
    if (!feedInfo.isSale) {
      //판매하는 사진이 아닐경우
      alert('판매하는 사진이 아닙니다!');
      return;
    }

    if (feedInfo.isUserPhoto) {
      //이미 구매한 사진(isUserPhoto ===true) ->  구매 방지
      alert('이미 구매한 사진입니다.');
      return;
    }
    if (afterPrice < 0) {
      //포인트가 부족한 상황
      alert('포인트가 부족합니다!');
      return;
    }

    //서버에서 구매
    const purchasePhoto = await axios.post(
      `http://photolancer.shop/${photo.photo_id}/purchase`,
      {},
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    // console.log(purchasePhoto);

    //리덕스를 통한 상태변경
    const afterHoldingPoint = userState.userPoint - purchasePoint;
    dispatch(photoPurchase(afterHoldingPoint));
    alert('구매 성공!');
    shareDispatch({ type: 'PURCHASE_SCREEN_CLICK' });
  };

  return (
    <div className={styles.screen} onClick={screenClickHandler}>
      <div className={styles.content} onClick={contentClickHandler}>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div
            className={`w-11/12 border border-solid border-black ${styles.a}`}
          >
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
                <p className={styles.point}>{afterPrice} point</p>
              </div>
              <hr className='border border-solid border-gray-200 mb-4' />
              <button className={styles.purchase_btn} onClick={purchase}>
                구매하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedPurchase;
