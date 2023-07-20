import styles from './userlevel.module.css';

const UserLevel =()=>{
    return(
        <>
        <div className={styles.level}>
            <div className={styles.levelcheck}>
                <div className={styles.levelcheckwrap}>
                <div className={styles.levelhead}>Your level</div>
                <div className={styles.levelup}>
                    <div className={styles.myLevel}>Lv.5</div>
                    <div className={styles.levelpercent}>90%</div>
                </div>
                <div className={styles.levelment}>다음 레벨까지~</div>
                </div>
            </div>
            <div className={styles.titlecheck}>
                <div className={styles.titlecheckwrap}>
                <div className={styles.titlehead}>Your title</div>
                <div className={styles.title}>
                <div className={styles.myTitle2}>Beginner</div> 
                <button className={styles.editTitle}>edit title</button>
                </div>
                </div>
            </div>
            <div className={styles.achievecheck}>
                <div className={styles.achievecheckwrap}>
                <div className={styles.achievehead}>User's Achievement</div>
                <div className={styles.achieve}>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo~</div>
                        <div className={styles.achievement} value="rewards">+5%~</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default UserLevel;