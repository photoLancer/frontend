import styles from './payment.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Payment = () => {
  const userState = useSelector((state) => state.user);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchMyAccount = async () => {
      try {
        const response = await axios.get('http://photolancer.shop/GET/setting/account', {
          headers: {
            Authorization: userState.jwt,
          },
        });
        console.log('Response data:', response.data.data);
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching my accounts:', error);
      }
    };

    fetchMyAccount();
  }, []);

  return (
    <>
      <p className={styles.header}>결제 관리</p>
      <div className={styles.bigbox}>
        <div className={styles.mediumbox}>
          {accounts.map((account) => (
            <div className={styles.smallbox1} key={account.id}>
              <p className={styles.text1}>메인계좌</p>
              <div className={styles.tinybox}>
               
                <p className={styles.bankname}>{account.bank}</p><br />
                <p className={styles.number}>{account.accountNumber}</p>
              </div>
              <button className={styles.deletebtn1}>삭제</button>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <button className={styles.set}>메인 계좌로 설정</button>
          <button className={styles.add}>계좌 추가하기</button>
        </div>
      </div>
    </>
  );
}

export default Payment;
