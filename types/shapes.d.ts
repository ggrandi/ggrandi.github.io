import { baseObj } from "./index.js";
/**
 * All the shapes that have been added to the screen
 */
export declare const shapes: baseObj[];
/**
 * Set whether the canvas should update every frame
 * @param update whether to redraw each frame;
 */
export declare const setUpdate: (update: boolean) => void;
/**
 * Removes all objects from the canvas
 */
export declare const removeAll: () => void;
/**
 * Adds all shapes that are passed to the screen
 * @param args any number of shapes to add
 */
export declare const add: (...args: baseObj[]) => void;
/**
 * Removes all shapes that are passed from the screen
 * @param args shapes to remove
 */
export declare const remove: (...args: baseObj[]) => void;
/**
 * Returns the shape that is on the top at the point (`x`, `y`)
 * @param x x-coordinate to check
 * @param y y-coordinate to check
 */
export declare const getElementAt: (x: number, y: number) => baseObj | undefined;
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param x the x-value to find
 * @param y the y-value to check
 */
export declare function getElementsAt(x: number, y: number): Array<baseObj>;
/**
 * Returns the all the shapes onscreen
 * @param showAll return all shapes onscreen
 */
export declare function getElementsAt(showAll: true): Array<baseObj>;
