import { baseObj } from './index.js';
/**
 * All the shapes that have been added to the screen
 * @type {Array<baseObj>}
 */
export declare const shapes: baseObj[];
/**
 * Set whether the canvas should update every frame
 * @function
 * @returns {void}
 */
export declare const setUpdate: (v: boolean) => void;
/**
 * Removes all objects from the canvas
 * @function
 * @returns {void}
 */
export declare const removeAll: () => void;
/**
 * Adds all shapes that are passed to the screen
 * @param args {baseObj[]} any number of shapes to add
 * @function
 * @returns {void}
 */
export declare const add: (...args: baseObj[]) => void;
/**
 * Removes all shapes that are passed from the screen
 * @param args {baseObj[]} shapes to remove
 * @function
 * @returns {void}
 */
export declare const remove: (...args: baseObj[]) => void;
/**
 * Returns the shape that is on the top at the point (`x`, `y`)
 * @param x {number} x-coordinate to check
 * @param y {number} y-coordinate to check
 * @function
 * @returns {baseObj | undefined}
 */
export declare const getElementAt: (x: number, y: number) => baseObj | undefined;
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param {number} x the x-value to find
 * @param {number} y the y-value to check
 * @function
 * @returns {baseObj[]}
 */
export declare function getElementsAt(x: number, y: number): Array<baseObj>;
/**
 * Returns the all the shapes onscreen
 * @param {boolean} showAll return all shapes onscreen
 * @function
 * @returns {baseObj[]}
 */
export declare function getElementsAt(showAll: true): Array<baseObj>;
//# sourceMappingURL=shapes.d.ts.map