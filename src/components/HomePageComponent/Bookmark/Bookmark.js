import React, { useRef, useState, useEffect } from 'react';
import styles from './bookmark.module.css';
import LeftBtn from './LeftBtn';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Bookmark() {
  const userState = useSelector((state) => state.user);
  //오른쪽 버튼 관리
  const hotphotoBtn = useRef();
  const recentlyBtn = useRef();

  const [rightSelect, setRightSelect] = useState(1); // 1 -> Hot photo  , 2-> recently uploaded
  const [hrShowHotPhoto, setHrShowHotPhoto] = useState(true);
  const [hrShowRecently, setHrShowRecently] = useState(false);

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

  const hotphotoHandler = () => {
    setRightSelect(1);
    console.log('hotphoto');
  };
  const recentlyBtnHandler = () => {
    setRightSelect(2);
    console.log('recently uploaded');
  };

  //왼쪽 버튼 관리
  const [buttons, setButtons] = useState([
    { tag: 'Trip', isClicked: true },
    { tag: 'Travel', isClicked: false },
    { tag: 'Journey', isClicked: false },
    { tag: 'Tour', isClicked: false },
  ]);

  const handleButtonClick = (index) => {
    const updatedButtons = [...buttons];
    for (let i = 0; i < updatedButtons.length; i++) {
      updatedButtons[i].isClicked = false;
    }
    updatedButtons[index].isClicked = true;
    setButtons(updatedButtons);
    console.log(buttons[index].tag);
  };

  //bookmark 사진 관리

  const [bookmarka, setBookmarka] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const bookmark = await axios.get(
          'http://photolancer.shop/bookmark?page=0',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setBookmarka(bookmark.data);

        const response = await axios.get(
          'http://photolancer.shop/api/v1/bookmark/list',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        console.log('a:', response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookmark();
  }, []);
  console.log(bookmarka);

  return (
    <>
      <div>
        <div className='mb-4'>
          <h2 className={styles.title}>User's Bookmark</h2>
        </div>
        <div className='flex flex-row justify-between items-center mb-8'>
          <div className='tag_group'>
            {buttons.map((button, index) => (
              <LeftBtn
                key={index}
                tag={button.tag}
                isClicked={button.isClicked}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </div>
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
        )}
      </div>
    </>
  );
}

export default Bookmark;
