import { baseObj } from "./index.js";
/**
 * The oval shape
 */
export declare class Oval extends baseObj {
    private _width;
    private _height;
    /**
     * @constructor
     * @param width the width of the oval
     * @param height the height of the oval
     */
    constructor(width: number, height: number);
    /**
     * @constructor
     * @param width the width of the oval
     * @param height the height of the oval
     * @param x the x-position
     * @param y the y-position
     */
    constructor(width: number, height: number, x: number, y: number);
    /**
     * @constructor
     * @param width the width of the oval
     * @param height the height of the oval
     * @param x the x-position
     * @param y the y-position
     * @param color the color of the oval
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient);
    /**
     * The width of the oval
     */
    set width(v: number);
    get width(): number;
    /**
     * set the width of the oval
     * @param width the new width
     */
    setWidth(width: number): this;
    /**
     * The height of the oval
     */
    set height(v: number);
    get height(): number;
    /**
     * set the height of the oval
     * @param height the new height
     */
    setHeight(height: number): this;
    /**
     * set the width and height of the oval
     * @param width the new width of the oval
     * @param height the new height of the oval
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
