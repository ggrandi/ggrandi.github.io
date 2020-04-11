import { baseObj } from './index.js';
/**
 * The Line shape
 */
export declare class Line extends baseObj {
    private _x1;
    private _y1;
    private _x2;
    private _y2;
    private _width;
    constructor(x1: number, y1: number, x2: number, y2: number);
    constructor(x1: number, y1: number, x2: number, y2: number, width: number);
    constructor(x1: number, y1: number, x2: number, y2: number, width: number, color: string);
    toString(): string;
    /**
     * Set the width of the line
     * @param {number} w the new width
   * @returns {this}
     */
    setLineWidth(w: number): this;
    /**
     * X-coordinate for the starting point
     * @type {number}
     */
    set x1(v: number);
    get x1(): number;
    /**
     * X-coordinate for the ending point
     * @type {number}
     */
    set x2(v: number);
    get x2(): number;
    /**
     * Y-coordinate for the starting point
     * @type {number}
     */
    set y1(v: number);
    get y1(): number;
    /**
     * Y-coordinate for the ending point
     * @type {number}
     */
    set y2(v: number);
    get y2(): number;
    /**
     * Set the starting point
     * @param {number} x the x-coordinate for the starting point
     * @param {number} y the y-coordinate for the starting point
   * @returns {this}
     */
    setStartpoint(x: number, y: number): this;
    /**
     * Set the ending point
     * @param {number} x the x-coordinate for the ending point
     * @param {number} y the y-coordinate for the ending point
   * @returns {this}
     */
    setEndpoint(x: number, y: number): this;
    /**
     * Sets the Line's to the start position (`x1`, `y1`)
     * @param {number} x1 new x-coordinate of the shape
     * @param {number} y1 new y-coordinate of the shape
   * @returns {this}
     */
    setPosition(x1: number, y1: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
//# sourceMappingURL=Line.d.ts.map