import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, secondary, ...otherProps }) => {
  return (
    <button
      className={`${secondary ? 'secondary' : null} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
