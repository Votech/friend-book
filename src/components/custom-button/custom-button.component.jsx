import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, secondary, noMargin, ...otherProps }) => {
  return (
    <button
      className={`${secondary ? 'secondary' : null} custom-button ${
        noMargin && 'no-margin'
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
