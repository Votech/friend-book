import React from 'react';
import { connect } from 'react-redux';

import './sidebar.styles.scss';

import SidebarRow from '../sidebar-row/sidebar-row.component';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';

const Sidebar = ({ currentUser }) => {
  const { name, surname, profilePhotoUrl } = currentUser;
  return (
    <div className='sidebar'>
      <SidebarRow src={profilePhotoUrl} title={`${name} ${surname}`} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={GroupWorkIcon} title='Groups' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={OndemandVideoRoundedIcon} title='Movies' />
      <SidebarRow Icon={TodayRoundedIcon} title='Events' />
      <SidebarRow Icon={RestoreRoundedIcon} title='Memories' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Sidebar);
