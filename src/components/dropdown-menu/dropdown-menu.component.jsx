import React from 'react';

import './dropdown-menu.styles.scss';

const DropdownMenu = ({ children }) => {
  return (
    <div className='dropdown-menu'>
      <div className='dropdown-menu-content'>{children}</div>
    </div>
  );
};

export default DropdownMenu;
