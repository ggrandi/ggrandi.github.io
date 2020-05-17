/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const mouseClickMethod: (func: (e: MouseEvent) => void) => void;
/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const mouseMoveMethod: (func: (e: MouseEvent) => void) => void;
/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const keyDownMethod: (func: (e: KeyboardEvent) => void) => void;
/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const keyUpMethod: (func: (e: KeyboardEvent) => void) => void;
