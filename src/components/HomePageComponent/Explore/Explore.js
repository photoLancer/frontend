import React, { useEffect, useState } from 'react';
import styles from './explore.module.css';
import Hotphoto from './Hotphoto';
import RecentlyPhoto from './RecentlyPhoto';

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

  const [contestPhotos, setContestPhtos] = useState([
    { id: 1, ranking: '1st', img: maltipoo },
    { id: 2, ranking: '2nd', img: maltipoo2 },
    { id: 3, ranking: '3rd', img: gym },
  ]);

  const [contestBtnClicked, setConstestBtnClicked] = useState(false);

  return (
    <>
      <div>
        <div className='mb-16'>
          <h1 className={styles.title}>{`HOT PHOTO >`}</h1>
          <div className='hot_photos flex flex-row items-start'>
            {hotPhotos &&
              hotPhotos.map((photo, index) => (
                <React.Fragment key={index}>
                  <Hotphoto id={photo.id} image={photo.img} />
                </React.Fragment>
              ))}
          </div>
        </div>

        <div className='mb-16'>
          <h1 className={styles.title}>{`RECENTLY UPLOADED PHOTO >`}</h1>
          <div className='recently_photo flex flex-row items-start'>
            {recentlyPhotos &&
              recentlyPhotos.map((photo, index) => (
                <React.Fragment key={index}>
                  <RecentlyPhoto id={photo.id} image={photo.img} />
                </React.Fragment>
              ))}
          </div>
        </div>

        <div className='mb-16'>
          <h1 className={styles.title}>
            <button>{`PHOTO AWARDS >`}</button>
          </h1>
          <div className='flex flex-row'>
            <div className='basis-1/3'>1st</div>
            <div className='basis-1/3'>
              <div className='h-2/4'>2</div>
              <div className='h-2/4'>3</div>
            </div>
            <div className='basis-1/3'>contest info</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
