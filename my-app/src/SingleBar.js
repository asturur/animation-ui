import React from 'react';

const SingleBar = ({ animations }) => {
  return <div className="animationBar">
  {animations.map(animation =>
    <div className="animationContainer">
    <div key={`${animation.property}-${animation.value}`} className="animation" style={{
      width: animation.duration / 10,
      marginLeft: animation.offset / 10,
    }}>
      {animation.property}: {animation.value}
    </div>
    </div>
  )}
  </div>
}

export default SingleBar;
