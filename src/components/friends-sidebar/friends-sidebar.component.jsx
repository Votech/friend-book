import React from 'react';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase.utils';

import './friends-sidebar.styles.scss';

import FriendsRow from '../friends-row/friends-row.component';
import Scroll from '../scroll/scroll.component';

class FriendsSidebar extends React.Component {
  state = {
    friends: null,
  };

  unsubscribeFromOnSnapshot = null;

  componentDidMount() {
    const { currentUserId } = this.props;
    const friendsRef = firestore.doc(`friends/${currentUserId}`);

    this.unsubscribeFromOnSnapshot = friendsRef.onSnapshot((doc) =>
      this.setState({
        friends: Object.entries(doc.data()).filter((user) => user[1] === true),
      })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromOnSnapshot();
  }

  render() {
    const { friends } = this.state;
    return (
      <div className='friends-sidebar'>
        <div className='friends-sidebar__header'>
          <h3>Friends</h3>
        </div>
        <Scroll height='85vh'>
          {friends
            ? friends.map((friend) => (
                <FriendsRow key={friend[0]} userId={friend[0]} />
              ))
            : null}
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserId: state.user.currentUser.id,
});

export default connect(mapStateToProps)(FriendsSidebar);
