import React from 'react';
import styles from './chatPage.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { io } from 'socket.io-client';
import 차은우 from './차은우.jpg';
import classNames from 'classnames';
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';

function Follower(navigation) {
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
      <div className={styles.chat_room_p}>
        <p>Mason</p>
      </div>
      <article className={styles.chat_content}>
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
      <input className={styles.user_input} type="text" name="chatting" placeholder="     메시지를 입력하세요"></input>
      <input type="submit" value="전송" className={styles.chat_submit}></input>
    </>
  );
}

export default Follower;
/*<div className={styles.input_submit}>
          <input
            className={styles.user_input}
            type="text"
            name="chatting"
            placeholder="     메시지를 입력하세요"
          ></input>
          
        </div>*/
