import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, secondary }) => {
  return (
    <button className={`${secondary ? 'secondary' : null} custom-button`}>
      {children}
    </button>
  );
};

export default CustomButton;
