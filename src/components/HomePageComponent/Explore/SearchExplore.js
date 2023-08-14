import React, { useRef, useState, useEffect, useContext } from 'react';
import styles from './searchExplore.module.css';
// import LeftBtn from './LeftBtn';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchContext } from '../../../routes/HomePage/HomePage';

function SearchExplore() {
  const searchState = useContext(SearchContext);
  const userState = useSelector((state) => state.user);
  //오른쪽 버튼 관리
  const hotphotoBtn = useRef();
  const recentlyBtn = useRef();

  const [rightSelect, setRightSelect] = useState(1); // 1 -> Hot photo  , 2-> recently uploaded
  const [hrShowHotPhoto, setHrShowHotPhoto] = useState(true);
  const [hrShowRecently, setHrShowRecently] = useState(false);

  //bookmark 사진 정보
  const [bookmarka, setBookmarka] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rightSelect === 1) {
      hotphotoBtn.current.style = 'color:#111111';
    } else {
      hotphotoBtn.current.style = '';
    }

    if (rightSelect === 2) {
      recentlyBtn.current.style = 'color:#111111';
    } else {
      recentlyBtn.current.style = '';
    }
  }, [rightSelect]);

  const handleMouseEnterHotPhoto = () => {
    setHrShowHotPhoto(true);
  };
  const handleMouseLeaveHotPhoto = () => {
    setHrShowHotPhoto(false);
  };
  const handleMouseEnterRecently = () => {
    setHrShowRecently(true);
  };
  const handleMouseLeaveRecently = () => {
    setHrShowRecently(false);
  };

  const hotphotoHandler = async () => {
    setRightSelect(1);
    setHrShowRecently(false);

    const response = await axios.get(
      `http://photolancer.shop/bookmark/${searchState.searchInput}/popular?page=0`,
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    setBookmarka(response.data);
  };
  const recentlyBtnHandler = async () => {
    setRightSelect(2);
    setHrShowHotPhoto(false);

    const response = await axios.get(
      `http://photolancer.shop/bookmark/${searchState.searchInput}/recent?page=0`,
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    setBookmarka(response.data);
  };

  //bookmark 사진 관리
  console.log(searchState.searchInput);
  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const bookmark = await axios.get(
          `http://photolancer.shop/bookmark/${searchState.searchInput}?page=0`,
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setBookmarka(bookmark.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookmark();
  }, []);

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const bookmark = await axios.get(
          `http://photolancer.shop/bookmark/${searchState.searchInput}?page=0`,
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setBookmarka(bookmark.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookmark();
  }, [searchState.searchInput]);

  return (
    <>
      <div>
        <div className='flex flex-row justify-end items-center mb-8'>
          <div className='select_group flex flex-row'>
            <div>
              <button
                className={styles.select_btn}
                onMouseEnter={handleMouseEnterHotPhoto}
                onMouseLeave={handleMouseLeaveHotPhoto}
                ref={hotphotoBtn}
                onClick={hotphotoHandler}
              >
                Hot photo
              </button>
              {rightSelect === 1 || hrShowHotPhoto ? (
                <hr style={{ width: '88%', border: '1.5px solid #111111' }} />
              ) : (
                ''
              )}
            </div>
            <div>
              <button
                className={styles.select_btn}
                onMouseEnter={handleMouseEnterRecently}
                onMouseLeave={handleMouseLeaveRecently}
                ref={recentlyBtn}
                onClick={recentlyBtnHandler}
              >
                Recently uploaded
              </button>
              {rightSelect === 2 || hrShowRecently ? (
                <hr style={{ width: '93%', border: '1.5px solid #111111' }} />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            <div className='bookmark_photos'>
              <Row gutter={[24, 24]}>
                {bookmarka.content &&
                  bookmarka.content.map((photo, index) => (
                    <React.Fragment key={index}>
                      <PhotoCard id={photo.postId} image={photo.thumbNailUri} />
                    </React.Fragment>
                  ))}
              </Row>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SearchExplore;
