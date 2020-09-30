import React from 'react';

import './notifications.styles.scss';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import NotificationsRow from '../notifications-row/notifications-row.component';
import Scroll from '../scroll/scroll.component';

const Notifications = ({ pendingFriends }) => {
  return (
    <DropdownMenu>
      <div>
        <h2>Notifications</h2>
        <Scroll maxHeight='500px'>
          {pendingFriends
            ? pendingFriends.map((friend) => (
                <NotificationsRow key={friend[0]} userId={friend[0]} />
              ))
            : null}
        </Scroll>
      </div>
    </DropdownMenu>
  );
};

export default Notifications;
