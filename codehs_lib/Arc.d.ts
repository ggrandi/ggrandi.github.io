import { baseObj } from "./index.js";
/**
 * The Arc shape
 */
export declare class Arc extends baseObj {
    private _radius;
    private _sa;
    private _ea;
    private _cc;
    constructor(radius: number, starting: number, ending: number, mode: 0 | 1);
    constructor(radius: number, starting: number, ending: number, mode: 0 | 1, x: number, y: number);
    constructor(radius: number, starting: number, ending: number, mode: 0 | 1, x: number, y: number, counterClockwise: boolean);
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
     * @param angle {number} the new starting angle
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
     * @param angle {number} The new ending angle
     */
    setEndingAngle(angle: number): this;
    /**
     * Set the starting and ending angle of the arc
     * @param startingAngle {number} the new starting angle
     * @param endingAngle {number} the new ending angle
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
//# sourceMappingURL=Arc.d.ts.map