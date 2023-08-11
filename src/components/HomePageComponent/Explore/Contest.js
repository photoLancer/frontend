import React, { useEffect } from 'react';
import styles from './contest.module.css';
import { Row } from 'antd';
import PhotoCard from '../PhotoCard/PhotoCard';

function Contest(props) {
  const { info } = props;
  useEffect(() => {
    console.log(info);
  }, []);
  return (
    <>
      <div className='recently_photo flex flex-row items-start'>
        <Row gutter={[24, 24]}>
          <PhotoCard
            id={info[0].post.postId}
            image={info[0].post.thumbNailUri}
            ranking={info[0].ranked}
          />
          <PhotoCard
            id={info[1].post.postId}
            image={info[1].post.thumbNailUri}
            ranking={info[1].ranked}
          />
          <PhotoCard
            id={info[2].post.postId}
            image={info[2].post.thumbNailUri}
            ranking={info[2].ranked}
          />
        </Row>
      </div>
    </>
  );
}

export default Contest;
