import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function NoticeDetail(props) {
  const userState = useSelector((state) => state.user);
  const { notice_id } = props;
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const notice = await axios.get(
          `http://photolancer.shop/notice/${notice_id}`,
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        setNotice(notice.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotice();
  }, []);
  console.log(notice);
  return (
    <>
      <div className='w-full  flex flex-row justify-center'>
        <div className='w-11/12  mt-12'>
          {loading ? (
            <p>loading... </p>
          ) : (
            <div>
              <h2 className='text-lg'>{notice.title}</h2>
              <br />
              <div className='flex flex-row justify-end'>
                {notice.createdAt}
              </div>
              <br />
              <p>{notice.content}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NoticeDetail;
