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
     */
    getWidth(): number;
    /**
     * The rectangle's height
     * @type {number}
     */
    set height(v: number);
    get height(): number;
    /**
     * Set the width and height of the rectangle
     * @param width {number} the rectangle's new width
     * @param height {number} the rectangle's new height
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
//# sourceMappingURL=Rectangle.d.ts.map