import React, { useState, createContext, useReducer } from 'react';

import styles from './chatPage.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import 차은우 from './차은우.jpg';
import Follower from './Follower';
import Ask from './Ask';

export const PhotoContext = createContext();
export const PhotoDispatchContext = createContext();
const initialPhotoState = {
  photoClicked: false,
  photo_id: 0,
};

function ChatPage() {
  const [homeContent, setHomeContent] = useState(1);

  const follwerHandler = () => {
    setIsHtmlVisible(false);
    setHomeContent(1);
  };
  const [isHtmlVisible, setIsHtmlVisible] = useState(false);
  const askHandler = () => {
    setIsHtmlVisible(true);
    setHomeContent(2);
  };
  const htmlString =
    '<p className={styles.ask_alert}>메시지를 보낸 사람에 대한 자세한 정보를 보려면 대화를 여세요.<br/>상대방은 수락될 때까지 회원님의 메시지 확인 여부를 알 수 없습니다</p>';

  const nonClick = document.querySelectorAll('.non_click');

  function handleClick(event) {
    nonClick.forEach((e) => {
      e.classList.remove('click');
    });
    event.target.classList.add('click');
  }

  nonClick.forEach((e) => {
    e.addEventListener('click', handleClick);
  });

  return (
    <>
      <div className={styles.viewport}>
        <div className={styles.contents}>
          <Header />
          <div className="flex flex-row">
            <div className="sidebar basis-1/4 flex flex-row justify-center border border-solid border-black">
              <Sidebar current_page={4} />
            </div>
            <div className="main basis-3/4 border border-solid border-black">
              <div className={styles.chat_button}>
                <button className={styles.general_chat} onClick={follwerHandler}>
                  팔로워
                </button>
                <div className={styles.num_chat}>50</div>
                {/*<button className={styles.ask_chat} onClick={askHandler}>
                  요청
                </button>
                <div className={styles.num_chat}>100</div>
  {isHtmlVisible && <div dangerouslySetInnerHTML={{ __html: htmlString }} />}*/}
              </div>
              {/* 채팅방 부분 */}
              <main className={styles.main_chat}>
                <section>
                  <div className={styles.messages}>
                    <p>Messages</p>
                    <input className={styles.search_user} type="text" name="search_chat"></input>
                  </div>
                  <article className={styles.chat_list}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function () {
                      return (
                        <div className={`${styles.chat_1} ${styles.non_click}`}>
                          <div className={styles.chat_2}>
                            <div className={styles.chat_profile}>
                              <img src={차은우}></img>
                            </div>
                            <div className={styles.fixing}>
                              <p className={styles.level}>
                                LV.3<span className={styles.name}> Manson</span>
                              </p>
                              <p className={styles.msg}>어디야?</p>
                            </div>
                            <div className={styles.fixing}>
                              <p className={styles.unread}>
                                안 읽은 메시지 <span>3</span>개
                              </p>
                              <p className={styles.time}>오전 12:04</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </article>
                </section>
                <aside className={styles.chat_room}>{homeContent === 1 ? <Follower /> : ''}</aside>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
