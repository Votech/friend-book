import React from 'react';

import { firestore, resolveFriendRequest } from '../../firebase/firebase.utils';

import CustomButton2 from '../custom-button-2/custom-button-2.component';

import './notifications-row.styles.scss';

import Avatar from '@material-ui/core/Avatar';

class NotificationsRow extends React.Component {
  state = {
    username: '',
    profilePhotoUrl: '',
  };

  componentDidMount() {
    const { userId } = this.props;
    const userRef = firestore.doc(`users/${userId}`);

    userRef.get().then((doc) =>
      this.setState({
        username: `${doc.data().name} ${doc.data().surname}`,
        profilePhotoUrl: doc.data().profilePhotoUrl,
      })
    );
  }

  render() {
    const { username, profilePhotoUrl } = this.state;
    const { userId, currentUserId } = this.props;
    return (
      <div className='notifications-row'>
        <Avatar
          style={{ width: '60px', height: '60px' }}
          src={profilePhotoUrl}
        />
        <div className='notifications-row__container'>
          <p>
            <span style={{ fontWeight: '600' }}>{username}</span> send you a
            friend request
          </p>
          <div className='notifications-row__options'>
            <CustomButton2
              text='Accept'
              blue
              onClick={() => resolveFriendRequest(currentUserId, userId, true)}
            />
            <CustomButton2
              text='Decline'
              red
              style={{ marginLeft: '20px' }}
              onClick={() => resolveFriendRequest(currentUserId, userId, false)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationsRow;
