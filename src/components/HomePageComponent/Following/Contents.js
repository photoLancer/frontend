import React from "react";
import styles from './contents.module.css';

function Contents(){
    return(
        <>
        <div className={styles.frame}>
        <div className={styles.headframe}>
          <img className={styles.smallimg}></img>
          <div className={styles.nickname}>??</div>
          <div className={styles.icon}>&gt</div>
        </div>
        <div className={styles.contentsframe}>
          <img className={styles.content}></img>
          <img className={styles.content}></img>
          <img className={styles.content}></img>
        </div>
        </div>
        </>
    );
}
export default Contents;