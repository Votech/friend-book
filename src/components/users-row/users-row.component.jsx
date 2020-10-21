import React from 'react';
import { connect } from 'react-redux';

import {toggleChat} from '../../redux/user-interface/user-interface.actions';
import {setReceiverUserId} from '../../redux/chat/chat.actions';

import { addFriend, firestore } from '../../firebase/firebase.utils';

import './users-row.styles.scss';

import { Avatar } from '@material-ui/core';

import CustomButton2 from '../custom-button-2/custom-button-2.component';

class UsersRow extends React.Component {
  state = {
    userFriendsStatus: '',
  };

  unsubscribeFromOnSnapshot = null;

  async componentDidMount() {
    const { currentUserId, id } = this.props;

    const userFriendsRef = await firestore.doc(`friends/${id}`);

    this.unsubscribeFromOnSnapshot = userFriendsRef.onSnapshot((doc) => {
      this.setState({ userFriendsStatus: doc.data()[currentUserId] }
      );
    }); 
  }

  componentWillUnmount() {
    this.unsubscribeFromOnSnapshot();
  }

  render() {
    const { fullName, profilePhotoUrl, currentUserId, id, toggleChat, isChatOpen, setReceiverUserId } = this.props;
    const { userFriendsStatus } = this.state;

    return (
      <div className={`users__row `}>
        <Avatar
          src={profilePhotoUrl}
          style={{ width: '36px', height: '36px' }}
        />
        <div className='users__rowh--h4'>{fullName}</div>
        {userFriendsStatus === null ? (
          <CustomButton2
            text='Pending'
            disable
            style={{ marginLeft: 'auto' }}
          />
        ) : userFriendsStatus === undefined ? (
          <CustomButton2
            text='Add Friend'
            blue
            style={{ marginLeft: 'auto' }}
            onClick={() => addFriend(currentUserId, id)}
          />
        ) : userFriendsStatus === false ? (
          <CustomButton2
            text='Add Friend'
            blue
            style={{ marginLeft: 'auto' }}
            onClick={() => addFriend(currentUserId, id)}
          />
        ) : userFriendsStatus === true ? (
          <CustomButton2 text='Message' blue style={{ marginLeft: 'auto' }} onClick={() => {
            setReceiverUserId(id);
            if (isChatOpen === false) {
              toggleChat()
            }
            
          }} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserId: state.user.currentUser.id,
  isChatOpen: state.userInterface.openChat,
});

const mapDispatchToProps = (dispatch) => ({
  toggleChat: () => dispatch(toggleChat()),
  setReceiverUserId: (id) => dispatch(setReceiverUserId(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersRow);
