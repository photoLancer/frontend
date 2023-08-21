import { useState,useEffect } from 'react';
import styles from './exchange.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Exchange=()=>{
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
        <div className={styles.a}><p className={styles.exchangepoint}>환전가능 포인트 : 55000</p></div>
        <div className={styles.box1}>
            <p className={styles.text1}>환전할 포인트</p>
            <input type='text' className={styles.enterpoint} placeholder='환전할 포인트를 입력해주세요'></input>
        </div>
        <div className={styles.b}><p className={styles.money}>예상 입금액   =   원</p></div>
        <div className={styles.c}><button className={styles.addbank}>- 계좌 추가</button></div>
    
        <div className={styles.box2}>
            <p className={styles.text2}>환전할 계좌</p>
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
export default Exchange;
