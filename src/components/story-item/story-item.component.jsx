import React from 'react';

import './story-item.styles.scss';

import { Avatar } from '@material-ui/core';

const StoryItem = ({ backgroundImage, profileSrc, title }) => {
  return (
    <div className='story-item'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className='content'>
        <div className='story-item__avatar'>
          <Avatar src={profileSrc} />
        </div>

        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default StoryItem;
