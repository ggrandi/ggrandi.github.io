import { baseObj } from "./index.js";
/**
 * The enum for arcmode to set (DEGREES | RADIANS)
 * @enum {number}
 * @readonly
 */
export declare enum ArcMode {
    DEGREES = 0,
    RADIANS = 1
}
/**
 * @typedef {Object} Angle
 * @property {number} startingAngle - The starting angle in radians
 * @property {number} endingAngle - The ending angle in radians
 */
/**
 * The Arc shape
 */
export declare class Arc extends baseObj {
    private _radius;
    private _sa;
    private _ea;
    private _cc;
    constructor(radius: number, starting: number, ending: number, mode: ArcMode);
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number);
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number, counterClockwise: boolean);
    /**
     * The radius of the arc
     * @type {number}
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The starting angle of the arc
     * @type {number}
     */
    set startingAngle(v: number);
    get startingAngle(): number;
    /**
     * Set the new startingAngle
     * @param {number} angle the new starting angle
     * @returns {this}
     */
    setStartingAngle(angle: number): this;
    /**
     * The ending angle of the arc
     * @type {number}
     */
    set endingAngle(v: number);
    get endingAngle(): number;
    /**
     * Whether or not the arc is counterclockwise
     * @type {boolean}
     */
    set counterClockwise(cc: boolean);
    get counterClockwise(): boolean;
    /**
     * Set the ending angle of the arc
     * @param {number} angle The new ending angle
     * @returns {this}
     */
    setEndingAngle(angle: number): this;
    /**
     * Set the starting and ending angle of the arc
     * @param {number} startingAngle the new starting angle
     * @param {number} endingAngle the new ending angle
     * @returns {this}
     */
    setAngle(startingAngle: number, endingAngle: number): this;
    /**
     * Returns the angle of the arc
     * @returns {Angle}
     */
    getAngle(): {
        startingAngle: number;
        endingAngle: number;
    };
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
//# sourceMappingURL=Arc.d.ts.map