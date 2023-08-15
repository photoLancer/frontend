import React, { useState } from 'react';
import Login from '../LoginPage/Login.JPG';
import styles from './MembershipPage.module.css';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../_actions/user_action';
function CreateAccountPage() {
  //유효성검사
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const re_pwd = useRef();
  re_pwd.current = watch('re_pwd');
  console.log(watch('email'));
  const onSubmit = (data) => {
    console.log('data', data);
  };
  //서버연결
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [again_pwValue, setAgain_pwValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [purposeValue, setPurpValue] = useState('');
  //const [replace] = useHistory;
  const handleIdChange = (event) => {
    setIdValue(event.target.value);
  };
  const handlePwChange = (e) => {
    setPwValue(e.target.value);
  };
  const handleAgain_pwChange = (e) => {
    setAgain_pwValue(e.target.value);
  };
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePurpChange = (e) => {
    setPurpValue(e.target.value);
  };

  const onSigninHandler = async () => {
    const body = {
      user_id: idValue,
      password: pwValue,
      again_password: again_pwValue,
      name: nameValue,
      email: emailValue,
      purpose: purposeValue,
    };
    try {
      const response = await axios.post('http://photolancer.shop/api/v1/users/join', body);
      if (response.data.errorMessage === null) {
        //회원가입이 성공적으로 된 경우
        dispatch(login(response.data.jwt));
        navigate('/home');
        return;
      }
      console.log('회원가입성공', response.data.jwt);
    } catch (error) {
      console.log('Error:', error.message);
    }
    //localStorage.setItem('token', response.data.jwt);
    //replace('/');
  };

  return (
    <div className={styles.MembershipPage}>
      <img className={styles.L_img} src={Login} alt="login_camera" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.create_account2}>
          <p>Create Account</p>
          <div className={styles.create_input}>
            <label>아이디</label>
            <div>
              <input
                className={styles.input_user}
                label="id"
                name="id"
                margin="normal"
                autoFocus
                placeholder="아이디를 입력하세요"
                {...register('id', {
                  required: true,
                  pattern: /^[A-z]{8,20}$/,
                })}
                value={idValue}
                onChange={handleIdChange}
              ></input>
              {errors.id && (
                <span className={styles.account_error1}>
                  <span className={styles.account_error2}>아이디</span>를 입력해주세요.
                </span>
              )}
            </div>
          </div>
          <div className={styles.create_input}>
            <label>이메일</label>
            <div>
              <input
                className={styles.input_user}
                label="email"
                name="email"
                margin="normal"
                autoFocus
                placeholder="이메일을 입력하세요"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                value={emailValue}
                onChange={handleEmailChange}
              ></input>
              {errors.email && (
                <span className={styles.account_error1}>
                  규칙에 맞는 <span className={styles.account_error2}>이메일</span>을 입력해주세요.
                </span>
              )}
            </div>
          </div>
          <div className={styles.create_input}>
            <label>비밀번호</label>
            <div>
              <input
                className={styles.input_user}
                label="pwd"
                name="pwd"
                margin="normal"
                autoFocus
                placeholder="비밀번호를 입력하세요"
                {...register('pwd', {
                  required: true,
                  pattern: /^[A-z]{8,15}$/,
                })}
                value={pwValue}
                onChange={handlePwChange}
              ></input>
              {errors.pwd && (
                <span className={styles.account_error1}>
                  <span className={styles.account_error2}>비밀번호</span>는 8~15자의 영문만을 사용해주세요.
                </span>
              )}
            </div>
          </div>
          <div className={styles.create_input}>
            <label>비밀번호 확인</label>
            <div>
              <input
                className={styles.input_user}
                label="re_pwd"
                name="re_pwd"
                margin="normal"
                autoFocus
                placeholder="비밀번호를 입력하세요"
                {...register('re_pwd', { required: true, validate: (value) => value === re_pwd.current })}
                value={again_pwValue}
                onChange={handleAgain_pwChange}
              ></input>
              {errors.re_pwd && (
                <span className={styles.account_error1}>
                  <span className={styles.account_error2}>비밀번호</span>와
                  <span className={styles.account_error2}> 비밀번호 확인</span>이 일치하지 않습니다.
                </span>
              )}
            </div>
          </div>
          <div className={styles.create_input}>
            <label>이름</label>
            <div>
              <input
                className={styles.input_user}
                label="name"
                name="name"
                margin="normal"
                autoFocus
                placeholder="이름을 입력하세요"
                {...register('name', { required: true })}
                value={nameValue}
                onChange={handleNameChange}
              ></input>
              {errors.name && errors.name.type === 'required' && (
                <span className={styles.account_error1}>
                  규칙에 맞는 <span className={styles.account_error2}>이름</span>을 사용해주세요.
                </span>
              )}
            </div>
          </div>
          <div className={styles.service_agree}>
            <div className={styles.agree1}>서비스 약관</div>
            <div className={styles.agree2}>
              <label>
                서비스 약관을 읽고 동의합니다
                <input type="checkbox" name="purpose" value={purposeValue} onChange={handlePurpChange}></input>
              </label>
            </div>
          </div>
          <button className={styles.signIn} onClick={onSigninHandler}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountPage;
