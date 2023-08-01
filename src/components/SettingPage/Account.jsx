import { useState } from 'react';
import styles from './account.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Account=()=>{
    const [isChanging,setIsChanging]=useState(false);

    const changepwHandler=()=>{
        setIsChanging(true);
    };

    const confirmpwHandler=()=>{
        setIsChanging(false);
    };
    
    const [showPassword,setShowPassword]=useState(false);

   
    const toggleShowPassword=()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword);
    };

    let isConnected=false;
    function toggleConnection(){
        const toggleButton=document.getElementById("toggleButton");
       

        if(isConnected){
            isConnected=false;
            toggleButton.innerText="연결";
        }
        else{
            isConnected=true;
            toggleButton.innerText="연결해제";
        }
    }

    return(
    <>
    <div className={styles.bigbox}>
        <div className={styles.middlebox1}>
            <p className={styles.headtext}>소셜 로그인</p>
            <div className={styles.content1}>
                <div className={styles.smallbox1}>
                    <div className={styles.boxwrap}>
                    <img className={styles.snslogo}></img>
                    <p className={styles.snsname}>카카오</p>
                    </div>
                    <div className={styles.btnwrap}>
                    <button className={styles.connectbtn} id='toggleButton' onClick={toggleConnection}>연결</button>
                    
                    </div>
                </div>
                
                <div className={styles.smallbox1}>
                <div className={styles.boxwrap}>
                    <img className={styles.snslogo}></img>
                    <p className={styles.snsname}>Naver</p>
                </div>
                <div className={styles.btnwrap}>
                    <button className={styles.connectbtn}>연결해제</button>
                    </div>   
                </div>
            </div>
        </div>
        <div className={styles.middlebox2}> 
            <div className={styles.content2}>
                {isChanging?(
                    <>
                    <div className={styles.boxing0}>
           <div className={styles.boxing1}>
                    <p className={styles.pwtext}>새 비밀번호</p><br/>
                    <div className={styles.inputdiv}>
                    <input type={showPassword?'text':'password'} className={styles.inputbox} />
                    {showPassword?(<FaEyeSlash className={styles.eyeIcon} onClick={toggleShowPassword} />):(
                        <FaEye className={styles.eyeIcon} onClick={toggleShowPassword} />
                    )}
                    </div>
                </div>
                <div className={styles.boxing2}>
                    <p className={styles.pwtext}>새 비밀번호 확인</p><br/>
                    <div className={styles.inputdiv}>
                    <input type={showPassword?'text':'password'} className={styles.inputbox} />
                    {showPassword?(<FaEyeSlash className={styles.eyeIcon} onClick={toggleShowPassword} />):(
                        <FaEye className={styles.eyeIcon} onClick={toggleShowPassword} />
                    )}
                    </div>
                </div>
                </div>
                <div className={styles.changepw}><button className={styles.changepwbtn} onClick={confirmpwHandler}>변경하기</button></div>
                    </>
                ):(
                    <>
                    <div className={styles.smallbox2}>
                    <p className={styles.pwtext}>현재 이용 비밀번호</p>
                    <div className={styles.pwbox}>~~~</div>
                </div>
                <div className={styles.changepw}><button className={styles.changepwbtn} onClick={changepwHandler}>변경하기</button></div>
                    </>
                )}
        </div>
        </div>
    </div>
    </>
    );
}
export default Account;