import React from 'react';

import './sidebar-row.styles.scss';

import { Avatar } from '@material-ui/core';

const SidebarRow = ({
  src,
  Icon,
  title,
  CustomComponent,
  headerDropdown,
  ...otherProps
}) => {
  return (
    <div
      className={`sidebar__row ${headerDropdown && 'header--dropdown'}`}
      {...otherProps}
    >
      {src && <Avatar src={src} style={{ width: '36px', height: '36px' }} />}
      {Icon && (
        <Icon
          className={`icon ${headerDropdown && 'header__dropdown--icon'}`}
        />
      )}
      {CustomComponent && <CustomComponent />}

      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
