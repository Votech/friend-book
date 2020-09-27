import React from 'react';
const Emoji = (props) => (
  <div className={props.className}>
    <span
      role='img'
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
      style={{ position: 'relative', left: '1px' }}
    >
      {props.symbol}
    </span>
  </div>
);
export default Emoji;
