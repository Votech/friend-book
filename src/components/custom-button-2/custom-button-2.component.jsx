import React from 'react';

import './custom-button-2.styles.scss';

const CustomButton2 = ({
  children,
  Icon,
  text,
  blue,
  red,
  disable,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button-2 ${blue && 'custom-button-2--blue'} ${
        red && 'custom-button-2--red'
      } ${disable && 'custom-button-2--disable'}`}
      {...otherProps}
    >
      <div className='custom-button-2__h4'>{text}</div>
    </button>
  );
};

export default CustomButton2;
