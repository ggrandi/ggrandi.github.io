import { baseObj } from "./index.js";
/**
 * The Circle shape
 */
export declare class Circle extends baseObj {
    private _radius;
    /**
     * @constructor
     * @param radius The radius of the circle
     */
    constructor(radius: number);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     */
    constructor(radius: number, x: number, y: number);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     * @param color The color of the circle
     */
    constructor(radius: number, x: number, y: number, color: string);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     * @param color The color of the circle
     * @param outline whether to draw the outline
     */
    constructor(radius: number, x: number, y: number, color: string | CanvasGradient, outline: boolean);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     * @param color The color of the circle
     * @param outline whether to draw the outline
     * @param outlineColor The color of the outline
     */
    constructor(radius: number, x: number, y: number, color: string | CanvasGradient, outline: boolean, outlineColor: string);
    /**
     * The circle's radius
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The circle's diameter
     */
    set diameter(v: number);
    get diameter(): number;
    /**
     * Returns the Circle's diameter
     */
    getDiameter(): number;
    /**
     * sets the Circle's diameter to `diameter`
     * @param diameter the new diameter
     */
    setDiameter(diameter: number): this;
    /**
     * Returns the Circle's radius
     */
    getRadius(): number;
    /**
     * sets the Circle's radius to `radius`
     * @param radius the new radius
     */
    setRadius(radius: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
