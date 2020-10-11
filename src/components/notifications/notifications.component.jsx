import React from 'react';
import { connect } from 'react-redux';
import { toggleNotifications } from '../../redux/user-interface/user-interface.actions';

import './notifications.styles.scss';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import NotificationsRow from '../notifications-row/notifications-row.component';
import Scroll from '../scroll/scroll.component';
import OutsideListener from '../outsideListener/outsideListener.component';

const Notifications = ({ pendingFriends, currentUserId, toggleNotifications }) => {
  return (
    <OutsideListener action={toggleNotifications}>
    <DropdownMenu>
      <div>
        <h2>Notifications</h2>
        <Scroll maxHeight='500px'>
          {pendingFriends
            ? pendingFriends.map((friend) => (
                <NotificationsRow
                  key={friend[0]}
                  userId={friend[0]}
                  currentUserId={currentUserId}
                />
              ))
            : null}
        </Scroll>
        {pendingFriends &&
          (pendingFriends.length === 0 ? (
            <p>You dont have any notifications</p>
          ) : null)}
      </div>
    </DropdownMenu>
    </OutsideListener>
  );
};

const mapStateToProps = (state) => ({
  currentUserId: state.user.currentUser.id,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNotifications: () => dispatch(toggleNotifications()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
