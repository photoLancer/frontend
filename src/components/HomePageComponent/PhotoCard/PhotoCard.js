import React, { useContext } from 'react';
import styles from './photocard.module.css';
import { Col } from 'antd';
import { PhotoDispatchContext } from '../../../routes/HomePage/HomePage';

function PhotoCard(props) {
  const photoDispatch = useContext(PhotoDispatchContext);

  const { id, image, ranking } = props;
  const photoClickHandler = () => {
    photoDispatch({ type: 'PHOTO_CLICK', id: id });
  };
  return (
    <Col lg={8} md={12} xs={24}>
      <div className={styles.photo} onClick={photoClickHandler}>
        <div className={styles.ranking}>{ranking}</div>
        <img src={image} alt={id} className={styles.photo_img} />
      </div>
    </Col>
  );
}

export default PhotoCard;
