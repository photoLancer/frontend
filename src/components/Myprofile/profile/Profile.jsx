import React, { useState } from 'react';
import UserInfo from './UserInfo';
import UserLevel from './UserLevel';
import UserPoint from './UserPoint';
import EditProfile from './edit/EditProfile';
import styles from './profile.module.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const editprofileHandler = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isEditing ? (
        <div className='main basis-3/4 border border-solid border-black'>
          <EditProfile />
        </div>
      ) : (
        <div className='main basis-3/4 border border-solid border-black'>
          <button
            className={styles.editprofilebtn}
            onClick={editprofileHandler}
          >
            Edit Profile
          </button>
          <UserInfo></UserInfo>
          <div className={styles.smallboxing}>
            <UserLevel />
            <UserPoint />
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
