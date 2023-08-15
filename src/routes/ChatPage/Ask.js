import React, { useState } from 'react';
import styles from './chatPage.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { io } from 'socket.io-client';
import 차은우 from './차은우.jpg';
import classNames from 'classnames';

function Ask() {
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
      <p>Mason</p>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function () {
        return (
          <>
            <div className={styles.chat_profile2}>
              <img src={차은우}></img>
            </div>
            <div className={styles.bubble}>
              <div className={styles.chat_word}>안녕하세요</div>
            </div>
            <span className={styles.chat_hm}>오후 00:00</span>
            <div className={styles.chat_me}>
              <div className={styles.bubble2}>
                <div className={styles.chat_word2}>안녕하세요 반갑습니다:</div>
              </div>
              <span className={styles.chat_hm2}>오후 00:00</span>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Ask;
/*<article className={styles.chat_content2}>
        <div className={styles.footer_box}>
          <div className={styles.footer_box2}>
            <div className={styles.footer1}>Mason님이 메시지를 보내고 싶어 합니다.</div>
            <div className={styles.footer2}>
              지금부터 Mason님이 회원님에게 메시지를 보낼 수 있도록 허용하시겠어요?
              <br />
              수락을 선택하지 않는 이상 상대방은 회원님이 요청을 확인했다는 사실을 알 수 없습니다
            </div>
            <div className={styles.footer3}>
              <button className={styles.footer_btn1} name="차단">
                차단
              </button>
              <button className={styles.footer_btn1} name="삭제">
                삭제
              </button>
              <button className={`${styles.footer_btn2} ${styles.footer_btn1}`} name="수락">
                수락
              </button>
            </div>
          </div>
        </div>
      </article>*/
