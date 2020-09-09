import React from 'react';

import './homepage.styles.scss';

import Sidebar from '../../components/sidebar/sidebar.component';
import Feed from '../../components/feed/feed.component';
import FriendsSidebar from '../../components/friends-sidebar/friends-sidebar.component';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage__sidebar'>
        <Sidebar />
      </div>
      <div className='homepage__feed'>
        <Feed />
      </div>
      <div className='homepage_friendsSidebar'>
        <FriendsSidebar />
      </div>
    </div>
  );
};

export default HomePage;