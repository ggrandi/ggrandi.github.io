import { baseObj } from './index.js';
/**
 * The Array that stores all of the shapes added to the screen
 * (Has to be imported from 'src/debug.js')*/
export declare const shapes: baseObj[];
/**
 * Set whether the canvas should update every frame
 * @function
 */
export declare const setUpdate: (v: boolean) => void;
/**
 * Removes all objects from the canvas
 * @function
 */
export declare const removeAll: () => void;
/**
 * Adds all shapes that are passed to the screen
 * @param args {baseObj[]} any number of shapes to add
 * @function
 */
export declare const add: (...args: baseObj[]) => void;
/**
 * Removes all shapes that are passed from the screen
 * @param args {baseObj[]} shapes to remove
 * @function
 */
export declare const remove: (...args: baseObj[]) => void;
/**
 * Returns the shape that is on the top at the point (`x`, `y`)
 * @param x {number} x-coordinate to check
 * @param y {number} y-coordinate to check
 * @function
 */
export declare const getElementAt: (x: number, y: number) => baseObj | undefined;
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param x {number} x-coordinate to check
 * @param y {number} y-coordinate to check
 * @function
 */
export declare const getElementsAt: (x: number, y: number) => baseObj[];
//# sourceMappingURL=shapes.d.ts.map