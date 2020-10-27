import React, { useState, useEffect } from 'react';

import {connect} from 'react-redux';
import {toggleChat} from '../../redux/user-interface/user-interface.actions';
import {setReceiverUserId} from '../../redux/chat/chat.actions';

import { firestore } from '../../firebase/firebase.utils';

import { Avatar } from '@material-ui/core';

import './friends-row.styles.scss';

const FriendsRow = ({ userId, isChatOpen, toggleChat, setReceiverUserId }) => {
  const [userData, setUserData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const userRef = firestore.doc(`users/${userId}`);
    userRef.get().then((doc) => {
      setUserData(doc.data());
    });

    setId(userId)
  }, [userId]);
  

  return (
    <div className='friends-row' onClick={() => {
        if (!isChatOpen) {
        toggleChat()
      }
      setReceiverUserId(userId)
    }}>
      <Avatar src={userData && userData.profilePhotoUrl} />
      <h4>{userData && `${userData.name} ${userData.surname}`}</h4>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isChatOpen: state.userInterface.openChat,
});

const mapDispatchToProps = (dispatch) => ({
  toggleChat: () => dispatch(toggleChat()),
  setReceiverUserId: (id) => dispatch(setReceiverUserId(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsRow);
