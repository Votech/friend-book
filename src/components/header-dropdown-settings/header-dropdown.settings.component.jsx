import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import SidebarRow from '../sidebar-row/sidebar-row.component';

import { Avatar } from '@material-ui/core';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import './header-dropdown-settings.styles.scss';

const HeaderDropdownSettingsUser = ({ currentUser }) => {
  const { name, surname } = currentUser;
  return (
    <div className='Header-dropdown-settings-user'>
      <Avatar
        className='dropdown-settings-user-avatar'
        src='https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg'
      />
      <div className='dropdown-settings-user-info'>
        <h3>
          {name} {surname}
        </h3>
        <p>See your profile</p>
      </div>
    </div>
  );
};

const HeaderDropdownSettings = ({ currentUser }) => {
  return (
    <div className='header-dropdown-settings'>
      <DropdownMenu>
        <div>
          <SidebarRow
            CustomComponent={() => (
              <HeaderDropdownSettingsUser currentUser={currentUser} />
            )}
            headerDropdown
          />
          <div className='gray-line' />
          <SidebarRow
            title='Update profile picture'
            Icon={PhotoLibraryIcon}
            headerDropdown
          />
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HeaderDropdownSettings);
