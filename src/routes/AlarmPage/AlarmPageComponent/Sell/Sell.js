import React, { useState, useEffect } from 'react';
import styles from './sell.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Message from '../Msg/Message';

function Sell() {
  const userState = useSelector((state) => state.user);

  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const notification = await axios.get(
          'http://photolancer.shop/api/v1/notification/list?type=sell',
          {
            headers: {
              Authorization: userState.jwt,
            },
          }
        );
        const reversedMessages = notification.data.reverse();
        const dayMessages = {};

        reversedMessages.forEach((message) => {
          const date = new Date(message.updatedAt);

          const year = date.getFullYear().toString().slice(2); // '23'
          const month = (date.getMonth() + 1).toString().padStart(2, '0'); // '08'
          const day = date.getDate().toString().padStart(2, '0'); // '09'

          const formattedDateString = `${year}.${month}.${day}`;

          if (!dayMessages[formattedDateString]) {
            dayMessages[formattedDateString] = [];
          }
          dayMessages[formattedDateString].push(message);
        });

        const sortedKeys = Object.keys(dayMessages).sort((a, b) =>
          b.localeCompare(a)
        );
        const sortedGroupedMessages = {};
        sortedKeys.forEach((key) => {
          sortedGroupedMessages[key] = dayMessages[key];
        });

        // console.log(dayMessages);

        setMessages(dayMessages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotification();
  }, []);
  // console.log(messages);
  return (
    <>
      <div className={styles.alarm_contents}>
        {loading ? (
          <p>loading ...</p>
        ) : (
          <>
            {Object.keys(messages).map((date) => (
              <div key={date}>
                {/* <h2>{date}</h2> 날짜 출력 */}
                <p className={`mb-2 ${styles.day}`}>{date}</p>
                {messages[date].map((message, index) => (
                  <div key={index}>
                    <Message msg={message.message} />
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Sell;
