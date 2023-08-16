import React, { useContext, useRef, useState, useEffect } from 'react';
import styles from './feedshare.module.css';
import { FeedOptionDispatchContext } from './Feed';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { PhotoContext } from '../../routes/HomePage/HomePage';
import search from '../../img/search.png';

const Follower = (props) => {
  const { user_id, name, Lv, onCheckChange, profileUrl } = props;
  const checkRef = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const boxClick = () => {
    onCheckChange(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className={styles.follower_box} onClick={boxClick}>
        <div className={`w-11/12 flex flex-row justify-between items-center `}>
          <div className={styles.follower_profile_img}>
            <img src={profileUrl} alt='' />
          </div>
          <p className={styles.follower_name}>
            Lv{Lv}. {name}
          </p>
          <div className=''>
            <input
              type='checkbox'
              className='h-5 w-5 accent-orange-400'
              onClick={boxClick}
              ref={checkRef}
              checked={isChecked}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function FeedShare() {
  const photo = useContext(PhotoContext);
  // console.log(photo.photo_id);
  const userState = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  //search
  const inputRef = useRef();
  const [searchInput, setSearchInput] = useState('');
  const onFocus = () => {
    inputRef.current.focus();
  };
  const inputHandler = (e) => {
    setSearchInput(e.currentTarget.value);
  };
  const searchHandler = (e) => {
    console.log(searchInput);
    setSearchInput('');
  };

  //화면 제어
  const shareDispatch = useContext(FeedOptionDispatchContext);
  const screenClickHandler = (e) => {
    e.stopPropagation();
  };
  const contentClickHandler = (e) => {
    e.stopPropagation();
  };
  const closeShareScreen = () => {
    shareDispatch({ type: 'SHARE_SCREEEN_CLICK' });
  };
  const [followera, setFollowera] = useState(null);
  useEffect(() => {
    const fetchFollower = async () => {
      try {
        const response = await axios.get(
          `http://photolancer.shop/follower/users`,
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setFollowera(response.data);
        const updatedFollowers = followera.map((follower) => ({
          ...follower,
          checked: false, // 기본값으로 false를 설정합니다.
        }));
        setFollowera(updatedFollowers);
      } catch (error) {
        console.error('Error fetching follower info:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFollower();
  }, []);
  // console.log('followera:', followera);

  const handleCheckChange = (userId, isChecked) => {
    setFollowera((prevFollowers) =>
      prevFollowers.map((follower) =>
        follower.id === userId ? { ...follower, checked: isChecked } : follower
      )
    );
  };
  //공유 버튼
  const share = async () => {
    let shared_userId_list = [];
    followera.map((follower) => {
      if (follower.checked) {
        // console.log(follower.id); //공유된 user_id
        shared_userId_list.push(follower.id);
      }
    });
    console.log(shared_userId_list);

    const shareFeedWithFollowers = await axios.post(
      `http://photolancer.shop/post/${photo.photo_id}/share`,
      { userId: shared_userId_list },
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    console.log(shareFeedWithFollowers);

    shareDispatch({ type: 'SHARE_SCREEEN_CLICK' });
  };
  return (
    <>
      <div className={styles.screen} onClick={screenClickHandler}>
        <div className={styles.content} onClick={contentClickHandler}>
          {loading ? (
            <p>loading...</p>
          ) : (
            <div className={`w-10/12 ${styles.a}`}>
              <div>
                <div className='flex flex-row justify-end'>
                  <button onClick={closeShareScreen}>X</button>
                </div>

                <div className='mb-6'>
                  <h2 className={styles.h2}>공유할 ID</h2>
                  <div className={styles.search_bar} onClick={onFocus}>
                    <div
                      className={`w-11/12 flex flex-row justify-between items-center`}
                    >
                      <input
                        type='text'
                        placeholder='ID 검색'
                        className={styles.search_bar_input}
                        ref={inputRef}
                        value={searchInput}
                        onChange={inputHandler}
                      />
                      <button onClick={searchHandler}>
                        <img
                          src={search}
                          alt=''
                          className={styles.search_img}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className={styles.h2}>팔로워</h2>
                  <div className='follower_list'>
                    {followera &&
                      followera.map((follower, index) => (
                        <React.Fragment key={index}>
                          <Follower
                            user_id={follower.id}
                            name={follower.nickname}
                            Lv={follower.level}
                            profileUrl={follower.profileUrl}
                            onCheckChange={(isChecked) =>
                              handleCheckChange(follower.id, isChecked)
                            }
                          />
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
              <button className={styles.share_btn} onClick={share}>
                공유하기
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FeedShare;
