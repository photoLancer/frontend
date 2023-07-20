import React from 'react';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <img src="./LogIn_background.JPG"></img>
      <div className={styles.Login_contents}>
        <input name="id"></input>
        <input name="pwd"></input>
        <input type="submit" value="Sign in" name="sign in"></input>
      </div>
    </div>
  );
}

export default LoginPage;
