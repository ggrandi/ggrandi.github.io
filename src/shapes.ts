import { baseObj, canvas, ctx } from './index.js';

/**
 * All the shapes that have been added to the screen
 * @type {Array<baseObj>}
 */
export const shapes: baseObj[] = [];
let up: boolean = true;

/**
 * Set whether the canvas should update every frame
 * @param {boolean} update whether to redraw each frame;
 * @function
 * @returns {void}
 */
export const setUpdate = (update: boolean): void => { up = update; };

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
  setTimeout(() => {
    args.forEach(e => {
      if (shapes.indexOf(e) !== -1) {
        remove(e);
      }

      shapes.push(e);

      if (!up) {
        e.draw();
      }
    });
  }, 1);
};

/**
 * Removes all shapes that are passed from the screen 
 * @param args {baseObj[]} shapes to remove
 * @function
 * @returns {void}
 */
export const remove = (...args: baseObj[]): void => {
  setTimeout(() => {
    args.forEach(e => {
      if (shapes.indexOf(e) != -1) {
        shapes.splice(shapes.indexOf(e), 1);
      }
    });
  }, 1);
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
 * @param {number} x the x-value to find
 * @param {number} y the y-value to check
 * @function
 * @returns {baseObj[]}
 */
export function getElementsAt(x: number, y: number): Array<baseObj>;
/**
 * Returns the all the shapes onscreen
 * @param {boolean} showAll return all shapes onscreen
 * @function
 * @returns {baseObj[]}
 */
export function getElementsAt(showAll: true): Array<baseObj>;
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param {number} x the x-value to find, if set to true it returns all the shapes onscreen
 * @param {number} y the y-value to check
 * @function
 * @returns {baseObj[]}
 */
export function getElementsAt(x: number | true, y?: number): Array<baseObj> {
  if (x === true) {
    return shapes;
  }

  let elems: Array<baseObj> = [];
  shapes.forEach(i => {
    if (i.containsPoint(x as number, y as number)) {
      elems.push(i);
    }
  });
  return elems.reverse();
}

const main = () => {
  if (up) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(s => s.draw());
  }
  requestAnimationFrame(main);
};

main();