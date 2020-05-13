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
     * @returns {string}
     */
    getType(): string;
    /**
     * Sets the shape to the position (`x`, `y`)
     * @param {number} x new x-coordinate of the shape
     * @param {number} y new y-coordinate of the shape
     * @returns {this}
     */
    setPosition(x: number, y: number): this;
    /**
     * Sets the color of the shape to `color`
     * @param {string} color css color, hexadecimal string, or rgba() string
     * @returns {this}
     */
    setColor(color: string): this;
    setOutline(show: boolean): this;
    setOutline(show: boolean, color: string, width: number): this;
    setBorder(show: boolean): this;
    setBorder(show: boolean, color: string, width: number): this;
    /**
     * Sets the color of the shape's outline to `color`
     * @param {string} color css color, hexadecimal string, or rgba() string
     * @returns {this}
     */
    setOutlineColor(color: string): this;
    /**
     * Sets the color of the shape's outline to `color` (same as setOutlineColor)
     * @param {string} color css color, hexadecimal string, or rgba() string
     * @returns {this}
     */
    setBorderColor(color: string): this;
    /**
     * Sets the width of the shape's outline to `width`
     * @param {number} width the new widthoo of the outline
     * @returns {this}
     */
    setOutlineWidth(width: number): this;
    /**
     * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
     * @param {number} width the new width of the outline
     * @returns {this}
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
     * @returns {number}
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
     * @returns {number}
     */
    getY(): number;
    /**
     * Move a shape `dx` pixels right and `dy` pixels left
     * @param {number} dx pixels to move along the x-axis
     * @param {number} dy pixels to move along the y-axis
     * @returns {this}
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
     * @param {number} degrees number of degrees to rotate it by
     * @returns {this}
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
     * @param {number} radians number of degrees to rotate it by
     * @returns {this}
     */
    rotate(radians: number): this;
    /**
     * Returns the shapes rotation in radians
     * @returns {number}
     */
    getRotation(): number;
    /**
     * Returns the shapes rotation in degrees
     * @returns {number}
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
     * @returns {string}
     */
    getColor(): string;
    /**
     * adds the shape to the canvas
     * @returns {this}
     */
    add(): this;
    /**
     * removes the shape from the canvas
     * @returns {this}
     */
    remove(): this;
    /**
     * Returns a boolean to check if the shape contains the point (`x`, `y`)
     * @param {number} x x-position of point
     * @param {number} y y-position of point
     * @returns {boolean}
     */
    containsPoint(x: number, y: number): boolean;
    /**
     * Method called to draw the shape on the screen
     * @returns {void}
     */
    draw(): void;
}
