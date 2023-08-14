import React, { useState } from 'react';
import styles from './total.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Message(props) {
  const { msg, plus } = props;
  return (
    <>
      <div className={`py-4 ${styles.msg}`}>
        <p className={styles.msg_p}>{msg}</p>
        {plus ? <p className={styles.plus_p}>+{plus}Point</p> : ''}
      </div>
    </>
  );
}

function Total() {
  const userState = useSelector((state) => state.user);
  const [messages, setMessages] = useState([
    {
      message: 'Lv. 4 Namna님이 Tokemoo님을 팔로우하였습니다.',
      plus: null,
    },
    {
      message: 'Lv. 4 Namna님이 Tokemoo님의 게시글을 공유했습니다.',
      plus: null,
    },
    {
      message: 'Lv. 4 Namna님이 Tokemoo님의 게시글을 구매했습니다.',
      plus: 235,
    },
  ]);
  return (
    <>
      <div className={styles.alarm_contents}>
        <p className={`mb-2 ${styles.day}`}>23.08.13</p>
        {messages.map((m) => (
          <>
            <Message msg={m.message} plus={m.plus} />
          </>
        ))}
      </div>
    </>
  );
}

export default Total;
