import React, { useEffect, useState, useContext } from 'react';
import styles from './Notice.module.css';
import NoticeContent from './NoticeContent';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchDispatchContext } from '../../../routes/HomePage/HomePage';
import NoticeDetail from './NoticeDetail';

function Notice() {
  const searchDispatch = useContext(SearchDispatchContext);
  const userState = useSelector((state) => state.user);
  const [notices, setNotices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(1);
  const [clickedNoticeId, setClickedNoticeId] = useState(null);
  const allHandler = async () => {
    setCategory(1);
    setClickedNoticeId(null);
    const notice = await axios.get('http://photolancer.shop/notice?page=0', {
      headers: {
        Authorization: userState.jwt,
      },
    });
    setNotices(notice.data.noticePagingDto.content);
  };
  const systemHandler = async () => {
    setCategory(2);
    setClickedNoticeId(null);
    const notice = await axios.get(
      'http://photolancer.shop/notice/category/system?page=0',
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    setNotices(notice.data.noticePagingDto.content);
  };
  const eventHandler = async () => {
    setCategory(3);
    setClickedNoticeId(null);
    const notice = await axios.get(
      'http://photolancer.shop/notice/category/event?page=0',
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    setNotices(notice.data.noticePagingDto.content);
  };
  const serviceHandler = async () => {
    setCategory(4);
    setClickedNoticeId(null);
    const notice = await axios.get(
      'http://photolancer.shop/notice/category/service?page=0',
      {
        headers: {
          Authorization: userState.jwt,
        },
      }
    );
    setNotices(notice.data.noticePagingDto.content);
  };
  useEffect(() => {
    // searchInput ->null로 바꾸기
    searchDispatch({ type: 'MAKE_NULL' });

    //bookmark 정보 들고오기
    const fetchNotice = async () => {
      try {
        const notice = await axios.get(
          'http://photolancer.shop/notice?page=0',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setNotices(notice.data.noticePagingDto.content);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotice();
  }, []);
  // console.log(notices);

  const noticeClick = (id) => {
    console.log('postId:', id);
    setClickedNoticeId(id);
  };

  return (
    <>
      <div className={styles.Notice}>
        {/*헤더*/}
        <div className={styles.no_head}>
          <div className={styles.types}>
            <button
              className={`${styles.btn} ${
                category === 1 ? styles.selected : ''
              }`}
              onClick={allHandler}
            >
              All
            </button>
            <button
              className={`${styles.btn} ${
                category === 2 ? styles.selected : ''
              }`}
              onClick={systemHandler}
            >
              System
            </button>
            <button
              className={`${styles.btn} ${
                category === 3 ? styles.selected : ''
              }`}
              onClick={eventHandler}
            >
              Event
            </button>
            <button
              className={`${styles.btn} ${
                category === 4 ? styles.selected : ''
              }`}
              onClick={serviceHandler}
            >
              Service
            </button>
          </div>
        </div>
        {/*컨텐츠*/}
        {clickedNoticeId === null ? (
          <div>
            <hr className={styles.hr1}></hr>
            {loading ? (
              <p>loading...</p>
            ) : (
              notices.map((n) => (
                <>
                  <NoticeContent
                    id={n.id}
                    category={n.category}
                    title={n.title}
                    createdAt={n.createdAt}
                    onClick={noticeClick}
                  />
                </>
              ))
            )}
          </div>
        ) : (
          <NoticeDetail notice_id={clickedNoticeId} />
        )}
        {/* <div>
          <hr className={styles.hr1}></hr>
          {loading ? (
            <p>loading...</p>
          ) : (
            notices.map((n) => (
              <>
                <NoticeContent
                  id={n.id}
                  category={n.category}
                  title={n.title}
                  createdAt={n.createdAt}
                  onClick={noticeClick}
                />
              </>
            ))
          )}
        </div> */}
        {/*하단*/}
        <div className='flex flex-row justify-center'>
          <div className={styles.no_footer}>
            {/* <div>{'<'}</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>{'>'}</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notice;
