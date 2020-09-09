import React from 'react';

import './feed.styles.scss';

import StoryDisplay from '../story-display/story-display.component';
import PostSender from '../post-sender/post-sender.component';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        <StoryDisplay />
        <PostSender />
      </div>
    </div>
  );
};

export default Feed;
