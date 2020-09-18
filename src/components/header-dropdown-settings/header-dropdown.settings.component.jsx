import React from 'react';
import { connect } from 'react-redux';

import { toggleUpdateProfilePhoto } from '../../redux/user/user.actions';

import { auth } from '../../firebase/firebase.utils';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import SidebarRow from '../sidebar-row/sidebar-row.component';

import { Avatar } from '@material-ui/core';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import './header-dropdown-settings.styles.scss';

const HeaderDropdownSettingsUser = ({ currentUser, ...otherProps }) => {
  const { name, surname, profilePhotoUrl } = currentUser;
  return (
    <div className='Header-dropdown-settings-user' {...otherProps}>
      <Avatar className='dropdown-settings-user-avatar' src={profilePhotoUrl} />
      <div className='dropdown-settings-user-info'>
        <h3>
          {name} {surname}
        </h3>
        <p>See your profile</p>
      </div>
    </div>
  );
};

const HeaderDropdownSettings = ({ currentUser, toggleUpdateProfilePhoto }) => {
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
            onClick={() => toggleUpdateProfilePhoto()}
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

const mapDispatchToProps = (dispatch) => ({
  toggleUpdateProfilePhoto: () => dispatch(toggleUpdateProfilePhoto()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderDropdownSettings);
