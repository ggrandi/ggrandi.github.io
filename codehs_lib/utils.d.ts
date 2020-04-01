/**
 * @typedef Point
 * @property {number} x the x-coordinate
 * @property {number} y the y-coordinate
 */
/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param {number} x A numeric expression for the x coordinate.
 * @param {number} y A numeric expression for the y coordinate.
 * @param {number} radians A numeric expression for the number of radians it is rotated.
 * @returns {Point}
 * @function
 */
export declare const rotatePoint: (x: number, y: number, radians: number) => {
    x: number;
    y: number;
};
/**
 * Returns the distance of a line segment starting at (`x1`, `y1`)
 * and ending at (`x2`, `y2`)
 * @param {number} x1 x-coordinate for the starting point
 * @param {number} y1 y-coordinate for the starting point
 * @param {number} x2 x-coordinate for the ending point
 * @param {number} y2 y-coordinate for the ending point
 * @function
 * @returns {number}
 */
export declare const lineDistance: (x1: number, y1: number, x2: number, y2: number) => number;
/**
 * Returns the greatest common factor between `a` and `b`
 * @param {number} a numerical expression
 * @param {number} b numerical expression
 * @function
 * @returns {number}
 */
export declare const gcf: (a: number, b: number) => number;
/**
 * Returns the mouse's position on the canvas
 * @param {MouseEvent} e the event to get the position from
 * @function
 * @returns {Point}
 */
export declare const getPosition: (e: MouseEvent) => {
    x: number;
    y: number;
};
/**
 * Convert a number of degrees to radians
 * @param {number} degrees the degrees to convert
 * @function
 * @returns {number}
 */
export declare const toRadians: (degrees: number) => number;
/**
 * Convert a number of radians to degrees
 * @param {number} radians the radians to convert
 * @function
 * @returns {number}
 */
export declare const toDegrees: (radians: number) => number;
//# sourceMappingURL=utils.d.ts.map