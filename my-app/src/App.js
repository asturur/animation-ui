import React, { useEffect, useRef, useState } from 'react';
import { fabric } from './fabric';
import { loadEverything, getAllObjectsWithAnimations } from './dataToLoad';
import AnimationBar from './AnimationBar';
import './App.css'

let fabricCanvas;

function App() {
  const canvasRef = useRef();
  const [objects, setAnimations] = useState([{ animations: [], type: '' }]);
  const [currentTime, setCurrentTime] = useState(0);
  const sliderInput = (evt) => {
    var ms = parseInt(evt.target.value);
    // object.getStateAtTime(ms);
    // canvas setObjectsAtTime will use getStateAtTime and set it.
    fabricCanvas.setObjectsAtTime(fabricCanvas.getObjects(), ms);
    fabricCanvas.renderAll();
    fabricCanvas.getObjects().forEach(object => object.setCoords());
    setCurrentTime(ms);
  }
  useEffect(() => {
    fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 1000,
      height: 550,
    });
    loadEverything(fabricCanvas);
    setAnimations(getAllObjectsWithAnimations(fabricCanvas));
  }, []);
  return (
    <div className="App">
      <canvas ref={canvasRef} />
      <AnimationBar objects={objects} currentTime={currentTime} />
      <input onInput={sliderInput} type="range" min="0" max="10000" className="slider" />
    </div>
  );
}

export default App;
