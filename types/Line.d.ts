import { baseObj } from "./index.js";
/**
 * The Line shape
 */
export declare class Line extends baseObj {
    private _x1;
    private _y1;
    private _x2;
    private _y2;
    private _width;
    /**
     * @constructor
     * @param x1 x-coordinate for the starting point
     * @param y1 y-coordinate for the starting point
     * @param x2 x-coordinate for the ending point
     * @param y2 y-coordinate for the ending point
     */
    constructor(x1: number, y1: number, x2: number, y2: number);
    /**
     * @constructor
     * @param x1 x-coordinate for the starting point
     * @param y1 y-coordinate for the starting point
     * @param x2 x-coordinate for the ending point
     * @param y2 y-coordinate for the ending point
     * @param width the width of the line
     */
    constructor(x1: number, y1: number, x2: number, y2: number, width: number);
    /**
     * @constructor
     * @param x1 x-coordinate for the starting point
     * @param y1 y-coordinate for the starting point
     * @param x2 x-coordinate for the ending point
     * @param y2 y-coordinate for the ending point
     * @param width the width of the line
     * @param color the color of the line
     */
    constructor(x1: number, y1: number, x2: number, y2: number, width: number, color: string | CanvasGradient);
    toString(): string;
    /**
     * set the width of the line
     * @param w the new width
     */
    setLineWidth(w: number): this;
    /**
     * X-coordinate for the starting point
     */
    set x1(v: number);
    get x1(): number;
    /**
     * X-coordinate for the ending point
     */
    set x2(v: number);
    get x2(): number;
    /**
     * Y-coordinate for the starting point
     */
    set y1(v: number);
    get y1(): number;
    /**
     * Y-coordinate for the ending point
     */
    set y2(v: number);
    get y2(): number;
    /**
     * set the starting point
     * @param x the x-coordinate for the starting point
     * @param y the y-coordinate for the starting point
     */
    setStartpoint(x: number, y: number): this;
    /**
     * set the ending point
     * @param x the x-coordinate for the ending point
     * @param y the y-coordinate for the ending point
     */
    setEndpoint(x: number, y: number): this;
    /**
     * sets the Line's to the start position (`x1`, `y1`)
     * @param x1 new x-coordinate of the shape
     * @param y1 new y-coordinate of the shape
     */
    setPosition(x1: number, y1: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
