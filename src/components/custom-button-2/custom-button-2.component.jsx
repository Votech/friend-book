import React from 'react';

import './custom-button-2.styles.scss';

const CustomButton2 = ({ children, Icon, text, ...otherProps }) => {
  return (
    <button className={`custom-button-2`} {...otherProps}>
      <div className='custom-button-2__h4'>{text}</div>
    </button>
  );
};

export default CustomButton2;
