/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param x {number} A numeric expression for the x coordinate.
 * @param y {number} A numeric expression for the y coordinate.
 * @param radians {number} A numeric expression for the number of radians it is rotated.
 */
export function rotatePoint(x, y, radians) {
    return {
        x: Math.cos(radians) * x + Math.sin(radians) * y,
        y: -(Math.sin(radians) * x) + Math.cos(radians) * y,
    };
}
/**
 * Returns the distance of a line segment starting at (`x1`, `y1`)
 * and ending at (`x2`, `y2`)
 * @param x1 {number} x-coordinate for the starting point
 * @param y1 {number} y-coordinate for the starting point
 * @param x2 {number} x-coordinate for the ending point
 * @param y2 {number} y-coordinate for the ending point
 * @function
 */
export const lineDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
};
/**
 * Returns the greatest common factor between `a` and `b`
 * @param a {number} numerical expression
 * @param b {number} numerical expression
 * @function
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
 * @param e {MouseEvent} the event to get the position from
 * @function
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
//# sourceMappingURL=utils.js.map