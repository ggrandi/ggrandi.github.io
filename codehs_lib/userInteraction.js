import { canvas } from "./index.js";
/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const mouseClickMethod = (func) => {
    canvas.onclick = func;
};
/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const mouseMoveMethod = (func) => {
    canvas.onmousemove = func;
};
/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const keyDownMethod = (func) => {
    window.onkeydown = func;
};
/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const keyUpMethod = (func) => {
    window.onkeyup = func;
};
//# sourceMappingURL=userInteraction.js.map