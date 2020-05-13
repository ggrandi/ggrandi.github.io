import { canvas } from "./index.js";

/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const mouseClickMethod = (func: (e: MouseEvent) => void): void => {
	canvas.onclick = func;
};

/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const mouseMoveMethod = (func: (e: MouseEvent) => void): void => {
	canvas.onmousemove = func;
};

/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const keyDownMethod = (func: (e: KeyboardEvent) => void): void => {
	window.onkeydown = func;
};

/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export const keyUpMethod = (func: (e: KeyboardEvent) => void): void => {
	window.onkeyup = func;
};
