import React, { useEffect, useState } from 'react';
import styles from './explore.module.css';
import Contest from './Contest';
import Clickcontest from './Clickcontest';
import PhotoCard from '../PhotoCard/PhotoCard';
import { Row } from 'antd';

function Explore() {
  useEffect(() => {
    console.log('explore page');
  });

  const vento =
    'https://recipe1.ezmember.co.kr/cache/recipe/2015/09/27/56b76a345db3358387f761b77631070c1.jpg';
  const maltipoo =
    'http://www.catdogs.co.kr/data/file/friends/thumb-2949977478_zDciQuEK_abd02efbaef97e3bee04af11e9087fcfb36fcfa2_1000x1000.jpg';
  const maltipoo2 =
    'https://m.the-pet.co.kr/web/product/big/201902/b072988043ac56e690d2a57af382e7c3.jpg';
  const gym =
    'https://news.skhynix.co.kr/hubfs/A_Medialibrary/10_Newsroom%20Upload/2022/11%EC%9B%94/%ED%95%98%EC%9D%B4%EC%9D%B8%ED%84%B0%EB%B7%B0_%EC%B2%B4%EC%9C%A1%EC%8B%9C%EC%84%A4/SK%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4_%ED%97%AC%EC%8A%A4%EC%9E%A52.jpg';
  const [hotPhotos, setHotPhotos] = useState([
    { id: 1, img: maltipoo2 },
    { id: 2, img: vento },
    { id: 3, img: gym },
  ]);

  const [recentlyPhotos, setRecentlyPhotos] = useState([
    { id: 1, img: gym },
    { id: 2, img: vento },
    { id: 3, img: maltipoo },
  ]);

  const [contestInfos, setContestInfos] = useState([
    { id: 1, ranking: '1st', img: maltipoo },
    { id: 2, ranking: '2nd', img: maltipoo2 },
    { id: 3, ranking: '3rd', img: gym },
    {
      contest_id: 1,
      constest_title: '이달의 일반인 인기모델',
      contest_desc: 'abcd',
    },
  ]);

  const [contestBtnClicked, setConstestBtnClicked] = useState(false);

  const contestBtnHandler = () => {
    setConstestBtnClicked(!contestBtnClicked);
  };

  const contestSelectUpBtnHandler = () => {
    console.log('up');
  };
  const contestSelectDownBtnHandler = () => {
    console.log('down');
  };
  const contestSelectCheckHandler = () => {
    console.log('check');
  };

  return (
    <>
      <div>
        <div className='mb-16'>
          <h1 className={styles.title}>{`HOT PHOTO >`}</h1>
          <div className='hot_photos flex flex-row items-start'>
            <Row gutter={[24, 24]}>
              {hotPhotos &&
                hotPhotos.map((photo, index) => (
                  <React.Fragment key={index}>
                    <PhotoCard id={photo.id} image={photo.img} />
                  </React.Fragment>
                ))}
            </Row>
          </div>
        </div>

        <div className='mb-16'>
          <h1 className={styles.title}>{`RECENTLY UPLOADED PHOTO >`}</h1>
          <div className='recently_photo flex flex-row items-start'>
            <Row gutter={[24, 24]}>
              {recentlyPhotos &&
                recentlyPhotos.map((photo, index) => (
                  <React.Fragment key={index}>
                    <PhotoCard id={photo.id} image={photo.img} />
                  </React.Fragment>
                ))}
            </Row>
          </div>
        </div>

        <div className='mb-16'>
          <h1 className={styles.title}>
            <button onClick={contestBtnHandler}>
              {contestBtnClicked ? `PHOTO AWARDS v` : `PHOTO AWARDS >`}
            </button>
          </h1>

          {contestBtnClicked ? (
            <div className='mt-8'>
              <div className='select flex flex-row h-12 items-center mb-12'>
                <h2 className={`basis-1/12 ${styles.contest_h2}`}>Contest</h2>
                <div className='basis-10/12 flex flex-row justify-center h-full'>
                  <div className={`flex flex-row ${styles.contest_select}`}>
                    <div className='flex justify-center items-center basis-11/12'>
                      <p className={styles.contest_title}>
                        {contestInfos[3].constest_title}
                      </p>
                    </div>
                    <div
                      className={`flex flex-col basis-1/12 ${styles.contest_select_btns}`}
                    >
                      <button
                        className='h-3/6'
                        onClick={contestSelectUpBtnHandler}
                      >
                        ▲
                      </button>
                      <button
                        className='h-3/6'
                        onClick={contestSelectDownBtnHandler}
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className={`basis-1/12 ${styles.contest_check_btn}`}
                  onClick={contestSelectCheckHandler}
                >
                  check
                </button>
              </div>
              <Clickcontest info={contestInfos} />
            </div>
          ) : (
            <Contest info={contestInfos} />
          )}
        </div>
      </div>
    </>
  );
}

export default Explore;
