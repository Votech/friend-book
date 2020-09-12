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
      className={`sidebar__row ${headerDropdown ? 'header--dropdown' : null}`}
      {...otherProps}
    >
      {src ? (
        <Avatar src={src} style={{ width: '36px', height: '36px' }} />
      ) : null}
      {Icon ? (
        <Icon
          className={`icon ${headerDropdown ? 'header__dropdown--icon' : null}`}
        />
      ) : null}
      {CustomComponent ? <CustomComponent /> : null}

      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
