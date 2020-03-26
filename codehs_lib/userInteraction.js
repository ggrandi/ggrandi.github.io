import { canvas } from "./index.js";
/**
 * Set the canvas onclick method
 * @function
 */
export const mouseClickMethod = (func) => {
    canvas.onclick = func;
};
/**
 * Set the canvas mousemove method
 * @function
 */
export const mouseMoveMethod = (func) => {
    canvas.onmousemove = func;
};
/**
 * Set the document's keydown method
 * @function
 */
export const keyDownMethod = (func) => {
    window.onkeydown = func;
};
/**
 * Set the document's keyup method
 * @function
 */
export const keyUpMethod = (func) => {
    window.onkeyup = func;
};
//# sourceMappingURL=userInteraction.js.map