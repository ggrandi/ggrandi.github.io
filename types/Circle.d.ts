import { baseObj } from './index.js';
/**
 * The Circle shape
 */
export declare class Circle extends baseObj {
    private _radius;
    constructor(radius: number);
    constructor(radius: number, x: number, y: number);
    constructor(radius: number, x: number, y: number, color: string);
    constructor(radius: number, x: number, y: number, color: string, outline: boolean);
    constructor(radius: number, x: number, y: number, color: string, outline: boolean, outlineColor: string);
    /**
     * The circle's radius
     * @type {number}
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The circle's diameter
     * @type {number}
     */
    set diameter(v: number);
    get diameter(): number;
    /**
     * Returns the Circle's diameter
     * @returns {number}
     */
    getDiameter(): number;
    /**
     * Sets the Circle's diameter to `diameter`
     * @param {number} diameter the new diameter
     * @returns {this}
     */
    setDiameter(diameter: number): this;
    /**
     * Returns the Circle's radius
     * @returns {number}
     */
    getRadius(): number;
    /**
     * Sets the Circle's radius to `radius`
     * @param {number} radius the new radius
     * @returns {this}
     */
    setRadius(radius: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
//# sourceMappingURL=Circle.d.ts.map