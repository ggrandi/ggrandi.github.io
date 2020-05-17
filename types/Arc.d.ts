import { baseObj } from "./index.js";
/**
 * The enum to set the arc's mode
 * @enum {number}
 * @readonly
 */
export declare enum ArcMode {
    /** the value for degrees */
    DEGREES = 0,
    /** the value for radians */
    RADIANS = 1
}
/**
 * The Arc shape
 */
export declare class Arc extends baseObj {
    private _radius;
    private _sa;
    private _ea;
    private _cc;
    /**
     * @constructor
     * @param radius the radius of the arc
     * @param startingAngle the starting angle of the arc
     * @param endingAngle {number} the ending angle of the arc
     * @param mode 0 for degrees, 1 for radians
     */
    constructor(radius: number, starting: number, ending: number, mode: ArcMode);
    /**
     * @constructor
     * @param radius the radius of the arc
     * @param startingAngle the starting angle of the arc
     * @param endingAngle {number} the ending angle of the arc
     * @param mode 0 for degrees, 1 for radians
     * @param x the x-position of the arc
     * @param y the y-position of the arc
     */
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number);
    /**
     * @constructor
     * @param radius the radius of the arc
     * @param startingAngle the starting angle of the arc
     * @param endingAngle {number} the ending angle of the arc
     * @param mode 0 for degrees, 1 for radians
     * @param x the x-position of the arc
     * @param y the y-position of the arc
     * @param counterClockwise whether the arc is counterclockwise or not
     */
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number, counterClockwise: boolean);
    /**
     * The radius of the arc
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The starting angle of the arc
     */
    set startingAngle(v: number);
    get startingAngle(): number;
    /**
     * Set the new startingAngle
     * @param angle the new starting angle
     */
    setStartingAngle(angle: number): this;
    /**
     * The ending angle of the arc
     */
    set endingAngle(v: number);
    get endingAngle(): number;
    /**
     * Whether or not the arc is counterclockwise
     */
    set counterClockwise(cc: boolean);
    get counterClockwise(): boolean;
    /**
     * Set the ending angle of the arc
     * @param angle The new ending angle
     */
    setEndingAngle(angle: number): this;
    /**
     * Set the starting and ending angle of the arc
     * @param startingAngle the new starting angle
     * @param endingAngle the new ending angle
     */
    setAngle(startingAngle: number, endingAngle: number): this;
    /**
     * Returns the angle of the arc
     */
    getAngle(): {
        startingAngle: number;
        endingAngle: number;
    };
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
