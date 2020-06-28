import { fabric } from './fabric';

const loadEverything = (canvas) => {
  var circle = new fabric.Circle({ radius: 50, fill: 'red', stroke: 'black', left: 350 });
  var rect = new fabric.Rect({ width: 100, height: 80, top: 60, fill: 'yellow', stroke: 'blue', left: 120, originX: 'center', originY: 'center' });
  var triangle = new fabric.Triangle({ width: 100, height: 120, top: 340, fill: 'green', stroke: 'yellow', left: 600, opacity: 0 });

  circle.animations = [{ property: 'left', value: 650, offset: 1000, duration: 4000, easing: 'easeOutCubic' }, { property: 'left', value: 60, offset: 6000, duration: 4000, easing: 'easeOutCubic' }];
  rect.animations = [{ property: 'top', value: 450, offset: 0, duration: 6000, easing: 'easeInQuad' }, { property: 'angle', value: 90, offset: 1000, duration: 3000, easing: 'easeInQuad' }, { property: 'strokeWidth', value: 10, offset: 1000, duration: 3000, easing: 'easeInQuad' }];
  triangle.animations = [{ property: 'opacity', value: 1, offset: 6000, duration: 4000, easing: 'easeInQuad' }];

  circle.saveState({ propertySet: 'animatableProperties' });
  rect.saveState({ propertySet: 'animatableProperties' });
  triangle.saveState({ propertySet: 'animatableProperties' });

  canvas.add(circle);
  canvas.add(rect);
  canvas.add(triangle);
}

const getAllObjectsWithAnimations = (canvas) => {
  const arrayOfAnimations = canvas.getObjects().filter(
    object => object.animations && object.animations.length > 0
  );
  return arrayOfAnimations;
}

export { loadEverything, getAllObjectsWithAnimations };
