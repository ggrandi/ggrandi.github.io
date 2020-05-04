/**
 * The canvas everything is drawn to
 * @type {HTMLCanvasElement}
 */
export declare const canvas: HTMLCanvasElement;
/**
 * The console println logs to
 * @type {HTMLPreElement}
 */
export declare const output: HTMLPreElement;
/**
 * The canvas context
 * @type {CanvasRenderingContext2D}
 */
export declare const ctx: CanvasRenderingContext2D;
/**
 * Returns the width of the canvas
 * @function
 * @returns {number}
 */
export declare const getWidth: () => number;
/**
 * Returns the height of the canvas
 * @function
 * @returns {number}
 */
export declare const getHeight: () => number;
/**
 * Set the width and height of the canvas
 * @param width {number} the canvas's new width
 * @param height {number} the canvas's new height
 * @function
 * @returns {void}
 */
export declare const setSize: (width: number, height: number) => void;
/**
 * Set the background color of the canvas
 * @param color {string} the new background color
 * @function
 */
export declare const setBackgroundColor: (color: string) => void;
/**
 * Show the mouse over the canvas
 * @param cursor {string} (optional) the css cursor to show
 * @function
 */
export declare const showCursor: (cursor?: string | undefined) => void;
/**
 * Hide the mouse over the canvas
 * @function
 */
export declare const hideCursor: () => void;
