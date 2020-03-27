/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param x {number} A numeric expression for the x coordinate.
 * @param y {number} A numeric expression for the y coordinate.
 * @param radians {number} A numeric expression for the number of radians it is rotated.
 */
export declare function rotatePoint(x: number, y: number, radians: number): {
    x: number;
    y: number;
};
/**
 * Returns the distance of a line segment starting at (`x1`, `y1`)
 * and ending at (`x2`, `y2`)
 * @param x1 {number} x-coordinate for the starting point
 * @param y1 {number} y-coordinate for the starting point
 * @param x2 {number} x-coordinate for the ending point
 * @param y2 {number} y-coordinate for the ending point
 * @function
 */
export declare const lineDistance: (x1: number, y1: number, x2: number, y2: number) => number;
/**
 * Returns the greatest common factor between `a` and `b`
 * @param a {number} numerical expression
 * @param b {number} numerical expression
 * @function
 */
export declare const gcf: (a: number, b: number) => number;
/**
 * Returns the mouse's position on the canvas
 * @param e {MouseEvent} the event to get the position from
 * @function
 */
export declare const getPosition: (e: MouseEvent) => {
    x: number;
    y: number;
};
//# sourceMappingURL=utils.d.ts.map