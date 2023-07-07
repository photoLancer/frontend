import React from 'react';
import styles from './header.module.css';
import logo from '../logo/logo_symbol.png';

function Header(props) {
  const onLogoutHandle = (e) => {
    e.preventDefault();
    console.log('logout');
  };

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
