import React from 'react';

import './post-sender.styles.scss';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { Avatar } from '@material-ui/core';

const PostSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='post-sender'>
      <div className='post-sender__header'>
        <Avatar />
        <form>
          <input
            className='post-sender__input'
            placeholder={`What's on your mind?`}
          />
          <input placeholder='image URL (Optional)' />
          <button onClick={handleSubmit} type='submit'>
            Hidden submit
          </button>
        </form>
      </div>

      <div className='post-sender__options'>
        <div className='post-sender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h4>Live Video</h4>
        </div>
        <div className='post-sender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h4>Photo/Video</h4>
        </div>
        <div className='post-sender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default PostSender;
