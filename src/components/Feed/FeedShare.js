import React, { useContext, useRef, useState } from 'react';
import styles from './feedshare.module.css';
import { FeedOptionDispatchContext } from './Feed';

const Follower = (props) => {
  const { id, name, Lv, onCheckChange } = props;
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
            {/* <img src="" alt="" /> */}
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

  // 유저 목록
  const [followers, setFollwers] = useState([
    { user_id: 1, name: 'Mayson', lv: 5, checked: false },
    { user_id: 2, name: 'lemon', lv: 7, checked: false },
  ]);

  const handleCheckChange = (userId, isChecked) => {
    setFollwers((prevFollowers) =>
      prevFollowers.map((follower) =>
        follower.user_id === userId
          ? { ...follower, checked: isChecked }
          : follower
      )
    );
  };
  //공유 버튼
  const share = () => {
    console.log('share user');
    followers.map((follower) => {
      if (follower.checked) {
        console.log(follower.user_id); //공유된 user_id
      }
    });
    shareDispatch({ type: 'SHARE_SCREEEN_CLICK' });
  };
  return (
    <>
      <div className={styles.screen} onClick={screenClickHandler}>
        <div className={styles.content} onClick={contentClickHandler}>
          <div
            className={`w-10/12 border border-solid border-black ${styles.a}`}
          >
            <div>
              <div className='flex flex-row justify-end'>
                <button onClick={closeShareScreen}>X</button>
              </div>

              <div className='mb-6'>
                <h2 className={styles.h2}>공유할 ID</h2>
                <div className={styles.search_bar} onClick={onFocus}>
                  <div className={`w-11/12 flex flex-row justify-between`}>
                    <input
                      type='text'
                      placeholder='ID 검색'
                      className={styles.search_bar_input}
                      ref={inputRef}
                      value={searchInput}
                      onChange={inputHandler}
                    />
                    <button onClick={searchHandler}>O</button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className={styles.h2}>팔로워</h2>
                <div className='follower_list'>
                  {followers &&
                    followers.map((follower, index) => (
                      <React.Fragment key={index}>
                        <Follower
                          user_id={follower.user_id}
                          name={follower.name}
                          Lv={follower.lv}
                          onCheckChange={(isChecked) =>
                            handleCheckChange(follower.user_id, isChecked)
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
        </div>
      </div>
    </>
  );
}

export default FeedShare;
