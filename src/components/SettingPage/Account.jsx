import { useState,useEffect } from 'react';
import styles from './account.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TextField, Button, FormControl, FormHelperText } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Account=()=>{
    const userState = useSelector((state) => state.user);
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
    };

    //이전 비밀번호와 같게 입력했을 때 errortext1 
    //새비밀번호 확인이 잘못되었을 때 errortext2
    //다른 error 사항 없을 때는 text 띄우지 않음

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChangePassword = () => {
        setPasswordError('');
      
        if (newPassword !== confirmPassword) {
          setPasswordError('errortext2');
          return;
        }
      
        if (currentPassword === newPassword) {
          setPasswordError('errortext1');
          return;
        }
    };

    useEffect(() => {
        const fetchMySocialLogin_google = async () => {
          try {
            const response = await axios.get('http://photolancer.shop/oauth2/authorization/google', {
              headers: {
                Authorization: userState.jwt,
              },
            });
            console.log('Response data:', response.data);
            
    
          } catch (error) {
            console.error('Error fetching my social login:', error);
          }
        };
    
        fetchMySocialLogin_google();
      }, []);

      useEffect(() => {
        const fetchMySocialLogin_kakao = async () => {
          try {
            const response = await axios.get('http://photolancer.shop/oauth2/authorization/kakao', {
              headers: {
                Authorization: userState.jwt,
              },
            });
            console.log('Response data:', response.data);
            
    
          } catch (error) {
            console.error('Error fetching my social login:', error);
          }
        };
    
        fetchMySocialLogin_kakao();
      }, []);

      useEffect(() => {
        const fetchMySocialLogin_naver = async () => {
          try {
            const response = await axios.get('http://photolaner.shop/oauth2/authorization/naver', {
              headers: {
                Authorization: userState.jwt,
              },
            });
            console.log('Response data:', response.data);
            
    
          } catch (error) {
            console.error('Error fetching my social login:', error);
          }
        };
    
        fetchMySocialLogin_naver();
      }, []);

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
                    <input type={showPassword?'text':'password'} className={styles.inputbox}  />
                    {showPassword?(<FaEyeSlash className={styles.eyeIcon} onClick={toggleShowPassword} />):(
                        <FaEye className={styles.eyeIcon} onClick={toggleShowPassword} />
                    )}
                    </div>
                    {passwordError === 'errortext1' && (
                     <p className={styles.errortext}>이전 비밀번호와 같습니다. 더 안전한 비밀번호를 입력하세요.</p>)}
                </div>
                <div className={styles.boxing2}>
                    <p className={styles.pwtext}>새 비밀번호 확인</p><br/>
                    <div className={styles.inputdiv}>
                    <input type={showPassword?'text':'password'} className={styles.inputbox} />
                    {showPassword?(<FaEyeSlash className={styles.eyeIcon} onClick={toggleShowPassword} />):(
                        <FaEye className={styles.eyeIcon} onClick={toggleShowPassword} />
                    )}
                    </div>
                    {passwordError === 'errortext2' && (
                        <p className={styles.errortext}>비밀번호와 비밀번호 확인이 일치하지 않습니다.</p>
                    )}
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