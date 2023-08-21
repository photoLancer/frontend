import styles from './charge.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

const Charge=()=>{
    const userState = useSelector((state) => state.user);
    const [accounts,setAccounts]=useState([]);

    useEffect(() => {
        const fetchMyAccount = async () => {
          try {
            const response = await axios.get('http://photolancer.shop/setting/account', {
              headers: {
                Authorization: userState.jwt,
              },
            });
            console.log('Response data:', response.data);
            console.log(response.data.responseMessage);
            console.log(response.data.data);
            setAccounts(response.data.data);
            
    
          } catch (error) {
            console.error('Error fetching my accounts:', error);
          }
        };
    
        fetchMyAccount();
      }, []);

    return(
        <>
        <div className={styles.a}><p className={styles.chargepoint}>충전 포인트 : {userState.userPoint}</p></div>
        <div className={styles.box1}>
            <p className={styles.text1}>충전할 금액</p>
            <input type='text' className={styles.entermoney} placeholder='14,000'></input>
        </div>
        <div className={styles.b}><p className={styles.afterpoint}>충전 후 보유포인트   =   22,000원</p></div>
        <div className={styles.c}><button className={styles.addbank}>- 계좌 추가</button></div>
        <div className={styles.box2}>
            <p className={styles.text2}>출금할 계좌</p>
            <select className={styles.selectbankname}>
            {accounts.map(account=>(
            <option>{account.bank}</option>
            ))}
            </select>
        </div>
        <div className={styles.footer}>
            <button className={styles.chargebtn}>충전하기</button>
        </div>
        </>
    );
}
export default Charge;