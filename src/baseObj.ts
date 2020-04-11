import { add, remove, checkColor } from './index.js';

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
   * @returns {string}
	 */
  getType(): string {
    return this._type;
  }

	/**
	 * Sets the shape to the position (`x`, `y`)
	 * @param {number} x new x-coordinate of the shape
	 * @param {number} y new y-coordinate of the shape
   * @returns {this}
	 */
  setPosition(x: number, y: number): this {
    this._x = x;
    this._y = y;

    return this;
  }

	/**
	 * Sets the color of the shape to `color`
	 * @param {string} color css color, hexadecimal string, or rgba() string
   * @returns {this}
	 */
  setColor(color: string): this {
    if (!checkColor(color)) {
      console.warn(`Your color of ${color} is not a valid color`)
    }

    this.color = checkColor(color) ? color : "black";

    return this;
  }

  setOutline(show: boolean): this;
  setOutline(show: boolean, color: string, width: number): this;
  /**
   * Set whether to draw outline and the outline color and width
   * @param {boolean} show boolean to show/hide the outline
   * @param {string} color the new outline color
   * @param {number} width the new outline width
   * @returns {this}
   */
  setOutline(show: boolean, color?: string, width?: number): this {
    this.outline = show;
    this.outlineColor = color || this.outlineColor;
    this.outlineWidth = width || this.outlineWidth;
    return this;
  }

  setBorder(show: boolean): this;
  setBorder(show: boolean, color: string, width: number): this;
  /**
   * Set whether to draw outline and the outline color and width (same as setOutline)
   * @param {boolean} show boolean to show/hide the outline
   * @param {string} color the new outline color
   * @param {number} width the new outline width
   */
  setBorder(show: boolean, color?: string, width?: number): this {
    this.outline = show;
    this.outlineColor = color || this.outlineColor;
    this.outlineWidth = width || this.outlineWidth;
    return this;
  }

	/**
	 * Sets the color of the shape's outline to `color`
	 * @param {string} color css color, hexadecimal string, or rgba() string
   * @returns {this}
	 */
  setOutlineColor(color: string): this {
    this.outlineColor = color;
    return this;
  }

	/**
	 * Sets the color of the shape's outline to `color` (same as setOutlineColor)
	 * @param {string} color css color, hexadecimal string, or rgba() string
   * @returns {this}
	 */
  setBorderColor(color: string): this {
    this.outlineColor = color;
    return this;
  }

  /**
   * Sets the width of the shape's outline to `width`
   * @param {number} width the new widthoo of the outline
   * @returns {this}
   */
  setOutlineWidth(width: number): this {
    this._outlineWidth = width;
    return this;
  }

	/**
	 * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
	 * @param {number} width the new width of the outline
   * @returns {this}
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
    if (!checkColor(v)) {
      console.warn(`Your color of ${v} is not a valid color`)
    }

    this._outlineColor = checkColor(v) ? v : "black";
  }

  get outlineColor(): string {
    return this._outlineColor;
  }

	/**
	 * The outline's color (same as outlineColor)
	 * @type {string}
	 */
  set borderColor(v: string) {
    this.outlineColor = v;
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
   * @returns {number}
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
   * @returns {number}
	 */
  getY(): number {
    return this._y;
  }

	/**
	 * Move a shape `dx` pixels right and `dy` pixels left
	 * @param {number} dx pixels to move along the x-axis
	 * @param {number} dy pixels to move along the y-axis
   * @returns {this}
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
	 * @param {number} degrees number of degrees to rotate it by
   * @returns {this}
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
	 * @param {number} radians number of degrees to rotate it by
   * @returns {this}
	 */
  rotate(radians: number): this {
    this._rot += radians;

    return this;
  }

	/**
	 * Returns the shapes rotation in radians
   * @returns {number}
	 */
  getRotation(): number {
    return this._rot;
  }

	/**
	 * Returns the shapes rotation in degrees
   * @returns {number}
	 */
  getRotationDegrees(): number {
    return this._rot * 180 / Math.PI;
  }

	/**
	 * The shape's color
	 * @type {string}
	 */
  set color(v: string) {
    if (!checkColor(v)) {
      console.warn(`Your color of ${v} is not a valid color`)
    }

    this._color = checkColor(v) ? v : "black";
  }

  get color(): string {
    return this._color;
  }

	/**
	 * Returns the shape's color
   * @returns {string}
	 */
  getColor(): string {
    return this._color;
  }

	/**
	 * adds the shape to the canvas
   * @returns {this}
	 */
  add(): this {
    add(this);

    return this;
  }

	/**
	 * removes the shape from the canvas
   * @returns {this}
	 */
  remove(): this {
    remove(this);

    return this;
  }

	/**
	 * Returns a boolean to check if the shape contains the point (`x`, `y`)
	 * @param {number} x x-position of point
	 * @param {number} y y-position of point
   * @returns {boolean}
	 */
  containsPoint(x: number, y: number): boolean {
    return false;
  }

	/**
	 * Method called to draw the shape on the screen
   * @returns {void}
	 */
  draw(): void { }
}