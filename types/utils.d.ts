/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param x A numeric expression for the x coordinate.
 * @param y A numeric expression for the y coordinate.
 * @param radians A numeric expression for the number of radians it is rotated.
 */
export declare const rotatePoint: (x: number, y: number, radians: number) => {
    x: number;
    y: number;
};
/**
 * Returns the distance of a line segment starting at (`x1`, `y1`)
 * and ending at (`x2`, `y2`)
 * @param x1 x-coordinate for the starting point
 * @param y1 y-coordinate for the starting point
 * @param x2 x-coordinate for the ending point
 * @param y2 y-coordinate for the ending point
 */
export declare const lineDistance: (x1: number, y1: number, x2: number, y2: number) => number;
/**
 * Returns the greatest common factor between `a` and `b`
 * @param a numerical expression
 * @param b numerical expression
 */
export declare const gcf: (a: number, b: number) => number;
/**
 * Returns the mouse's position on the canvas
 * @param e the event to get the position from
 */
export declare const getPosition: (e: MouseEvent) => {
    x: number;
    y: number;
};
/**
 * Convert a number of degrees to radians
 * @param degrees the degrees to convert
 */
export declare const toRadians: (degrees: number) => number;
/**
 * Convert a number of radians to degrees
 * @param radians the radians to convert
 */
export declare const toDegrees: (radians: number) => number;
