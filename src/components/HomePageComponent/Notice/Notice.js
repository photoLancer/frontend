import React from 'react';
import styles from './Notice.module.css';

function Notice() {
  return (
    <>
      <div className={styles.Notice}>
        {/*헤더*/}
        <div className={styles.no_head}>
          <div className={styles.types}>
            <button>All</button>
            <button>System</button>
            <button>Event</button>
            <button>Service</button>
          </div>
          <div className={styles.types2}>
            <select name='types'>
              <option value='All'>All</option>
              <option value='System'>System</option>
              <option value='Event'>Event</option>
              <option value='Service'>Service</option>
            </select>
          </div>
        </div>
        {/*본문*/}
        <div className={styles.no_content}>
          <hr className={styles.hr1}></hr>
          <div className={styles.contents}>
            <div className={styles.contents1}>EVENT</div>
            <div className={styles.contents2}>6월 포토대회 공지사항</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.contents}>
            <div className={styles.contents1}>SYSTEM</div>
            <div>2차 서버 안정화 관련 공지</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />

          <div className={styles.contents}>
            <div className={styles.contents1}>EVENT</div>
            <div>'이 달의 일반인 모델' 인기상 결과 공지</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />

          <div className={styles.contents}>
            <div className={styles.contents1}>EVENT</div>
            <div>5월 포토 대회 수상 2차 알림</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.contents}>
            <div className={styles.contents1}>SERVICE</div>
            <div>사진 저작권 관련 서비스 약관 개선안 공지</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.contents}>
            <div className={styles.contents1}>EVENT</div>
            <div>5월 포토 대회 수상 1차 알림</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.contents}>
            <div className={styles.contents1}>EVENT</div>
            <div>'이 달의 일반인 모델' 대회 결과 발표날 공지</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.contents}>
            <div className={styles.contents1}>SERVICE</div>
            <div>'스마트폰으로 사진 잘 찍는 요령'꿀팁 모음집</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.contents}>
            <div className={styles.contents1}>EVENT</div>
            <div>'이 달의 일반인 모델'대회 결과 발표날 공지</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.contents}>
            <div className={styles.contents1}>SERVICE</div>
            <div>핸드폰으로 배우는 사진 보정 기법</div>
            <div className={styles.contents3}>2023.06.25</div>
          </div>
          <hr className={styles.hr2} />
        </div>
        {/*하단*/}
        <div className='flex flex-row justify-center'>
          <div className={styles.no_footer}>
            <div>{'<'}</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>{'>'}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notice;
