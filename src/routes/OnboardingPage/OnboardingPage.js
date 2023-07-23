import React from 'react';
import styles from './Onboarding.module.css';
import logo1 from '../../logo/logo_symbol.png';
import { Link, useNavigate } from 'react-router-dom';
function OnboardingPage() {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate('/login');
  };
  return (
    <div className={styles.Onboarding}>
      <div className={styles.ob_1}>
        <div>
          <img src={logo1} className={styles.symbol} alt='logo1' />
        </div>
        <Link to='/login' onClick={loginHandler}>
          <button>Log in</button>
        </Link>
      </div>
      <div className={styles.ob_2}>반응형 이미지</div>
    </div>
  );
}

export default OnboardingPage;
