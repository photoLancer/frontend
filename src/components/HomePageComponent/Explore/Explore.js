import React, { useEffect, useState, useContext } from 'react';
import styles from './explore.module.css';
import Contest from './Contest';
import Clickcontest from './Clickcontest';
import PhotoCard from '../PhotoCard/PhotoCard';
import { Row } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchContext } from '../../../routes/HomePage/HomePage';
import SearchExplore from './SearchExplore';

function Explore() {
  const searchState = useContext(SearchContext);
  const [explore, setExplore] = useState(null);
  const userState = useSelector((state) => state.user);

  const [hotPhotos, setHotPhotos] = useState(null);
  const [recentlyPhotos, setRecentlyPhotos] = useState(null);

  const [contestInfo, setContestInfo] = useState(null);
  const [awardPhotos, setAwardPhotos] = useState(null);
  const [contestList, setContestList] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const func = async () => {
      const response = await axios.get('http://photolancer.shop/explore', {
        headers: {
          Authorization: userState.jwt,
        },
      });
      setExplore(response.data);
      setHotPhotos(response.data.hotPhotoList.slice(0, 3));
      setRecentlyPhotos(response.data.recentPhotoList.slice(0, 3));
      setContestList(response.data.awardPhotoList.contestList);
      setContestInfo(response.data.awardPhotoList.contest);
      setAwardPhotos(response.data.awardPhotoList.postContests);
    };
    func();
  }, []);

  // console.log(explore);

  // console.log('contestList: ', contestList);
  // console.log('contestInfo: ', contestInfo);
  // console.log('awardPhotos: ', awardPhotos);

  const [contestBtnClicked, setConstestBtnClicked] = useState(false);

  const contestBtnHandler = () => {
    setConstestBtnClicked(!contestBtnClicked);
  };

  const contestSelectUpBtnHandler = () => {
    console.log('up');
    if (current === 0) {
      setCurrent(contestList.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const contestSelectDownBtnHandler = () => {
    console.log('down');
    if (current === contestList.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const contestSelectCheckHandler = async () => {
    console.log('check');
    const response = await axios.get(
      `http://photolancer.shop/explore/awards/${contestList[current].id}`,
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    console.log(response.data);
    setContestInfo(response.data.contest);
    setAwardPhotos(response.data.postContests);
  };

  return (
    <>
      {searchState.searchInput === null ? (
        <div>
          <div className='mb-16'>
            <h1 className={styles.title}>{`HOT PHOTO >`}</h1>
            <div className='hot_photos flex flex-row items-start'>
              <Row gutter={[24, 24]}>
                {hotPhotos &&
                  hotPhotos.map((photo, index) => (
                    <React.Fragment key={index}>
                      <PhotoCard id={photo.postId} image={photo.thumbNailUri} />
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
                      <PhotoCard id={photo.postId} image={photo.thumbNailUri} />
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
                          {contestList[current].information}
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
                <h2 className={styles.contest_title_a}>Contest Info</h2>
                <div className={`w-full h-80 ${styles.contest_info}`}>
                  <p>{contestInfo.name}</p>
                </div>
                <Clickcontest info={awardPhotos} />
              </div>
            ) : (
              awardPhotos && <Contest info={awardPhotos} />
            )}
          </div>
        </div>
      ) : (
        <SearchExplore />
      )}
    </>
  );
}

export default Explore;
