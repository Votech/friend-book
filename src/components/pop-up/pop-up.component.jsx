import React from 'react';

import './pop-up.styles.scss';

import { RemoveScroll } from 'react-remove-scroll';

const PopUp = ({ children }) => (
  <RemoveScroll className='scroll'>
    <div className={`pop-up ${RemoveScroll.classNames.zeroRight}`}>
      <div className='pop-up__container'>{children}</div>
    </div>
  </RemoveScroll>
);

export default PopUp;
