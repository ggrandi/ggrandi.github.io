import { canvas } from "./index.js";

/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const mouseClickMethod = (func: (e: MouseEvent) => void): void => {
	canvas.addEventListener("click", func);
};

/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const mouseMoveMethod = (func: (e: MouseEvent) => void): void => {
	canvas.addEventListener("mousemove", func);
};

/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const keyDownMethod = (func: (e: KeyboardEvent) => void): void => {
	window.addEventListener("keydown", func);
};

/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @deprecated
 */
export const keyUpMethod = (func: (e: KeyboardEvent) => void): void => {
	window.addEventListener("keyup", func);
};
