import React from 'react';

const TimeIndicator = ({ time }) => {
  return (<div className="timeIndicator" style={{
    left: `${time / 10}px`,
  }} />);
}

export default TimeIndicator;
