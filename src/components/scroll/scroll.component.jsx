import React from 'react';

const Scroll = (props) => {
  const { height, maxHeight, children } = props;
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: `${height}`,
        maxHeight: `${maxHeight}`,
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
