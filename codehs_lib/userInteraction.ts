import { canvas } from "./index.js";

/**
 * Set the canvas onclick method 
 * @function
 */
export const mouseClickMethod = (func: (e: MouseEvent) => void): void => {
  canvas.onclick = func;
};

/**
 * Set the canvas mousemove method 
 * @function
 */
export const mouseMoveMethod = (func: (e: MouseEvent) => void): void => {
  canvas.onmousemove = func;
};

/**
 * Set the document's keydown method 
 * @function
 */
export const keyDownMethod = (func: (e: KeyboardEvent) => void): void => {
  window.onkeydown = func;
}

/**
 * Set the document's keyup method 
 * @function
 */
export const keyUpMethod = (func: (e: KeyboardEvent) => void): void => {
  window.onkeyup = func;
}