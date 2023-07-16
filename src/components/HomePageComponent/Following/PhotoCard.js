import React from "react";
import styles from './photocard.module.css';

function PhotoCard(){
    return(
        <>
         <div className={styles.contentsframe}>
          <img className={styles.content}></img>
          <img className={styles.content}></img>
          <img className={styles.content}></img>
        </div>
        </>
    );
}