import { baseObj } from './index.js';
/**
 * The rectangle shape
 */
export declare class Rectangle extends baseObj {
    private _width;
    private _height;
    constructor(width: number, height: number);
    constructor(width: number, height: number, x: number, y: number);
    constructor(width: number, height: number, x: number, y: number, color: string);
    constructor(width: number, height: number, x: number, y: number, color: string, rotation: number);
    constructor(width: number, height: number, x: number, y: number, color: string, rotation: number, outline: boolean);
    constructor(width: number, height: number, x: number, y: number, color: string, rotation: number, outline: boolean, outlineColor: string);
    /**
     * The rectangle's width
     * @type {number}
     */
    set width(v: number);
    get width(): number;
    /**
     * Returns the width of the rectangle
   * @returns {number}
     */
    getWidth(): number;
    /**
       * Sets the width of the rectangle
     * @param {number} width the new width
     * @returns {number}
       */
    setWidth(width: number): this;
    /**
   * The rectangle's height
   * @type {number}
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the rectangle
     * @returns {number}
     */
    getHeight(): number;
    /**
     * Sets the height of the rectangle
     * @param {number} height the new height
     * @returns {number}
     */
    setHeight(height: number): this;
    /**
     * Set the width and height of the rectangle
     * @param {number} width the rectangle's new width
     * @param {number} height the rectangle's new height
   * @returns {this}
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
