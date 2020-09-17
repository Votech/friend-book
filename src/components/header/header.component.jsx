import React, { useState } from 'react';
import { connect } from 'react-redux';

import HeaderDropdownSettings from '../header-dropdown-settings/header-dropdown.settings.component';

import SearchIcon from '@material-ui/icons/Search';
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

import FacebookLogo from '../../assets/svg/facebook.svg';

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

function Header({ currentUser }) {
  const classes = useStyles();

  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img src={FacebookLogo} alt='Facebook Logo' className='header--logo' />
        <div className='header__input'>
          <SearchIcon />
          <input placeholder='Search Facebook' type='text' />
        </div>
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
          <Avatar src={`${currentUser.profilePhotoUrl}`} />
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
        <IconButton className={classes.iconBackground} onClick={toggle}>
          <ExpandMoreIcon />
        </IconButton>
        {isOpened ? <HeaderDropdownSettings onClick={toggle} /> : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
