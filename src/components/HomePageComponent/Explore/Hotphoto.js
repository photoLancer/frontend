import React from 'react';
import styles from './hotphoto.module.css';

function Hotphoto(props) {
  const { id, image } = props;
  const photoClickHandler = () => {
    console.log('a');
  };
  return (
    <div className={styles.photo} onClick={photoClickHandler}>
      <img src={image} alt={id} className={styles.photo_img} />
    </div>
  );
}

export default Hotphoto;
