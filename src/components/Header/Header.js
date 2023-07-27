import React, { useContext } from 'react';
import styles from './header.module.css';
import logo from '../../logo/logo_symbol.png';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../_actions/user_action';
import { logout } from '../../_actions/user_action';

function Header(props) {
  const userState = useSelector((state) => state.user); // 전체 상태 가져옴
  const dispatch = useDispatch();
  const onLogoutHandle = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const loginHandler = () => {
    dispatch(login(2));
  };

  return (
    <>
      <div className={styles.header}>
        <a href='/'>
          <img src={logo} alt='logo' className={styles.logo} />
        </a>
        <p>{userState.userId}</p>
        <button onClick={loginHandler}>login</button>

        <button className={styles.logout_btn} onClick={onLogoutHandle}>
          Log out
        </button>
      </div>
    </>
  );
}

export default Header;
