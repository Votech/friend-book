import React from 'react';

const Scroll = (props) => {
  const { height, children } = props;
  return (
    <div style={{ overflowY: 'scroll', height: `${height}` }}>{children}</div>
  );
};

export default Scroll;
