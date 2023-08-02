import React, { useRef, useState, useEffect } from 'react';
import styles from './bookmark.module.css';
import LeftBtn from './LeftBtn';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';

function Bookmark() {
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
  const bulldak_img =
    'https://mblogthumb-phinf.pstatic.net/MjAxOTA4MTRfMjIz/MDAxNTY1NzY5MzIyNDMx.dz5PGsVkjTdtH6ZcLxRCiitudpFEfn7bArSg3-3t_jAg.LmZeLTYdEk3AwksjTS16pr2y7LjOj5WvCnJ44MkQALcg.JPEG.gjrlarla/%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B0%90%EC%84%B1%ED%8F%B0%EC%82%AC%EC%A7%849.jpg?type=w800';
  const [Bookmarks, setBookmarks] = useState([
    { id: 1, img: bulldak_img },
    { id: 2, img: bulldak_img },
    { id: 3, img: bulldak_img },
    { id: 4, img: bulldak_img },
    { id: 5, img: bulldak_img },
    { id: 6, img: bulldak_img },
    { id: 7, img: bulldak_img },
    { id: 8, img: bulldak_img },
    { id: 9, img: bulldak_img },
  ]);

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
        <div className='bookmark_photos'>
          <Row gutter={[24, 24]}>
            {Bookmarks &&
              Bookmarks.map((photo, index) => (
                <React.Fragment key={index}>
                  <PhotoCard id={photo.id} image={photo.img} />
                </React.Fragment>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Bookmark;
