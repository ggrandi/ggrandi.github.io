/**
 * The base shape that all other shapes inherit from
 */
export declare class baseObj {
    private _x;
    private _y;
    private _color;
    private _type;
    private _rot;
    private _outline;
    private _outlineColor;
    private _outlineWidth;
    /**
     * @constructor
     */
    constructor();
    toString(): string;
    /**
     * The type of the shape
     * @type {string}
     */
    set type(v: string);
    get type(): string;
    /**
     * Returns the type of the Shape
     */
    getType(): string;
    /**
     * Sets the shape to the position (`x`, `y`)
     * @param x {number} new x-coordinate of the shape
     * @param y {number} new y-coordinate of the shape
     */
    setPosition(x: number, y: number): this;
    /**
     * Sets the color of the shape to `color`
     * @param color {string} css color, hexadecimal string, or rgba() string
     */
    setColor(color: string): this;
    /**
     * Set whether to draw outline and the outline color and width
     * @param show {boolean} boolean to show/hide the outline
     * @param color {string} the new outline color
     * @param width {number} the new outline width
     */
    setOutline(show: boolean): this;
    setOutline(show: boolean, color: string, width: number): this;
    /**
     * Set whether to draw outline and the outline color and width (same as setOutline)
     * @param show {boolean} boolean to show/hide the outline
     * @param color {string} the new outline color
     * @param width {number} the new outline width
     */
    setBorder(show: boolean): this;
    setBorder(show: boolean, color: string, width: number): this;
    /**
     * Sets the color of the shape's outline to `color`
     * @param color {string} css color, hexadecimal string, or rgba() string
     */
    setOutlineColor(color: string): this;
    /**
     * Sets the color of the shape's outline to `color` (same as setOutlineColor)
     * @param color {string} css color, hexadecimal string, or rgba() string
     */
    setBorderColor(color: string): this;
    /**
 * Sets the width of the shape's outline to `width`
 * @param width {number} the new widthoo of the outline
 */
    setOutlineWidth(width: number): this;
    /**
     * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
     * @param width {number} the new widthoo of the outline
     */
    setBorderWidth(width: number): this;
    /**
     * Whether or not to draw outline
     * @type {boolean}
     */
    set outline(v: boolean);
    get outline(): boolean;
    /**
     * Whether or not to draw outline (same as borderWidth)
     * @type {number}
     */
    set borderWidth(v: number);
    get borderWidth(): number;
    /**
     * Whether or not to draw outline
     * @type {number}
     */
    set outlineWidth(v: number);
    get outlineWidth(): number;
    /**
     * Whether or not to draw outline (same as outline)
     * @type {boolean}
     */
    set border(v: boolean);
    get border(): boolean;
    /**
     * The outline's color
     * @type {string}
     */
    set outlineColor(v: string);
    get outlineColor(): string;
    /**
     * The outline's color (same as outlineColor)
     * @type {string}
     */
    set borderColor(v: string);
    get borderColor(): string;
    /**
     * The shape's x-position
     * @type {number}
     */
    set x(v: number);
    get x(): number;
    /**
     * method to return the shapes x-position
     */
    getX(): number;
    /**
     * The shape's y-position
     * @type {number}
     */
    set y(v: number);
    get y(): number;
    /**
     * method to return the shapes y-position
     */
    getY(): number;
    /**
     * Move a shape `dx` pixels right and `dy` pixels left
     * @param dx {number} pixels to move along the x-axis
     * @param dy {number} pixels to move along the y-axis
     */
    move(dx: number, dy: number): this;
    /**
     * The shape's rotation in degrees
     * @type {number}
     */
    set rotationDegrees(r: number);
    get rotationDegrees(): number;
    /**
     * Rotate the shape by `degrees` degrees
     * @param degrees {number} number of degrees to rotate it by
     */
    rotateDegrees(degrees: number): this;
    /**
     * The shape's rotation in radians
     * @type {number}
     */
    set rotation(r: number);
    get rotation(): number;
    /**
     * Rotate the shape by `radians` radians
     * @param radians {number} number of degrees to rotate it by
     */
    rotate(radians: number): this;
    /**
     * Returns the shapes rotation in radians
     */
    getRotation(): number;
    /**
     * Returns the shapes rotation in degrees
     */
    getRotationDegrees(): number;
    /**
     * The shape's color
     * @type {string}
     */
    set color(v: string);
    get color(): string;
    /**
     * Returns the shape's color
     */
    getColor(): string;
    /**
     * adds the shape to the canvas
     */
    add(): this;
    /**
     * removes the shape from the canvas
     */
    remove(): this;
    /**
     * Returns a boolean to check if the shape contains the point (`x`, `y`)
     * @param x {number} x-position of point
     * @param y {number} y-position of point
     */
    containsPoint(x: number, y: number): boolean;
    /**
     * Method called to draw the shape on the screen
     */
    draw(): void;
}
//# sourceMappingURL=baseObj.d.ts.map