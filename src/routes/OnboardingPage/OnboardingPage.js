import React from 'react';
import styles from './Onboarding.module.css';
import Header from '../../components/Header/Header';
function OnboardingPage() {
  return (
    <div className={styles.viewport}>
      <div class={styles.contents}>
        <Header></Header>
        <div className={styles.Onboarding}>
          <div className={styles.ob_2}>반응형 이미지</div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
