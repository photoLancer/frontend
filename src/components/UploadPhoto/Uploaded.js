import styles from './uploaded.module.css';

const Uploaded=()=>{
    return(
        <>
         <div className={styles.uploadwrap}>
          <p className={styles.head}>사진 올리기</p>
          <div className={styles.uploadbox}>
            <img className={styles.photo}></img>
            <p className={styles.ques}>사진을 정말 업로드 하시겠습니까?</p>
        </div>
        </div>
        </>
    );
}
export default Uploaded;