/* eslint-disable */
import { canvas } from "./index.js";
/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const mouseClickMethod = (func) => {
	canvas.onclick = func;
};
/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const mouseMoveMethod = (func) => {
	canvas.onmousemove = func;
};
/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const keyDownMethod = (func) => {
	window.onkeydown = func;
};
/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const keyUpMethod = (func) => {
	window.onkeyup = func;
};
