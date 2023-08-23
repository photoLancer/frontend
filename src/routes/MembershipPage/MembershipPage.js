import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../LoginPage/Login.JPG';
import styles from './MembershipPage.module.css';

function MembershipPage() {
  const navigate = useNavigate();

  const kakaoOAuthHandler = () => {
    window.location.href = 'http://photolancer.shop/oauth2/authorization/kakao';
  };

  const naverOAuthHandler = () => {
    window.location.href = 'http://photolancer.shop/oauth2/authorization/naver';
  };

  const googleOAuthHandler = () => {
    window.location.href = 'http://photolancer.shop/oauth2/authorization/google';
  };

  const loginHandler = () => {
    navigate('/CreateAccount');
  };

  return (
    <div className={styles.MembershipPage}>
      <img className={styles.L_img} src={Login} alt='login_camera' />
      <div className={styles.create_account}>
        <p>Create Account</p>
        <div onClick={kakaoOAuthHandler}>카카오로 회원가입</div>
        <div onClick={naverOAuthHandler}>네이버로 회원가입</div>
        <div onClick={googleOAuthHandler}>구글로 회원가입</div>
        <div onClick={loginHandler}>
          <Link to='./CreateAccount'>일반 아이디로 회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default MembershipPage;
