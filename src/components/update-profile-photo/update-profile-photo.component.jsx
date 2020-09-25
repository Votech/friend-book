import React from 'react';
import { connect } from 'react-redux';

import { setProfilePhotoUrl } from '../../redux/user/user.actions';
import {
  toggleUpdateProfilePhoto,
  toggleHeaderDropdownSettings,
} from '../../redux/user-interface/user-interface.actions';

import { auth, addUserData, storage } from '../../firebase/firebase.utils';

import './update-profile-photo.styles.scss';

import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '@material-ui/icons/Image';
import LanguageIcon from '@material-ui/icons/Language';
import PublishIcon from '@material-ui/icons/Publish';

const UpdateProfilePhoto = (props) => {
  const {
    toggleUpdateProfilePhoto,
    toggleHeaderDropdownSettings,
    setProfilePhotoUrl,
    profilePhotoUrl,
    currentUser,
  } = props;

  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();

    addUserData(auth, profilePhotoUrl);
    toggleUpdateProfilePhoto();
    toggleHeaderDropdownSettings();
  };

  const handleChange = (e) => {
    setProfilePhotoUrl(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();

    if (file) {
      const fileRef = storageRef.child(`${currentUser.id}/${file.name}`);

      fileRef
        .put(file)
        .then(() =>
          fileRef
            .getDownloadURL()
            .then((fileUrl) => setProfilePhotoUrl(fileUrl))
        );
    }
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
            <div className='option-title'>
              <PublishIcon style={{ color: 'gray' }} /> <h2>Upload</h2>
            </div>
            <input
              className='update-profile-photo__input-file'
              type='file'
              onChange={handleFileChange}
            />
            <div className='option-title option-title-url'>
              <LanguageIcon style={{ color: 'gray' }} /> <h2>Url</h2>
            </div>
            <input
              className='update-profile-photo__input'
              placeholder={`image URL`}
              onChange={handleChange}
            />
            <div className='update-profile-photo__gray-line' />
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
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleUpdateProfilePhoto: () => dispatch(toggleUpdateProfilePhoto()),
  toggleHeaderDropdownSettings: () => dispatch(toggleHeaderDropdownSettings()),
  setProfilePhotoUrl: (url) => dispatch(setProfilePhotoUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfilePhoto);
