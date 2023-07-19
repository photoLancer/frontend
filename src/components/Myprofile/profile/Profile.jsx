import UserInfo from "./UserInfo";
import UserLevel from "./UserLevel";
import UserPoint from "./UserPoint";
import styles from './profile.module.css';

const Profile=()=>{
    return(
        <>
        <div className='main basis-3/4 border border-solid border-black'>
              <UserInfo />
              <div className={styles.smallboxing}>
                <UserLevel />
                <UserPoint />
              </div>
            </div>
        </>
    );
}
export default Profile;