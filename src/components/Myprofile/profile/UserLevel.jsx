import { useState } from 'react';
import styles from './userlevel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import EditTitle from './edit/EditTitle';

const UserLevel =()=>{
    const userState=useSelector((state)=>state.user);
    const [isEditingTitle,setIsEditingTitle]=useState(false);

    const handleEditTitle=()=>{
        setIsEditingTitle(true);
    };

    return(
        <>
        <div className={styles.level}>
            <div className={styles.levelcheck}>
                <div className={styles.levelcheckwrap}>
                <div className={styles.levelhead}>Your level</div>
                <div className={styles.levelup}>
                    <div className={styles.myLevel}>Lv.{userState.userLv}</div>
                    <div className={styles.user_info_lv}>
              <div
                className={styles.user_info_black_bar}
                style={{ width: `${userState.userLvExp}%` }}
              ></div>
              <div className={styles.user_info_lv_number}>
                {userState.userLvExp}%
              </div>
            </div>
                </div>
                <div className={styles.levelment}>다음 레벨까지 ??점 남았습니다.</div>
                </div>
            </div>
            <div className={styles.titlecheck}>
                <div className={styles.titlecheckwrap}>
                <div className={styles.titlehead}>Your title</div>
                <div className={styles.title}>
                <div className={styles.myTitle2}>{userState.userTitle}</div> 
                <button className={styles.editTitle} onClick={handleEditTitle}>edit title</button>
                </div>
                </div>
                {isEditingTitle?(
                    <EditTitle />
                ):('')}
            </div>
            <div className={styles.achievecheck}>
                <div className={styles.achievecheckwrap}>
                <div className={styles.achievehead}>User's Achievement</div>
                <div className={styles.achieve}>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                    <div className={styles.achievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                    <div className={styles.nonachievecontents}>
                        <div className={styles.achievement} value="checkicon">V</div>
                        <div className={styles.achievement} value="tasks">upload 1 photo</div>
                        <div className={styles.achievement} value="rewards">+5Point</div>
                    </div>
                </div>
                <div className={styles.pagenum}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default UserLevel;