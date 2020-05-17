import { baseObj } from "./index.js";
/**
 * The rectangle shape
 */
export declare class Rectangle extends baseObj {
    private _width;
    private _height;
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     */
    constructor(width: number, height: number);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     */
    constructor(width: number, height: number, x: number, y: number);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     * @param rotation the rectangle's rotation in radians
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient, rotation: number);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     * @param rotation the rectangle's rotation in radians
     * @param outline whether to outline the rectangle
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient, rotation: number, outline: boolean);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     * @param rotation the rectangle's rotation in radians
     * @param outline whether to outline the rectangle
     * @param outlineColor the outline's color
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient, rotation: number, outline: boolean, outlineColor: string);
    /**
     * The rectangle's width
     */
    set width(v: number);
    get width(): number;
    /**
     * Returns the width of the rectangle
     */
    getWidth(): number;
    /**
     * sets the width of the rectangle
     * @param width the new width
     */
    setWidth(width: number): this;
    /**
     * The rectangle's height
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the rectangle
     */
    getHeight(): number;
    /**
     * sets the height of the rectangle
     * @param height the new height
     */
    setHeight(height: number): this;
    /**
     * set the width and height of the rectangle
     * @param width the rectangle's new width
     * @param height the rectangle's new height
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
