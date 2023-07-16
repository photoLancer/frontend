import React from 'react';
import styles from './headinfo.module.css';

function HeadInfo(){ 
    return(
    <>
    <div className={styles.headframe}>
          <img className={styles.smallimg}></img>
          <div className={styles.nickname}>??</div>
          <div className={styles.icon}>&gt</div>
        </div>
    </>
);
}