import { baseObj, canvas, ctx } from './index.js';

const shapes: baseObj[] = [];
let update: boolean = true;

/**
 * Set whether the canvas should update every frame
 * @function
 * @returns {void}
 */
export const setUpdate = (v: boolean): void => { update = v; };

/**
 * Removes all objects from the canvas 
 * @function
 * @returns {void}
 */
export const removeAll = (): void => { shapes.splice(0, shapes.length) };

/**
 * Adds all shapes that are passed to the screen
 * @param args {baseObj[]} any number of shapes to add
 * @function
 * @returns {void}
 */
export const add = (...args: baseObj[]): void => {
  args.forEach(e => {
    if (shapes.indexOf(e) !== -1) {
      remove(e);
    }

    shapes.push(e);

    if (!update) {
      e.draw();
    }
  });
};

/**
 * Removes all shapes that are passed from the screen 
 * @param args {baseObj[]} shapes to remove
 * @function
 * @returns {void}
 */
export const remove = (...args: baseObj[]): void => {
  args.forEach(e => {
    if (shapes.indexOf(e) != -1) {
      shapes.splice(shapes.indexOf(e), 1);
    }
  });
};

/**
 * Returns the shape that is on the top at the point (`x`, `y`)
 * @param x {number} x-coordinate to check
 * @param y {number} y-coordinate to check
 * @function
 * @returns {baseObj | undefined}
 */
export const getElementAt = (x: number, y: number): baseObj | undefined => {
  let elem: baseObj | undefined = undefined;
  shapes.forEach(i => {
    if (i.containsPoint(x, y)) {
      elem = i;
    }
  });
  return elem;
}

/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param x {number} x-coordinate to check
 * @param y {number} y-coordinate to check
 * @function
 * @returns {baseObj[]}
 */
export const getElementsAt = (x: number, y: number): Array<baseObj> => {
  let elems: Array<baseObj> = [];
  shapes.forEach(i => {
    if (i.containsPoint(x, y)) {
      elems.push(i);
    }
  });
  return elems.reverse();
}

const main = () => {
  if (update) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(s => s.draw());
  }
  requestAnimationFrame(main);
};

main();