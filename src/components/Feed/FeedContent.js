import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from './feedcontent.module.css';
import { PhotoContext } from '../../routes/HomePage/HomePage';
import FeedComment from './FeedComment';
import { FeedOptionDispatchContext } from './Feed';
import axios from 'axios';
import { useSelector } from 'react-redux';

function FeedContent() {
  const photo = useContext(PhotoContext);
  const userState = useSelector((state) => state.user);

  const [feedInfo, setFeedInfo] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  //like
  const [like, setLike] = useState(null);
  const likeBtnHandler = async () => {
    // 좋아요 or 좋아요 취소
    const response = await axios.put(
      `http://photolancer.shop/post/${photo.photo_id}/like`,
      {},
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    setLike(!like);
  };

  //
  //header height 알아내는 코드 - 가상 height 만들기 목적 , comment 기능 시 필요
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(null);
  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      setHeaderHeight(headerHeight);
    }

    const fetchFeedInfo = async () => {
      try {
        const response = await axios.get(
          `http://photolancer.shop/post/${photo.photo_id}`,
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setFeedInfo(response.data);
        setLike(response.data.likeStatus);
      } catch (error) {
        console.error('Error fetching feed info:', error);
      } finally {
        setLoading(false); // 로딩 상태를 false로 업데이트
      }
    };

    const fetchComment = async () => {
      const response = await axios.get(
        `http://photolancer.shop/post/${photo.photo_id}/comment`,
        {
          headers: {
            Authorization: userState.jwt,
          },
        }
      );
      setComments(response.data);
    };
    fetchFeedInfo();
    fetchComment();
  }, []);
  //
  console.log('feedInfo: ', feedInfo);
  console.log('comment: ', comments);

  const onClickHandler = (e) => {
    e.stopPropagation();
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

  const addComment = async () => {
    //댓글 작성
    const response = await axios.post(
      `http://photolancer.shop/post/${photo.photo_id}/comment`,
      { content: commentText },
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );

    setCommentText('');

    //화면에 바로 렌더링
    const comment = await axios.get(
      `http://photolancer.shop/post/${photo.photo_id}/comment`,
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    setComments(comment.data);
  };

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
        {loading ? (
          <p>Loading...</p> // 로딩 중일 때 표시할 내용
        ) : (
          <>
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
                    <img src={feedInfo.user.profileUrl} alt='' />
                  </div>
                  <div className={styles.uploader_level}>
                    Lv.{feedInfo.user.level}
                  </div>
                  <div className={styles.uplaoder_name}>
                    {feedInfo.user.nickname}
                  </div>
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
                <img src={feedInfo.postImages[0]} alt={photo.photo_id} />
              </div>
              <div className='tags flex flex-row mb-4'>
                {feedInfo.bookmarks.map((tag, index) => (
                  <React.Fragment key={index}>
                    <p className={styles.tag}>{tag}</p>
                  </React.Fragment>
                ))}
              </div>
              <div className='sentence mb-2'>
                <p className={styles.sentence_p}>{feedInfo.content}</p>
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
                            user_id={comment.user.id}
                            name={comment.user.nickname}
                            lv={comment.user.level}
                            text={comment.content}
                            profileUrl={comment.user.profileUrl}
                            comment_id={comment.id}
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
          </>
        )}
      </div>
    </>
  );
}

export default FeedContent;
