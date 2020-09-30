import React from 'react';
import { connect } from 'react-redux';

import { toggleHeaderDropdownSettings } from '../../redux/user-interface/user-interface.actions';

import HeaderDropdownSettings from '../header-dropdown-settings/header-dropdown.settings.component';
import SearchFriendBook from '../../components/search-friend-book/search-friend-book.component';

import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

function Header({
  currentUser,
  openHeaderDropdownSetting,
  toggleHeaderDropdownSettings,
}) {
  const classes = useStyles();

  return (
    <div className='header'>
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
        <IconButton className={classes.iconBackground}>
          <NotificationsIcon />
        </IconButton>
        <IconButton
          className={classes.iconBackground}
          onClick={() => toggleHeaderDropdownSettings()}
        >
          <ExpandMoreIcon />
        </IconButton>
        {openHeaderDropdownSetting && <HeaderDropdownSettings />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  openHeaderDropdownSetting: state.userInterface.openHeaderDropdownSettings,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHeaderDropdownSettings: () => dispatch(toggleHeaderDropdownSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
