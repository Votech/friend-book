import React from 'react';

import './sidebar-row.styles.scss';

import { Avatar } from '@material-ui/core';

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className='sidebar__row'>
      {src ? (
        <Avatar src={src} style={{ width: '32px', height: '32px' }} />
      ) : null}
      {Icon ? <Icon className='icon' /> : null}

      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
