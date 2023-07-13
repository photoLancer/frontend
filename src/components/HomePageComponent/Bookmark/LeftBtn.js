import React from 'react';
import styles from './leftBtn.module.css';

function LeftBtn(props) {
  return (
    <button
      className={`${styles.tag_btn} ${props.isClicked ? styles.clicked : ''}`}
      onClick={props.onClick}
    >
      #{props.tag}
    </button>
  );
}

export default LeftBtn;
