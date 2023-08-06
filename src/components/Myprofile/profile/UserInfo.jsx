
import styles from './userinfo.module.css';
import { useDispatch, useSelector } from 'react-redux';

const UserInfo=()=>{
    const userState=useSelector((state)=>state.user);


    return(
        <>
        <div className={styles.user}>
            <div className={styles.info}>
            <div className={styles.userinfo1}>
                <div className={styles.userinfo1wrap}>
                <div className={styles.myTitle}>{userState.userTitle}</div>  
                <img 
                src={userState.userProfileImg}
                alt='#'
                className={styles.myImg}
                />
                <div className={styles.numbering}>
                    <div className={styles.box} value="post">
                        <div className={styles.num}>10.1K</div>
                        <div className={styles.value}>Followers</div>
                        
                    </div>
                    <div className={styles.box} value="follower">
                        <div className={styles.num}>51</div>
                        <div className={styles.value}>Posts</div>
                    </div>
                    <div className={styles.box} value="following">
                        <div className={styles.num}>553</div>
                        <div className={styles.value}>Following</div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.userinfo2}>
                <div className={styles.userinfo2wrap}>
                    <div className={styles.smallboxing}>
                    <div className={styles.myLev}>Lv.{userState.userLv}</div>
                <div className={styles.myName}>{userState.userName}</div>
                </div>
                <div className={styles.infotext}>Hello~ I love the blue sky.</div>
                <div className={styles.footer}>
                <div className={styles.taghead}>관심 키워드</div>
                <div className={styles.tagging}>
                    <span className={styles.tag}>##</span>
                    <span className={styles.tag}>##</span>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>

        </>
    );

}
export default UserInfo;