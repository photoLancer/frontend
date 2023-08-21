import styles from './payment.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Payment = () => {
  const userState = useSelector((state) => state.user);
  const [accounts, setAccounts] = useState([]);
  const [addBank,setAddBank]=useState(false);
  const [inputBank,setInputBank]=useState('');
  const [inputAccountNum,setInputAccountNum]=useState('');
  const [mainAccount,setMainAccount]=useState(false);

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

  const handleMainAccount=()=>{
    setMainAccount(true);

  }

  const handleCancel=()=>{
    setAddBank(false);
  }
  const handleApply=async()=>{
    setAddBank(false);
    try{
        const response= await axios.post(
            `http://photolancer.shop/setting/account`,{
                accountNumber:inputAccountNum,
                bank:inputBank,
            },
            {
                headers:{
                    Authorization:userState.jwt,
                },
            }
        );
        console.log(response.data);

    }
    catch(error){
        console.error('Error:',error);
    }
  }
 
  const handleDeleteAccount=async(accountId)=>{
    console.log('delete');
    try{
        const response=await axios.delete(
            `http://photolancer.shop/setting/account/{account-id}`,
            {
                headers:{
                    Authorization:userState.jwt,
                },
            }
        );
        setAccounts(prevAccounts => prevAccounts.filter(account => account.id !== accountId));
    } 
    catch(error){
        console.error('Error:',error);
    }
  }

  return (
    <>
    <p className={styles.header}>결제 관리</p>
    <div className={styles.bigbox}>
      {addBank ? (
        <div className={styles.addbox}>
          <p className={styles.addtext}>추가할 은행 정보를 입력해주세요</p><br/>
          <input
            type='text'
            className={styles.bank}
            placeholder='은행명'
            value={inputBank}
            onChange={(event) => setInputBank(event.target.value)}
          /><br/>
          <input
            type='number'
            className={styles.accountnum}
            placeholder='계좌번호'
            value={inputAccountNum}
            onChange={(event) => setInputAccountNum(event.target.value)}
          />
          <div>
            <button className={styles.cancelbtn} onClick={handleCancel}>취소</button>
            <button className={styles.applybtn} onClick={handleApply}>확인</button>
          </div>
        </div>
      ) : (
        <div className={styles.wrapbox}>
          <div className={styles.mediumbox}>
           
          {accounts.map(account => (
                            <div className={styles.smallbox1} key={account.id}>
                                <p className={styles.text1}>계좌 정보</p>
                                <div className={styles.tinybox}>
                                    <p className={styles.bankname}>{account.bank}</p><br />
                                    <p className={styles.number}>{account.accountNumber}</p>
                                </div>
                                <button className={styles.deletebtn1} onClick={() => handleDeleteAccount(account.id)}>삭제</button>
                            </div>
                        ))}
           
          </div>
          <div className={styles.footer}>
            <button className={styles.set} onClick={handleMainAccount}>메인 계좌로 설정</button>
            <button className={styles.add} onClick={() => setAddBank(true)}>계좌 추가하기</button>
          </div>
        </div>
      )}
    </div>
  </>
);
}

export default Payment;
