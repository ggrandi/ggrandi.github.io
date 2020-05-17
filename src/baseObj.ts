import { add, remove, checkColor } from "./index.js";

/**
 * The base shape that all other shapes inherit from
 */
export class baseObj {
	private _x: number;
	private _y: number;
	private _color: string | CanvasGradient;
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
		this._outlineColor = "black";
		this._outlineWidth = 1;
	}

	toString(): string {
		return `${this.type} at (${this._x}, ${this._y})`;
	}

	/**
	 * The type of the shape
	 */
	public set type(v: string) {
		this._type = v;
	}

	public get type(): string {
		return this._type;
	}

	/**
	 * Returns the type of the Shape
	 */
	public getType(): string {
		return this._type;
	}

	/**
	 * Sets the shape to the position (`x`, `y`)
	 * @param x new x-coordinate of the shape
	 * @param y new y-coordinate of the shape
	 */
	public setPosition(x: number, y: number): this {
		this._x = x;
		this._y = y;

		return this;
	}

	/**
	 * Sets the color of the shape to `color`
	 * @param color css color, hexadecimal string, or rgba() string
	 */
	public setColor(color: string): this {
		if (!checkColor(color)) {
			console.warn(`Your color of ${color} is not a valid color`);
		}

		this.color = checkColor(color) ? color : "black";

		return this;
	}

	/**
	 * Set whether to draw outline
	 * @param show boolean to show/hide the outline
	 */
	public setOutline(show: boolean): this;
	/**
	 * Set whether to draw outline and the outline color and width
	 * @param show boolean to show/hide the outline
	 * @param color the new outline color
	 * @param width the new outline width
	 */
	public setOutline(show: boolean, color: string, width: number): this;
	public setOutline(show: boolean, color?: string, width?: number): this {
		this.outline = show;
		this.outlineColor = color || this.outlineColor;
		this.outlineWidth = width || this.outlineWidth;
		return this;
	}

	/**
	 * Set whether to draw outline (same as setOutline)
	 * @param show boolean to show/hide the outline
	 */
	public setBorder(show: boolean): this;
	/**
	 * Set whether to draw outline and the outline color and width (same as setOutline)
	 * @param show boolean to show/hide the outline
	 * @param color the new outline color
	 * @param width the new outline width
	 */
	public setBorder(show: boolean, color: string, width: number): this;
	public setBorder(show: boolean, color?: string, width?: number): this {
		this.outline = show;
		this.outlineColor = color || this.outlineColor;
		this.outlineWidth = width || this.outlineWidth;
		return this;
	}

	/**
	 * Sets the color of the shape's outline to `color`
	 * @param color css color, hexadecimal string, or rgba() string
	 */
	public setOutlineColor(color: string): this {
		this.outlineColor = color;
		return this;
	}

	/**
	 * Sets the color of the shape's outline to `color` (same as setOutlineColor)
	 * @param color css color, hexadecimal string, or rgba() string
	 */
	public setBorderColor(color: string): this {
		this.outlineColor = color;
		return this;
	}

	/**
	 * Sets the width of the shape's outline to `width`
	 * @param width the new widthoo of the outline
	 */
	setOutlineWidth(width: number): this {
		this.outlineWidth = width;
		return this;
	}

	/**
	 * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
	 * @param width the new width of the outline
	 */
	public setBorderWidth(width: number): this {
		this.outlineWidth = width;
		return this;
	}

	/**
	 * Whether or not to draw outline
	 */
	public set outline(v: boolean) {
		this._outline = v;
	}

	public get outline(): boolean {
		return this._outline;
	}

	/**
	 * Whether or not to draw outline (same as borderWidth)
	 */
	public set borderWidth(v: number) {
		this.outlineWidth = v;
	}

	public get borderWidth(): number {
		return this.outlineWidth;
	}

	/**
	 * Whether or not to draw outline
	 */
	public set outlineWidth(v: number) {
		if (v < 0) {
			console.warn(
				`The outline width should be positive, please fix your outline width of ${v}`
			);
			v = Math.abs(v);
		}

		this._outlineWidth = v;
	}

	public get outlineWidth(): number {
		return this._outlineWidth;
	}

	/**
	 * Whether or not to draw outline (same as outline)
	 */
	public set border(v: boolean) {
		this._outline = v;
	}

	public get border(): boolean {
		return this._outline;
	}

	/**
	 * The outline's color
	 */
	public set outlineColor(v: string) {
		if (!checkColor(v)) {
			console.warn(`Your color of ${v} is not a valid color`);
		}

		this._outlineColor = checkColor(v) ? v : "black";
	}

	public get outlineColor(): string {
		return this._outlineColor;
	}

	/**
	 * The outline's color (same as outlineColor)
	 */
	public set borderColor(v: string) {
		this.outlineColor = v;
	}

	public get borderColor(): string {
		return this._outlineColor;
	}

	/**
	 * The shape's x-position
	 */
	public set x(v: number) {
		this._x = v;
	}

	public get x(): number {
		return this._x;
	}

	/**
	 * method to return the shapes x-position
	 */
	public getX(): number {
		return this._x;
	}

	/**
	 * The shape's y-position
	 */
	public set y(v: number) {
		this._y = v;
	}

	public get y(): number {
		return this._y;
	}

	/**
	 * method to return the shapes y-position
	 */
	public getY(): number {
		return this._y;
	}

	/**
	 * Move a shape `dx` pixels right and `dy` pixels left
	 * @param dx pixels to move along the x-axis
	 * @param dy pixels to move along the y-axis
	 */
	public move(dx: number, dy: number): this {
		this.x += dx;
		this.y += dy;

		return this;
	}

	/**
	 * The shape's rotation in degrees
	 */
	public set rotationDegrees(r: number) {
		this._rot = (r * Math.PI) / 180;
	}

	public get rotationDegrees(): number {
		return (this._rot * 180) / Math.PI;
	}

	/**
	 * Rotate the shape by `degrees` degrees
	 * @param degrees number of degrees to rotate it by
	 */
	public rotateDegrees(degrees: number): this {
		this._rot += (degrees * Math.PI) / 180;

		return this;
	}

	/**
	 * The shape's rotation in radians
	 */
	public set rotation(r: number) {
		this._rot = r;
	}

	public get rotation(): number {
		return this._rot;
	}

	/**
	 * Rotate the shape by `radians` radians
	 * @param radians number of degrees to rotate it by
	 */
	public rotate(radians: number): this {
		this._rot += radians;

		return this;
	}

	/**
	 * Returns the shapes rotation in radians
	 */
	public getRotation(): number {
		return this._rot;
	}

	/**
	 * Returns the shapes rotation in degrees
	 */
	public getRotationDegrees(): number {
		return (this._rot * 180) / Math.PI;
	}

	/**
	 * The shape's color
	 */
	public set color(v: string | CanvasGradient) {
		if (!checkColor(v)) {
			console.warn(`Your color of ${v} is not a valid color`);
		}

		this._color = checkColor(v) ? v : "black";
	}

	public get color(): string | CanvasGradient {
		return this._color;
	}

	/**
	 * Returns the shape's color
	 */
	public getColor(): string | CanvasGradient {
		return this.color;
	}

	/**
	 * adds the shape to the canvas
	 */
	public add(): this {
		add(this);

		return this;
	}

	/**
	 * removes the shape from the canvas
	 */
	public remove(): this {
		remove(this);

		return this;
	}

	/**
	 * Returns a boolean to check if the shape contains the point (`x`, `y`)
	 * @param x x-position of point
	 * @param y y-position of point
	 */
	public containsPoint(x: number, y: number): boolean {
		return false;
	}

	/**
	 * Method called to draw the shape on the screen
	 */
	public draw(): void {}
}
