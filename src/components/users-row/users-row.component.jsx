import React from 'react';
import { connect } from 'react-redux';

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
      this.setState({ userFriendsStatus: doc.data()[currentUserId] }, () =>
        console.log(doc.data()[currentUserId])
      );
    });

    console.log((await userFriendsRef.get()).data());
  }

  componentWillUnmount() {
    this.unsubscribeFromOnSnapshot = null;
  }

  render() {
    const { fullName, profilePhotoUrl, currentUserId, id } = this.props;
    const { userFriendsStatus } = this.state;

    return (
      <div className={`users__row `}>
        <Avatar
          src={profilePhotoUrl}
          style={{ width: '36px', height: '36px' }}
        />
        <h4>{fullName}</h4>
        {userFriendsStatus === null ? (
          <CustomButton2
            text='Pending'
            style={{ marginLeft: 'auto' }}
            onClick={() => addFriend(currentUserId, id)}
          />
        ) : userFriendsStatus === undefined ? (
          <CustomButton2
            text='Add Friend'
            style={{ marginLeft: 'auto' }}
            onClick={() => addFriend(currentUserId, id)}
          />
        ) : userFriendsStatus === false ? (
          <CustomButton2
            text='Add Friend'
            style={{ marginLeft: 'auto' }}
            onClick={() => addFriend(currentUserId, id)}
          />
        ) : userFriendsStatus === true ? (
          <CustomButton2
            text='Message'
            style={{ marginLeft: 'auto' }}
            onClick={() => addFriend(currentUserId, id)}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserId: state.user.currentUser.id,
});

export default connect(mapStateToProps)(UsersRow);
