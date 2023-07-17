import styles from './profileframe.module.css';

const ProfileFrame=()=>{
    return(
        <>
    <div className={styles.headchoice}>
        <nav>
        <a href=""><div className={styles.profile}>Profile</div></a>
        <a href=""><div className={styles.album}>Album</div></a>
        </nav>
    </div>
    
        </>
    );
}
export default ProfileFrame;