import styles from './profileframe.module.css';

const ProfileFrame=()=>{
    return(
        <>
    <nav className={styles.headchoice}>
        <a href=""><div className={styles.profile}>Profile</div></a>
        <a href=""><div className={styles.album}>Album</div></a>
    </nav>
    <div className={styles.mainbox}></div>
        </>
    );
}
export default ProfileFrame;