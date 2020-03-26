import { add, remove } from './index.js';

/**
 * The base shape that all other shapes inherit from
 */
export class baseObj {
	private _x: number;
	private _y: number;
	private _color: string;
	private _type: string;
	private _rot: number;
	private _outline: boolean;
	private _outlineColor: string;
	private _outlineWidth: number;

	/**
	 * @constructor
	 */
	constructor() {
		this._x = -1000;
		this._y = -1000;
		this._color = "black";
		this._type = "Thing";
		this._rot = 0;
		this._outline = false;
		this._outlineColor = 'black';
		this._outlineWidth = 1;
	}

	toString(): string {
		return `${this.type} at (${this._x}, ${this._y})`
	}

	/**
	 * The type of the shape 
	 * @type {string}
	 */
	set type(v: string) {
		this._type = v;
	}

	get type(): string {
		return this._type;
	}

	/**
	 * Returns the type of the Shape
	 */
	getType(): string {
		return this._type;
	}

	/**
	 * Sets the shape to the position (`x`, `y`)
	 * @param x {number} new x-coordinate of the shape
	 * @param y {number} new y-coordinate of the shape
	 */
	setPosition(x: number, y: number): this {
		this._x = x;
		this._y = y;

		return this;
	}

	/**
	 * Sets the color of the shape to `color`
	 * @param color {string} css color, hexadecimal string, or rgba() string
	 */
	setColor(color: string): this {
		this._color = color;

		return this;
	}

	/**
	 * Set whether to draw outline and the outline color and width
	 * @param show {boolean} boolean to show/hide the outline
	 * @param color {string} the new outline color
	 * @param width {number} the new outline width
	 */
	setOutline(show: boolean): this;
	setOutline(show: boolean, color: string, width: number): this;
	setOutline(show: boolean, color?: string, width?: number): this {
		this._outline = show;
		this._outlineColor = color || this._outlineColor;
		this._outlineWidth = width || this._outlineWidth;
		return this;
	}

	/**
	 * Set whether to draw outline and the outline color and width (same as setOutline)
	 * @param show {boolean} boolean to show/hide the outline
	 * @param color {string} the new outline color
	 * @param width {number} the new outline width
	 */
	setBorder(show: boolean): this;
	setBorder(show: boolean, color: string, width: number): this;
	setBorder(show: boolean, color?: string, width?: number): this {
		this._outline = show;
		this._outlineColor = color || this._outlineColor;
		this._outlineWidth = width || this._outlineWidth;
		return this;
	}

	/**
	 * Sets the color of the shape's outline to `color`
	 * @param color {string} css color, hexadecimal string, or rgba() string
	 */
	setOutlineColor(color: string): this {
		this._outlineColor = color;
		return this;
	}

	/**
	 * Sets the color of the shape's outline to `color` (same as setOutlineColor)
	 * @param color {string} css color, hexadecimal string, or rgba() string
	 */
	setBorderColor(color: string): this {
		this._outlineColor = color;
		return this;
	}

		/**
	 * Sets the width of the shape's outline to `width`
	 * @param width {number} the new widthoo of the outline
	 */
	setOutlineWidth(width: number): this {
		this._outlineWidth = width;
		return this;
	}

	/**
	 * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
	 * @param width {number} the new widthoo of the outline
	 */
	setBorderWidth(width: number): this {
		this._outlineWidth = width;
		return this;
	}

	/**
	 * Whether or not to draw outline 
	 * @type {boolean}
	 */
	set outline(v: boolean) {
		this._outline = v;
	}

	get outline(): boolean {
		return this._outline;
	}

	/**
	 * Whether or not to draw outline (same as borderWidth)
	 * @type {number}
	 */
	set borderWidth(v: number) {
		this._outlineWidth = v;
	}

	get borderWidth(): number {
		return this._outlineWidth;
	}

	/**
	 * Whether or not to draw outline
	 * @type {number}
	 */
	set outlineWidth(v: number) {
		this._outlineWidth = v;
	}

	get outlineWidth(): number {
		return this._outlineWidth;
	}

	/**
	 * Whether or not to draw outline (same as outline)
	 * @type {boolean}
	 */
	set border(v: boolean) {
		this._outline = v;
	}

	get border(): boolean {
		return this._outline;
	}

	/**
	 * The outline's color 
	 * @type {string}
	 */
	set outlineColor(v: string) {
		this._outlineColor = v;
	}

	get outlineColor(): string {
		return this._outlineColor;
	}

	/**
	 * The outline's color (same as outlineColor)
	 * @type {string}
	 */
	set borderColor(v: string) {
		this._outlineColor = v;
	}

	get borderColor(): string {
		return this._outlineColor;
	}

	/**
	 * The shape's x-position 
	 * @type {number}
	 */
	set x(v: number) {
		this._x = v;
	}

	get x(): number {
		return this._x;
	}

	/**
	 * method to return the shapes x-position
	 */
	getX(): number {
		return this._x;
	}

	/**
	 * The shape's y-position 
	 * @type {number}
	 */
	set y(v: number) {
		this._y = v;
	}

	get y(): number {
		return this._y;
	}

	/**
	 * method to return the shapes y-position
	 */
	getY(): number {
		return this._y;
	}

	/**
	 * Move a shape `dx` pixels right and `dy` pixels left
	 * @param dx {number} pixels to move along the x-axis
	 * @param dy {number} pixels to move along the y-axis
	 */
	move(dx: number, dy: number): this {
		this.x += dx;
		this.y += dy;

		return this;
	}

	/**
	 * The shape's rotation in degrees 
	 * @type {number}
	 */
	set rotationDegrees(r: number) {
		this._rot = r * Math.PI / 180;
	}

	get rotationDegrees(): number {
		return this._rot * 180 / Math.PI;
	}

	/**
	 * Rotate the shape by `degrees` degrees
	 * @param degrees {number} number of degrees to rotate it by
	 */
	rotateDegrees(degrees: number): this {
		this._rot += degrees * Math.PI / 180;

		return this;
	}

	/**
	 * The shape's rotation in radians 
	 * @type {number}
	 */
	set rotation(r: number) {
		this._rot = r;
	}

	get rotation(): number {
		return this._rot;
	}

	/**
	 * Rotate the shape by `radians` radians
	 * @param radians {number} number of degrees to rotate it by
	 */
	rotate(radians: number): this {
		this._rot += radians;

		return this;
	}

	/**
	 * Returns the shapes rotation in radians
	 */
	getRotation(): number {
		return this._rot;
	}

	/**
	 * Returns the shapes rotation in degrees
	 */
	getRotationDegrees(): number {
		return this._rot * 180 / Math.PI;
	}

	/**
	 * The shape's color
	 * @type {string}
	 */
	set color(v: string) {
		this._color = v;
	}

	get color(): string {
		return this._color;
	}

	/**
	 * Returns the shape's color
	 */
	getColor(): string {
		return this._color;
	}

	/**
	 * adds the shape to the canvas
	 */
	add(): this {
		add(this);

		return this;
	}

	/**
	 * removes the shape from the canvas
	 */
	remove(): this {
		remove(this);

		return this;
	}

	/**
	 * Returns a boolean to check if the shape contains the point (`x`, `y`)
	 * @param x {number} x-position of point
	 * @param y {number} y-position of point
	 */
	containsPoint(x: number, y: number): boolean {
		return false;
	}

	/**
	 * Method called to draw the shape on the screen
	 */
	draw(): void {

	}
}