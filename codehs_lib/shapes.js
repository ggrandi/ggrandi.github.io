import { canvas, ctx } from './index.js';
/**
 * The Array that stores all of the shapes added to the screen
 * (Has to be imported from 'src/debug.js')*/
export const shapes = [];
let update = true;
/**
 * Set whether the canvas should update every frame
 * @function
 */
export const setUpdate = (v) => { update = v; };
/**
 * Removes all objects from the canvas
 * @function
 */
export const removeAll = () => { shapes.splice(0, shapes.length); };
/**
 * Adds all shapes that are passed to the screen
 * @param args {baseObj[]} any number of shapes to add
 * @function
 */
export const add = (...args) => {
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
 */
export const remove = (...args) => {
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
 */
export const getElementAt = (x, y) => {
    let elem = undefined;
    shapes.forEach(i => {
        if (i.containsPoint(x, y)) {
            elem = i;
        }
    });
    return elem;
};
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param x {number} x-coordinate to check
 * @param y {number} y-coordinate to check
 * @function
 */
export const getElementsAt = (x, y) => {
    let elems = [];
    shapes.forEach(i => {
        if (i.containsPoint(x, y)) {
            elems.push(i);
        }
    });
    return elems.reverse();
};
const main = () => {
    if (update) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shapes.forEach(s => s.draw());
    }
    ;
    requestAnimationFrame(main);
};
main();
//# sourceMappingURL=shapes.js.map