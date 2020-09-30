import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase.utils';

import {
  toggleHeaderDropdownSettings,
  toggleNotifications,
} from '../../redux/user-interface/user-interface.actions';

import HeaderDropdownSettings from '../header-dropdown-settings/header-dropdown.settings.component';
import SearchFriendBook from '../../components/search-friend-book/search-friend-book.component';
import Notifications from '../../components/notifications/notifications.component';

import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Badge from '@material-ui/core/Badge';
import { Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './header.styles.scss';

const useStyles = makeStyles((theme) => ({
  iconBackground: {
    '&.MuiIconButton-root': {
      backgroundColor: '#E4E6EB',
      height: '40px',
      width: '40px',
      margin: '0 4px',
      padding: '0 5px ',
    },
    '&:hover, &.Mui-focusVisible': { backgroundColor: '#d4d4d4' },
  },
}));

const Header = ({
  currentUser,
  openHeaderDropdownSettings,
  toggleHeaderDropdownSettings,
  openNotifications,
  toggleNotifications,
}) => {
  const classes = useStyles();

  const [pendingFriends, setPendingFriends] = useState(null);
  const [notificationInvisible, setNotificationInvisible] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const userFriendsRef = firestore.doc(`friends/${currentUser.id}`);

    const unsubscribe = userFriendsRef.onSnapshot((doc) => {
      setPendingFriends(
        Object.entries(doc.data()).filter((friend) => friend[1] === null)
      );
    });

    return () => unsubscribe();
  }, [currentUser.id]);

  useEffect(() => {
    if (pendingFriends) {
      if (pendingFriends.length > 0) {
        setNotificationInvisible(false);
        setNotificationCount(pendingFriends.length);
      } else {
        setNotificationInvisible(true);
        setNotificationCount(0);
      }
    }
  }, [pendingFriends]);

  const handleDropdowns = (action) => {
    if (action === 'openNotification') {
      openHeaderDropdownSettings && toggleHeaderDropdownSettings();
    }
    if (action === 'openHeaderDropdownSetting') {
      openNotifications && toggleNotifications();
    }
  };

  return (
    <div className='header'>
      {console.log(pendingFriends)}
      {console.log(pendingFriends && pendingFriends.length)}
      <div className='header__left'>
        <SearchFriendBook />
      </div>

      <div className='header__middle'>
        <div className='header__options'>
          <div className='header__option--active'>
            <HomeIcon fontSize='large' />
          </div>
          <div className='header__option'>
            <OndemandVideoIcon fontSize='large' />
          </div>
          <div className='header__option'>
            <StorefrontIcon fontSize='large' />
          </div>
          <div className='header__option'>
            <SupervisedUserCircleIcon fontSize='large' />
          </div>
          <div className='header__option'>
            <VideogameAssetIcon fontSize='large' />
          </div>
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={currentUser.profilePhotoUrl} />
          <h4>{currentUser.name}</h4>
        </div>
        <IconButton className={classes.iconBackground}>
          <AddIcon />
        </IconButton>
        <IconButton className={classes.iconBackground}>
          <ChatIcon />
        </IconButton>

        <IconButton
          className={classes.iconBackground}
          onClick={() => {
            handleDropdowns('openNotification');
            toggleNotifications();
          }}
        >
          <Badge
            color='secondary'
            invisible={notificationInvisible}
            badgeContent={notificationCount}
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton
          className={classes.iconBackground}
          onClick={() => {
            handleDropdowns('openHeaderDropdownSetting');
            toggleHeaderDropdownSettings();
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
        {openHeaderDropdownSettings && <HeaderDropdownSettings />}
        {openNotifications && <Notifications pendingFriends={pendingFriends} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  openHeaderDropdownSettings: state.userInterface.openHeaderDropdownSettings,
  openNotifications: state.userInterface.openNotifications,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHeaderDropdownSettings: () => dispatch(toggleHeaderDropdownSettings()),
  toggleNotifications: () => dispatch(toggleNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
