import React from 'react';
import { connect } from 'react-redux';

import './homepage.styles.scss';

import Sidebar from '../../components/sidebar/sidebar.component';
import Feed from '../../components/feed/feed.component';
import FriendsSidebar from '../../components/friends-sidebar/friends-sidebar.component';
import UpdateProfilePhoto from '../../components/update-profile-photo/update-profile-photo.component';

const HomePage = ({ openUpdateProfilePhoto }) => {
  return (
    <div className='homepage'>
      <div className='homepage__sidebar'>
        <Sidebar />
      </div>
      <div className='homepage__feed'>
        {openUpdateProfilePhoto && <UpdateProfilePhoto />}
        <Feed />
      </div>
      <div className='homepage_friendsSidebar'>
        <FriendsSidebar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  openUpdateProfilePhoto: state.userInterface.openUpdateProfilePhoto,
});

export default connect(mapStateToProps)(HomePage);
