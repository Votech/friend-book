import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import SidebarRow from '../sidebar-row/sidebar-row.component';

import { Avatar } from '@material-ui/core';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import './header-dropdown-settings.styles.scss';

const HeaderDropdownSettingsUser = () => {
  return (
    <div className='Header-dropdown-settings-user'>
      <Avatar
        className='dropdown-settings-user-avatar'
        src='https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg'
      />
      <div className='dropdown-settings-user-info'>
        <h3>Wojciech Mietliński</h3>
        <p>See your profile</p>
      </div>
    </div>
  );
};

const HeaderDropdownSettings = ({ ...props }) => {
  return (
    <div className='header-dropdown-settings' {...props}>
      <DropdownMenu>
        <div>
          <SidebarRow
            CustomComponent={HeaderDropdownSettingsUser}
            headerDropdown
          />
          <div className='gray-line' />
          <SidebarRow
            title='Log out'
            onClick={() => auth.signOut()}
            Icon={MeetingRoomIcon}
            headerDropdown
          />
        </div>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropdownSettings;
