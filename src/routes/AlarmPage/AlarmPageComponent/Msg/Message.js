import React from 'react';
import styles from './msg.module.css';

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

export default Message;
