import { baseObj } from "./index.js";
/**
 * The oval shape
 */
export declare class Oval extends baseObj {
    private _width;
    private _height;
    constructor(width: number, height: number);
    constructor(width: number, height: number, x: number, y: number);
    constructor(width: number, height: number, x: number, y: number, color: string);
    /**
     * The width of the oval
     * @type {number}
     */
    set width(v: number);
    get width(): number;
    /**
     * Set the width of the oval
     * @param {number} width the new width
     * @returns {this}
     */
    setWidth(width: number): this;
    /**
     * The height of the oval
     * @type {number}
     */
    set height(v: number);
    get height(): number;
    /**
     * Set the height of the oval
     * @param {number} height the new height
     * @returns {this}
     */
    setHeight(height: number): this;
    /**
     * Set the width and height of the oval
     * @param {number} width the new width of the oval
     * @param {number} height the new height of the oval
     * @returns {this}
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
//# sourceMappingURL=Oval.d.ts.map