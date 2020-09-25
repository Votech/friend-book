import React, { useState } from 'react';

import './photo-uploader.styles.scss';

import LanguageIcon from '@material-ui/icons/Language';
import PublishIcon from '@material-ui/icons/Publish';

const PhotoUploader = ({ handleChange, photoUrl, handleFileChange }) => {
  const [isUploadHidden, setUploadHidden] = useState(false);
  const [isUrlHidden, setUrlHidden] = useState(false);

  const toggleUrlInput = () => {
    setUrlHidden((urlHidden) => !urlHidden);
    setUploadHidden(false);
  };

  const toggleUploadInput = () => {
    setUploadHidden((uploadHidden) => !uploadHidden);
    setUrlHidden(false);
  };

  return (
    <div className='photo-uploader'>
      <div className='photo-uploader__option'>
        <div
          className='photo-uploader__option__title'
          onClick={() => toggleUploadInput()}
        >
          <PublishIcon style={{ color: 'blue' }} /> <h2>Upload</h2>
        </div>
        {isUploadHidden && (
          <div className='input-file__container'>
            <input
              className='photo-uploader__input-file'
              type='file'
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>
      <div className='photo-uploader__option'>
        <div
          className='photo-uploader__option__title'
          onClick={() => toggleUrlInput()}
        >
          <LanguageIcon style={{ color: 'gray' }} /> <h2>URL</h2>
        </div>
        {isUrlHidden && (
          <input
            className='photo-uploader__input-url'
            placeholder='image URL'
            name='photoUrl'
            value={photoUrl}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoUploader;
