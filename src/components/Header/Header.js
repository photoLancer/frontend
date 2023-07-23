import React, { useContext } from 'react';
import styles from './header.module.css';
import logo from '../../logo/logo_symbol.png';
import { UserContext } from '../../contexts/UserContext';

function Header(props) {
  const usercontext = useContext(UserContext);
  const { userState } = usercontext;
  const { userStateDispatch } = usercontext;

  const onLogoutHandle = (e) => {
    e.preventDefault();

    userStateDispatch({ type: 'LOGOUT' });
  };
  console.log(userState.userId);

  return (
    <>
      <div className={styles.header}>
        <a href='/'>
          <img src={logo} alt='logo' className={styles.logo} />
        </a>

        <button className={styles.logout_btn} onClick={onLogoutHandle}>
          Log out
        </button>
      </div>
    </>
  );
}

export default Header;
