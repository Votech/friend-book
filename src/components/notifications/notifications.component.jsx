import React from 'react';
import { connect } from 'react-redux';

import './notifications.styles.scss';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import NotificationsRow from '../notifications-row/notifications-row.component';
import Scroll from '../scroll/scroll.component';

const Notifications = ({ pendingFriends, currentUserId }) => {
  return (
    <DropdownMenu>
      <div>
        <h2>Notifications</h2>
        <Scroll maxHeight='500px'>
          {pendingFriends ? (
            pendingFriends.map((friend) => (
              <NotificationsRow
                key={friend[0]}
                userId={friend[0]}
                currentUserId={currentUserId}
              />
            ))
          ) : pendingFriends.length === 0 ? (
            <h2>Hello!</h2>
          ) : null}
        </Scroll>
        {pendingFriends &&
          (pendingFriends.length === 0 ? (
            <p>You dont have any notifications</p>
          ) : null)}
      </div>
    </DropdownMenu>
  );
};

const mapStateToProps = (state) => ({
  currentUserId: state.user.currentUser.id,
});

export default connect(mapStateToProps)(Notifications);
