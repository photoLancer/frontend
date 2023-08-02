import React from 'react';
import styles from './chatPage.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { io } from 'socket.io-client';
import 차은우 from './차은우.jpg';
import classNames from 'classnames';
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
/*import { ChatContainer, Message, MessageBox, MessageForm } from './styles/app.styles';*/

function ChatPage() {
  /*const socket = io('http://localhost:3000/chat');*/
  const nonClick = document.querySelectorAll('.non_click');

  function handleClick(event) {
    // div에서 모든 "click" 클래스 제거
    nonClick.forEach((e) => {
      e.classList.remove('click');
    });
    // 클릭한 div만 "click"클래스 추가
    event.target.classList.add('click');
  }

  nonClick.forEach((e) => {
    e.addEventListener('click', handleClick);
  });
  return (
    <>
      <div className={styles.viewport}>
        <div class={styles.contents}>
          <Header />
          <div className="flex flex-row">
            <div className="sidebar basis-1/4 flex flex-row justify-center border border-solid border-black">
              <Sidebar current_page={4} />
            </div>

            <div className="main basis-3/4 border border-solid border-black">
              <div className={styles.chat_button}>
                <button className={styles.general_chat}>팔로워</button>
                <div className={styles.num_chat}>50</div>
                <button className={styles.ask_chat}>요청</button>
                <div className={styles.num_chat}>100</div>
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
                <aside className={styles.chat_room}>
                  <div className={styles.chat_room_p}>
                    <p>Mason</p>
                  </div>
                  <article className={styles.chat_content}>
                    <p className={styles.chat_time}>2023. 07. 01. 오전 12:04</p>
                    <div className={styles.chat_interact}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function () {
                        return (
                          <>
                            <div className={styles.chat_partner}>
                              <div className={styles.chat_profile2}>
                                <img src={차은우}></img>
                              </div>
                              <div className={styles.bubble}>
                                <div className={styles.chat_word}>안녕하세요</div>
                              </div>
                              <span className={styles.chat_hm}>오후 00:00</span>
                            </div>
                            <div className={styles.chat_me}>
                              <div className={styles.bubble2}>
                                <div className={styles.chat_word2}>안녕하세요 반갑습니다:</div>
                              </div>
                              <span className={styles.chat_hm2}>오후 00:00</span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </article>
                  <div className={styles.input_submit}>
                    <input
                      className={styles.user_input}
                      type="text"
                      name="chatting"
                      placeholder="     메시지를 입력하세요"
                    ></input>
                    <input type="submit" value="전송" className={styles.chat_submit}></input>
                  </div>
                </aside>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
