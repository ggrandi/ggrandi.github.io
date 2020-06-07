/* eslint-disable */
import { add, remove, checkColor, isElementAdded } from "./index.js";
/**
 * The base shape that all other shapes inherit from
 */
export class baseObj {
	/**
	 * @constructor
	 */
	constructor() {
		this._x = 0;
		this._y = 0;
		this._color = "black";
		this._type = "Thing";
		this._rot = 0;
		this._outline = false;
		this._outlineColor = "black";
		this._outlineWidth = 1;
	}
	toString() {
		return `${this.type} at (${this._x}, ${this._y})`;
	}
	/**
	 * The type of the shape
	 */
	set type(v) {
		this._type = v;
	}
	get type() {
		return this._type;
	}
	/**
	 * Returns the type of the Shape
	 */
	getType() {
		return this._type;
	}
	/**
	 * Sets the shape to the position (`x`, `y`)
	 * @param x new x-coordinate of the shape
	 * @param y new y-coordinate of the shape
	 */
	setPosition(x, y) {
		this._x = x;
		this._y = y;
		return this;
	}
	/**
	 * Sets the color of the shape to `color`
	 * @param color css color, hexadecimal string, or rgba() string
	 */
	setColor(color) {
		if (!checkColor(color)) {
			console.warn(`Your color of ${color} is not a valid color`);
		}
		this.color = checkColor(color) ? color : "black";
		return this;
	}
	setOutline(show, color, width) {
		this.outline = show;
		this.outlineColor = color || this.outlineColor;
		this.outlineWidth = width || this.outlineWidth;
		return this;
	}
	setBorder(show, color, width) {
		this.outline = show;
		this.outlineColor = color || this.outlineColor;
		this.outlineWidth = width || this.outlineWidth;
		return this;
	}
	/**
	 * Sets the color of the shape's outline to `color`
	 * @param color css color, hexadecimal string, or rgba() string
	 */
	setOutlineColor(color) {
		this.outlineColor = color;
		return this;
	}
	/**
	 * Sets the color of the shape's outline to `color` (same as setOutlineColor)
	 * @param color css color, hexadecimal string, or rgba() string
	 */
	setBorderColor(color) {
		this.outlineColor = color;
		return this;
	}
	/**
	 * Sets the width of the shape's outline to `width`
	 * @param width the new widthoo of the outline
	 */
	setOutlineWidth(width) {
		this.outlineWidth = width;
		return this;
	}
	/**
	 * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
	 * @param width the new width of the outline
	 */
	setBorderWidth(width) {
		this.outlineWidth = width;
		return this;
	}
	/**
	 * Whether or not to draw outline
	 */
	set outline(v) {
		this._outline = v;
	}
	get outline() {
		return this._outline;
	}
	/**
	 * Whether or not to draw outline (same as borderWidth)
	 */
	set borderWidth(v) {
		this.outlineWidth = v;
	}
	get borderWidth() {
		return this.outlineWidth;
	}
	/**
	 * Whether or not to draw outline
	 */
	set outlineWidth(v) {
		if (v < 0) {
			console.warn(`The outline width should be positive, please fix your outline width of ${v}`);
			v = Math.abs(v);
		}
		this._outlineWidth = v;
	}
	get outlineWidth() {
		return this._outlineWidth;
	}
	/**
	 * Whether or not to draw outline (same as outline)
	 */
	set border(v) {
		this._outline = v;
	}
	get border() {
		return this._outline;
	}
	/**
	 * The outline's color
	 */
	set outlineColor(v) {
		if (!checkColor(v)) {
			console.warn(`Your color of ${v} is not a valid color`);
		}
		this._outlineColor = checkColor(v) ? v : "black";
	}
	get outlineColor() {
		return this._outlineColor;
	}
	/**
	 * The outline's color (same as outlineColor)
	 */
	set borderColor(v) {
		this.outlineColor = v;
	}
	get borderColor() {
		return this._outlineColor;
	}
	/**
	 * The shape's x-position
	 */
	set x(v) {
		this._x = v;
	}
	get x() {
		return this._x;
	}
	/**
	 * Method to return the shapes x-position
	 */
	getX() {
		return this._x;
	}
	/**
	 * The shape's y-position
	 */
	set y(v) {
		this._y = v;
	}
	get y() {
		return this._y;
	}
	/**
	 * Method to return the shapes y-position
	 */
	getY() {
		return this._y;
	}
	/**
	 * Move a shape `dx` pixels right and `dy` pixels left
	 * @param dx pixels to move along the x-axis
	 * @param dy pixels to move along the y-axis
	 */
	move(dx, dy) {
		this.x += dx;
		this.y += dy;
		return this;
	}
	/**
	 * The shape's rotation in degrees
	 */
	set rotationDegrees(r) {
		this._rot = (r * Math.PI) / 180;
	}
	get rotationDegrees() {
		return (this._rot * 180) / Math.PI;
	}
	/**
	 * Rotate the shape by `degrees` degrees
	 * @param degrees number of degrees to rotate it by
	 */
	rotateDegrees(degrees) {
		this._rot += (degrees * Math.PI) / 180;
		return this;
	}
	/**
	 * The shape's rotation in radians
	 */
	set rotation(r) {
		this._rot = r;
	}
	get rotation() {
		return this._rot;
	}
	/**
	 * Rotate the shape by `radians` radians
	 * @param radians number of degrees to rotate it by
	 */
	rotate(radians) {
		this._rot += radians;
		return this;
	}
	/**
	 * Returns the shapes rotation in radians
	 */
	getRotation() {
		return this._rot;
	}
	/**
	 * Returns the shapes rotation in degrees
	 */
	getRotationDegrees() {
		return (this._rot * 180) / Math.PI;
	}
	/**
	 * The shape's color
	 */
	set color(v) {
		if (!checkColor(v)) {
			console.warn(`Your color of ${v} is not a valid color`);
		}
		this._color = checkColor(v) ? v : "black";
	}
	get color() {
		return this._color;
	}
	/**
	 * Returns the shape's color
	 */
	getColor() {
		return this.color;
	}
	/**
	 * Adds the shape to the canvas
	 */
	add() {
		add(this);
		return this;
	}
	/**
	 * Removes the shape from the canvas
	 */
	remove() {
		remove(this);
		return this;
	}
	/**
	 * The shape's y-position
	 */
	get added() {
		return isElementAdded(this);
	}
	/**
	 * Checks if this element has been added
	 */
	isAdded() {
		return isElementAdded(this);
	}
	/**
	 * Returns a boolean to check if the shape contains the point (`x`, `y`)
	 * @param x x-position of point
	 * @param y y-position of point
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	containsPoint(x, y) {
		return false;
	}
	/**
	 * Method called to draw the shape on the screen
	 */
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	draw() {}
}
