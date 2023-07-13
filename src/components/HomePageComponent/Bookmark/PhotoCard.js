import React from 'react';
import styles from './photocard.module.css';
import { Col } from 'antd';

function PhotoCard(props) {
  const { id, image } = props;
  const photoClickHandler = () => {
    console.log('a');
  };
  return (
    <Col lg={8} md={12} xs={24}>
      <div className={styles.photo} onClick={photoClickHandler}>
        <img src={image} alt={id} className={styles.photo_img} />
      </div>
    </Col>
  );
}

export default PhotoCard;
