import React from 'react';
import styles from './Onboarding.module.css';
import logo1 from '../../logo/logo_symbol.png';

import contents1 from './onboarding.JPG';
import contents2 from './contents2.JPG';
import contents3 from './contents3.JPG';
import contents4 from './contents4.JPG';
import contents5 from './contents5.JPG';
import contents6 from './contents6.JPG';
import contents7 from './contents7.JPG';
import contents8 from './contents8.JPG';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function OnboardingPage() {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate('../Login');
  };

  return (
    <div className={styles.Onboarding}>
      <div className={styles.ob_1}>
        <div>
          <img src={logo1} className={styles.symbol} alt="logo1" />
        </div>
        <Link to="../Login" onClick={loginHandler}>
          <button>Log in</button>
        </Link>
      </div>
      <div className={styles.ob_2}>
        <img className={styles.contents} src={contents1} alt="contents1" />
      </div>
      <div className={styles.ob_3}>
        <div className={styles.red_circle}></div>
        <div className={styles.paragraph}>
          <span>디자이너</span>
          <span>를 위해</span>
        </div>
        <div className={styles.sentence}>
          그동안 까다로웠던 사진 저작권 걱정 없이
          <br /> 사진 구매를 통해 언제 어디서든 자유롭게
          <br /> 상업적으로 사용이 가능해요.
        </div>
        <img className={styles.contents} src={contents2} alt="contents"></img>
      </div>
      <div className={styles.ob_4}>
        <div className={styles.red_circle}></div>
        <div className={styles.paragraph}>
          <span>포토그래퍼</span>
          <span>를 위해</span>
        </div>
        <div className={styles.sentence}>
          사진을 업로드하기만 했던 일반적인 SNS와 다르게
          <br />
          내가 올린 사진으로 간단하게 돈을 벌 수 있어요.
          <br />
          당신의 사진 실력을 모두에게 보여주세요!
        </div>
        <div className={styles.split}>
          <img src={contents3} alt="contents3" className={`${styles.contents3} ${styles.contents}`}></img>
          <div className={styles.sentence3}>
            <p>당신의 작품에 대한 인기를 마음껏 누려보세요!</p>
            <img src={contents4} alt="contents4" className={`${styles.contents4} ${styles.contents}`}></img>
          </div>
        </div>
      </div>
      <div className={styles.ob_5}>
        <div className={styles.red_circle}></div>
        <div className={styles.paragraph}>
          <span>당신의 취미</span>
          <span>를 위해</span>
        </div>
        <div className={styles.sentence}>
          취미로 찍었던 사진들을 업로드해보세요.
          <br />
          많은 사람들이 당신의 사진에 관심을 가지게 될 거예요.
        </div>
        <img className={styles.contents} src={contents5} alt="contents5"></img>
      </div>
      <div className={styles.ob_6}>
        <div className={styles.red_circle}></div>
        <div className={styles.paragraph2}>
          <span>한눈에 확인하는</span>
          <span> 인기 사진</span>
        </div>
        <div className={styles.sentence}>
          매일매일 달라지는 인기 사진들을 한눈에 확인할 수 있어요.
          <br />
          사람들이 어떤 사진에 관심을 많이 가지는지 알아보세요!
        </div>
      </div>
      <img src={contents6} alt="contents6" className={`${styles.contents6} ${styles.contents}`}></img>
      <div className={styles.ob_7}>
        <div className={styles.red_circle}></div>
        <div className={styles.paragraph2}>
          <span>자유로운</span>
          <span> 사진 업로드</span>
        </div>
        <div className={styles.sentence}>
          그동안 까다로웠던 사진 저작권 걱정 없이 사진 구매를 통해
          <br /> 언제 어디서든 자유롭게 상업적으로 사용이 가능해요.
        </div>
        <img src={contents7} alt="contents7" className={`${styles.contents7} ${styles.contents}`}></img>
      </div>
      <div className={styles.ob_8}>
        <div className={styles.red_circle}></div>
        <div className={styles.paragraph2}>
          <span>정당한</span>
          <span> 사진 구매</span>
        </div>
        <div className={styles.sentence}>
          포인트 충전을 통해 원하는 사진을 합리적인 가격에
          <br />
          구매가 가능해요. 구매 후에는 원본 사진으로 다운로드가 가능해요.
        </div>
        <img src={contents8} alt="contents8" className={`${styles.contents8} ${styles.contents}`}></img>
      </div>
    </div>
  );
}

export default OnboardingPage;
