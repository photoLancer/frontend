import Login from '../LoginPage/Login.JPG';
import styles from './MembershipPage.module.css';
import { Link, useNavigate } from 'react-router-dom';

function MembershipPage() {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate('./CreateAccount');
  };
  return (
    <div className={styles.MembershipPage}>
      <img className={styles.L_img} src={Login} alt="login_camera" />
      <div className={styles.create_account}>
        <p>Create Account</p>
        <div>카카오로 회원가입</div>
        <div>네이버로 회원가입</div>
        <div>구글로 회원가입</div>
        <div onClick={loginHandler}>
          <Link to="./CreateAccount">일반 아이디로 회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default MembershipPage;
