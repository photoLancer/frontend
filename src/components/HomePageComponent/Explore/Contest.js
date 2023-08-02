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
            id={info[0].id}
            image={info[0].img}
            ranking={info[0].ranking}
          />
          <PhotoCard
            id={info[1].id}
            image={info[1].img}
            ranking={info[1].ranking}
          />
          <PhotoCard
            id={info[2].id}
            image={info[2].img}
            ranking={info[2].ranking}
          />
        </Row>
      </div>
    </>
  );
}

export default Contest;
