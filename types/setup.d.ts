/**
 * The canvas everything is drawn to
 */
export declare const canvas: HTMLCanvasElement;
/**
 * The console println logs to
 */
export declare const output: HTMLPreElement;
/**
 * The canvas context
 */
export declare const ctx: CanvasRenderingContext2D;
/**
 * Returns the width of the canvas
 */
export declare const getWidth: () => number;
/**
 * Returns the height of the canvas
 */
export declare const getHeight: () => number;
/**
 * Set the width and height of the canvas
 * @param width the canvas's new width
 * @param height the canvas's new height
 */
export declare const setSize: (width: number, height: number) => void;
/**
 * Set the background color of the canvas
 * @param color the new background color
 */
export declare const setBackgroundColor: (color: string) => void;
/**
 * Show the mouse over the canvas
 * @param cursor (optional) the css cursor to show
 */
export declare const showCursor: (cursor?: string | undefined) => void;
/**
 * Hide the mouse over the canvas
 */
export declare const hideCursor: () => void;
