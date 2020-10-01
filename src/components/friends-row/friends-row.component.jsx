import React, { useState, useEffect } from 'react';

import { firestore } from '../../firebase/firebase.utils';

import { Avatar } from '@material-ui/core';

import './friends-row.styles.scss';

const FriendsRow = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userRef = firestore.doc(`users/${userId}`);
    userRef.get().then((doc) => {
      setUserData(doc.data());
    });
  }, [userId]);

  return (
    <div className='friends-row'>
      <Avatar src={userData && userData.profilePhotoUrl} />
      <h4>{userData && `${userData.name} ${userData.surname}`}</h4>
    </div>
  );
};

export default FriendsRow;
