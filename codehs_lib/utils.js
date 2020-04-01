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
export const rotatePoint = (x, y, radians) => {
    return {
        x: Math.cos(radians) * x + Math.sin(radians) * y,
        y: -(Math.sin(radians) * x) + Math.cos(radians) * y,
    };
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
export const lineDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};
/**
 * Returns the greatest common factor between `a` and `b`
 * @param {number} a numerical expression
 * @param {number} b numerical expression
 * @function
 * @returns {number}
 */
export const gcf = (a, b) => {
    a = Math.max(Math.abs(a), Math.abs(b));
    b = Math.min(Math.abs(a), Math.abs(b));
    while (true) {
        if (b == 0)
            return a;
        a %= b;
        if (a == 0)
            return b;
        b %= a;
    }
};
/**
 * Returns the mouse's position on the canvas
 * @param {MouseEvent} e the event to get the position from
 * @function
 * @returns {Point}
 */
export const getPosition = (e) => {
    let p = e.target;
    let offsetLeft = 0;
    let offsetTop = 0;
    while (p.offsetParent) {
        offsetLeft += p.offsetLeft;
        offsetTop += p.offsetTop;
        p = p.offsetParent;
    }
    return {
        x: e.pageX - offsetLeft,
        y: e.pageY - offsetTop
    };
};
/**
 * Convert a number of degrees to radians
 * @param {number} degrees the degrees to convert
 * @function
 * @returns {number}
 */
export const toRadians = (degrees) => {
    return degrees * Math.PI / 2;
};
/**
 * Convert a number of radians to degrees
 * @param {number} radians the radians to convert
 * @function
 * @returns {number}
 */
export const toDegrees = (radians) => {
    return radians * 2 / Math.PI;
};
//# sourceMappingURL=utils.js.map