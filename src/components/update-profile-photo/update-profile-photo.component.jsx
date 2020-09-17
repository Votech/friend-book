import React from 'react';
import { connect } from 'react-redux';

import {
  toggleUpdateProfilePhoto,
  setProfilePhotoUrl,
} from '../../redux/user/user.actions';

import { auth, addUserData } from '../../firebase/firebase.utils';

import './update-profile-photo.styles.scss';

import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '@material-ui/icons/Image';

const UpdateProfilePhoto = (props) => {
  const {
    toggleUpdateProfilePhoto,
    setProfilePhotoUrl,
    profilePhotoUrl,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    addUserData(auth, profilePhotoUrl);
    toggleUpdateProfilePhoto();
  };

  const handleChange = (event) => {
    setProfilePhotoUrl(event.target.value);
  };

  return (
    <div className='update-profile-photo'>
      <div className='update-profile-photo__container'>
        <div className='update-profile-photo__header'>
          <h2>Update profile photo</h2>
          <button onClick={() => toggleUpdateProfilePhoto()}>
            <CloseIcon />
          </button>
        </div>
        <div className='update-profile-photo__bottom'>
          <form onSubmit={handleSubmit}>
            <input
              className='update-profile-photo__input'
              placeholder={`image URL`}
              onChange={handleChange}
            />
            <button type='submit'>
              <ImageIcon />
              <h4>Update</h4>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profilePhotoUrl: state.user.profilePhotoUrl,
});

const mapDispatchToProps = (dispatch) => ({
  toggleUpdateProfilePhoto: () => dispatch(toggleUpdateProfilePhoto()),
  setProfilePhotoUrl: (url) => dispatch(setProfilePhotoUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfilePhoto);
