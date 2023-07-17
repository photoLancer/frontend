import React from "react";
import styles from './contents.module.css';

function Contents(){
    return(
        <>
      
        <div className={styles.headframe}>
          <img className={styles.smallimg}></img>
          <p className={styles.nickname}>?</p>
          <p className={styles.icon}>-</p>
        </div>
        <div className={styles.contentsframe}>
          <img className={styles.content}></img>
          <img className={styles.content}></img>
          <img className={styles.content}></img>
        </div>
       
        </>
    );
}
export default Contents;