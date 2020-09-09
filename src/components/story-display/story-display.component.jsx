import React from 'react';

import './story-display.styles.scss';

import StoryItem from '../story-item/story-item.component';

const StoryDisplay = () => {
  return (
    <div className='story-display'>
      <StoryItem
        backgroundImage='https://images.unsplash.com/photo-1599351960008-910c15ea735f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
        profileSrc='https://images.unsplash.com/profile-1599259336491-13828450a74fimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
        title='Ryan Clark'
      />
      <StoryItem
        backgroundImage='https://images.unsplash.com/photo-1588208265940-80a7c7d1619d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
        profileSrc='https://images.unsplash.com/profile-1579445175616-466c98578e2bimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
        title='Adam Hamel'
      />
      <StoryItem
        backgroundImage='https://images.unsplash.com/photo-1599070306640-28f961d4f89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        profileSrc='https://images.unsplash.com/profile-1599281858503-d31f6b127728image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
        title='
Erick Reyes'
      />
      <StoryItem
        backgroundImage='https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        profileSrc='https://images.unsplash.com/profile-1558659324044-e716bda070dc?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff'
        title='Karina lago'
      />
      <StoryItem
        backgroundImage='https://images.unsplash.com/photo-1496360283198-431ee523ebda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        profileSrc='https://images.unsplash.com/profile-1571267664946-2f046f74b377image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
        title='Brooke Cagle'
      />
    </div>
  );
};

export default StoryDisplay;
