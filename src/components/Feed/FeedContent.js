import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from './feedcontent.module.css';
import { PhotoContext } from '../../routes/HomePage/HomePage';
import FeedComment from './FeedComment';
import { FeedOptionDispatchContext } from './Feed';

function FeedContent() {
  const gym =
    'https://news.skhynix.co.kr/hubfs/A_Medialibrary/10_Newsroom%20Upload/2022/11%EC%9B%94/%ED%95%98%EC%9D%B4%EC%9D%B8%ED%84%B0%EB%B7%B0_%EC%B2%B4%EC%9C%A1%EC%8B%9C%EC%84%A4/SK%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4_%ED%97%AC%EC%8A%A4%EC%9E%A52.jpg';

  //
  //header height 알아내는 코드 - 가상 height 만들기 목적 , comment 기능 시 필요
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(null);
  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      setHeaderHeight(headerHeight);
    }
  }, []);
  //
  const photo = useContext(PhotoContext);

  const onClickHandler = (e) => {
    e.stopPropagation();
  };

  //like
  const [like, setLike] = useState(false);
  const likeBtnHandler = () => {
    setLike(!like);
  };

  //comments
  const [commentActive, setcommentActive] = useState(false);
  const commentBtnHandler = () => {
    setcommentActive(!commentActive);
  };
  const [commentText, setCommentText] = useState();
  const commentTextHandler = (e) => {
    setCommentText(e.target.value);
  };

  const addComment = () => {
    console.log(commentText);
    setCommentText('');
  };
  const [comments, setComments] = useState([
    { user_id: 1, name: 'tokemoo', lv: 4, text: '저도 가고 싶어요' },
    { user_id: 2, name: 'lemon', lv: 7, text: 'Your photo skill is so good!!' },
  ]);
  //

  //share
  const feedOptionDispatch = useContext(FeedOptionDispatchContext);
  const shareBtnHandler = () => {
    feedOptionDispatch({ type: 'SHARE_CLICK' });
  };

  //purchase
  const purchaseBtnHandler = () => {
    feedOptionDispatch({ type: 'PURCHASE_CLICK' });
  };

  return (
    <>
      <div
        className={` flex justify-center ${styles.content} ${
          commentActive ? 'w-9/12' : 'w-7/12'
        }`}
        onClick={onClickHandler}
      >
        <div
          className={`w-11/12 h-full border border-solid border-black ${
            commentActive ? 'w-7/12 mr-4' : 'w-11/12'
          }`}
        >
          <div
            className='header flex flex-row justify-between items-center py-2'
            ref={headerRef}
          >
            <div className='uploader_info flex flex-row w-full items-center'>
              <div className={styles.uploader_profile_img}>
                <img src='' alt='' />
              </div>
              <div className={styles.uploader_level}>Lv.4</div>
              <div className={styles.uplaoder_name}>Namna</div>
            </div>
            <div className='buttons flex flex-row'>
              <button
                className={`${styles.btn} 
                ${like ? styles.btn_like_active : ''}`}
                onClick={likeBtnHandler}
              >
                1
              </button>
              <button className={styles.btn} onClick={commentBtnHandler}>
                2
              </button>
              <button className={styles.btn} onClick={shareBtnHandler}>
                3
              </button>
              <button className={styles.btn} onClick={purchaseBtnHandler}>
                4
              </button>
            </div>
          </div>
          <div className={styles.photo_img}>
            <img src={gym} alt={photo.photo_id} />
          </div>
          <div className='tags flex flex-row mb-4'>
            <p className={styles.tag}>#Trip</p>
            <p className={styles.tag}>#Travel</p>
            <p className={styles.tag}>#Journey</p>
            <p className={styles.tag}>#Tour</p>
          </div>
          <div className='sentence mb-2'>
            <p className={styles.sentence_p}>이번 여행은 열기구 타고 오예~</p>
          </div>
        </div>
        {commentActive ? (
          <div className='w-4/12'>
            <div
              style={{
                height: `${headerHeight}px`,
                width: '100%',
              }}
              className='py-2'
            ></div>
            <div
              style={{
                width: '100%',
                height: `45vh`,
                border: '1px solid black',
              }}
              className={styles.commentContent}
            >
              <div className='comments_area'>
                {comments &&
                  comments.map((comment, index) => (
                    <React.Fragment key={index}>
                      <FeedComment
                        user_id={comment.user_id}
                        name={comment.name}
                        lv={comment.lv}
                        text={comment.text}
                      />
                    </React.Fragment>
                  ))}
              </div>
              <textarea
                name='comment'
                id='comm'
                cols='25'
                rows='5'
                className={styles.commentText}
                placeholder='댓글을 입력해주세요.'
                value={commentText}
                onChange={commentTextHandler}
              />
            </div>
            <div className='flex justify-end'>
              <button className={styles.commentBtn} onClick={addComment}>
                댓글 작성
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default FeedContent;
