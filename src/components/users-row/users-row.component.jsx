import React from 'react';

import './users-row.styles.scss';

import { Avatar } from '@material-ui/core';
import CustomButton2 from '../custom-button-2/custom-button-2.component';

const UsersRow = ({ fullName, profilePhotoUrl, ...otherProps }) => {
  return (
    <div className={`users__row `} {...otherProps}>
      <Avatar src={profilePhotoUrl} style={{ width: '36px', height: '36px' }} />
      <h4>{fullName}</h4>
      <CustomButton2 text='Add Friend' />
    </div>
  );
};

export default UsersRow;
