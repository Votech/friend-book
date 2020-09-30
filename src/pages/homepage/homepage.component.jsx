import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import './homepage.styles.scss';

import Sidebar from '../../components/sidebar/sidebar.component';
import Feed from '../../components/feed/feed.component';
import FriendsSidebar from '../../components/friends-sidebar/friends-sidebar.component';
import UpdateProfilePhoto from '../../components/update-profile-photo/update-profile-photo.component';

const HomePage = ({ openUpdateProfilePhoto }) => {
  return (
    <div className='homepage'>
      {openUpdateProfilePhoto && <UpdateProfilePhoto />}
      <MediaQuery query='(min-width: 1156px)'>
        <div className='homepage__sidebar'>
          <Sidebar />
        </div>
      </MediaQuery>

      <div className='homepage__feed'>
        <Feed />
      </div>
      <MediaQuery query='(min-width: 900px)'>
        <div className='homepage_friendsSidebar'>
          <FriendsSidebar />
        </div>
      </MediaQuery>
    </div>
  );
};

const mapStateToProps = (state) => ({
  openUpdateProfilePhoto: state.userInterface.openUpdateProfilePhoto,
});

export default connect(mapStateToProps)(HomePage);
