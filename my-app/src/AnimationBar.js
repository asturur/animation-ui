import React from 'react';
import SingleBar from './SingleBar';
import TimeIndicator from './TimeIndicator';

const AnimationBar = ({ objects, currentTime }) => {
  return (<div className="timeline">
    {objects.map((object, index) =>
      <SingleBar key={`${object.type}-${index}`} animations={object.animations} />
    )}
    <TimeIndicator time={currentTime} />
  </div>);
}

export default AnimationBar;
