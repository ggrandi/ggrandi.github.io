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
     * @param w {number} the new width
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
     * @param x {number} the x-coordinate for the starting point
     * @param y {number} the y-coordinate for the starting point
     */
    setStartpoint(x: number, y: number): this;
    /**
     * Set the ending point
     * @param x {number} the x-coordinate for the ending point
     * @param y {number} the y-coordinate for the ending point
     */
    setEndpoint(x: number, y: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
//# sourceMappingURL=Line.d.ts.map