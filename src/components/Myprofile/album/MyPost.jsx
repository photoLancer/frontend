
import styles from './mypost.module.css';

const MyPost=()=>{
    return(
        <>
        <div className={styles.boxing}>
        <div className={styles.editphotobox}><button className={styles.editphotobtn}>Edit Photo</button></div>
        <div className={styles.photobox}>
        <img className={styles.myimage}></img>
        <img className={styles.myimage}></img>
        <img className={styles.myimage}></img>
        <img className={styles.myimage}></img>
        <img className={styles.myimage}></img>
        </div>
        </div>
        </>
    );
}
export default MyPost;