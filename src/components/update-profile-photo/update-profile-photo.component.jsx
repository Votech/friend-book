import React from 'react';

import './update-profile-photo.styles.scss';

import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '@material-ui/icons/Image';

const UpdateProfilePhoto = () => {
  return (
    <div className='update-profile-photo'>
      <div className='update-profile-photo__container'>
        <div className='update-profile-photo__header'>
          <h2>Update profile photo</h2>
          <button>
            <CloseIcon />
          </button>
        </div>
        <div className='update-profile-photo__bottom'>
          <form>
            <input
              className='update-profile-photo__input'
              placeholder={`image URL`}
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

export default UpdateProfilePhoto;
