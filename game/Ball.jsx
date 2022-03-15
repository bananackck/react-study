import React, { memo } from 'react';

const Ball = memo(({ number }) => {
  let background;
  if (number == 1) {
    background = '#FFEDF2';
  } else if (number == 2) {
    background = '#FEF0FF';
  } else if (number == 3) {
    background = '#FFFCD4';
  } else if (number == 4) {
    background = '#EBFFDB';
  } else {
    background = '#DBE7FF';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});

export default Ball;