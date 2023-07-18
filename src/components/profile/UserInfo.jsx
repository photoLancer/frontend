import styles from './userinfo.module.css';

const UserInfo=()=>{
    return(
        <>
        <div className={styles.user}>
            <button className={styles.editprofile} onClick={''}>Edit Profile</button>
            <div className={styles.info}>
            <div className={styles.userinfo1}>
                <div className={styles.userinfo1wrap}>
                <div className={styles.myTitle}>Beginner</div>  
                <div className={styles.myImg}><img /></div>
                <div className={styles.numbering}>
                    <div className={styles.box} value="post">
                        <div className={styles.num}>?</div>
                        <div className={styles.value}>Posts</div>
                    </div>
                    <div className={styles.box} value="follower">
                        <div className={styles.num}>?</div>
                        <div className={styles.value}>Followers</div>
                    </div>
                    <div className={styles.box} value="following">
                        <div className={styles.num}>?</div>
                        <div className={styles.value}>Following</div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.userinfo2}>
                <div className={styles.userinfo2wrap}>
                <div className={styles.myName}>Nickname</div>
                <div className={styles.infotext}></div>
                <div className={styles.tagging}>
                    <span className={styles.tag}>##</span>
                    <span className={styles.tag}>##</span>
                </div>
            </div>
            </div>
            </div>
        </div>

        </>
    );

}
export default UserInfo;