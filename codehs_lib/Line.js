/* eslint-disable */
import { baseObj, ctx, rotatePoint, lineDistance, checkColor } from "./index.js";
/**
 * The Line shape
 */
export class Line extends baseObj {
	constructor(x1, y1, x2, y2, width, color) {
		super();
		this._x1 = x1;
		this._y1 = y1;
		this._x2 = x2;
		this._y2 = y2;
		this.color = color || "black";
		if (color && !checkColor(color)) {
			console.warn(`Your color of ${color} is not a valid color`);
			this.color = "black";
		}
		this._width = width || 2;
		this.type = "Line";
	}
	toString() {
		return `${this.type} from (${this.x1}, ${this.y1}) to (${this.x2}, ${this.y2})`;
	}
	/**
	 * Set the width of the line
	 * @param w the new width
	 */
	setLineWidth(w) {
		this._width = w;
		return this;
	}
	/**
	 * X-coordinate for the starting point
	 */
	set x1(v) {
		this._x1 = v;
	}
	get x1() {
		return this._x1;
	}
	/**
	 * Returns the starting x of the line
	 */
	getStartX() {
		return this._x1;
	}
	/**
	 * X-coordinate for the ending point
	 */
	set x2(v) {
		this._x2 = v;
	}
	get x2() {
		return this._x2;
	}
	/**
	 * Returns the ending x of the line
	 */
	getEndX() {
		return this._x1;
	}
	/**
	 * Y-coordinate for the starting point
	 */
	set y1(v) {
		this._y1 = v;
	}
	get y1() {
		return this._y1;
	}
	/**
	 * Returns the starting y of the line
	 */
	getStartY() {
		return this._x1;
	}
	/**
	 * Y-coordinate for the ending point
	 */
	set y2(v) {
		this._y2 = v;
	}
	get y2() {
		return this._y2;
	}
	/**
	 * Returns the starting y of the line
	 */
	getEndY() {
		return this._x1;
	}
	/**
	 * Set the starting point
	 * @param x the x-coordinate for the starting point
	 * @param y the y-coordinate for the starting point
	 */
	setStartpoint(x, y) {
		this._x1 = x;
		this._y1 = y;
		return this;
	}
	/**
	 * Set the ending point
	 * @param x the x-coordinate for the ending point
	 * @param y the y-coordinate for the ending point
	 */
	setEndpoint(x, y) {
		this._x2 = x;
		this._y2 = y;
		return this;
	}
	/**
	 * Sets the Line's to the start position (`x1`, `y1`)
	 * @param x1 new x-coordinate of the shape
	 * @param y1 new y-coordinate of the shape
	 */
	setPosition(x1, y1) {
		return this.setStartpoint(x1, y1);
	}
	draw() {
		if (this.outline) {
			ctx.save();
			ctx.beginPath();
			const w = this._width + 2 * this.outlineWidth;
			const h = lineDistance(this.x1, this.y1, this.x2, this.y2) + 2 * this.outlineWidth;
			ctx.translate(
				Math.min(this._x1, this._x2) + Math.abs(this._x1 - this._x2) / 2,
				Math.min(this._y1, this._y2) + Math.abs(this._y1 - this._y2) / 2
			);
			ctx.rotate(Math.atan2(-(this.x2 - this.x1), this.y2 - this.y1));
			ctx.fillStyle = this.outlineColor;
			ctx.rect(-w / 2, -h / 2, w, h);
			ctx.fill();
			ctx.restore();
		}
		ctx.beginPath();
		ctx.lineWidth = this._width;
		ctx.strokeStyle = this.color;
		ctx.moveTo(this._x1, this._y1);
		ctx.lineTo(this._x2, this._y2);
		ctx.stroke();
		ctx.closePath();
	}
	containsPoint(x, y) {
		const r = Math.atan2(-(this.x2 - this.x1), this.y2 - this.y1);
		const point = rotatePoint(x - this.x1, y - this.y1, r);
		x = point.x;
		y = point.y;
		const length = lineDistance(this.x1, this.y1, this.x2, this.y2);
		const oW = this.outline ? this.outlineWidth : 0;
		return -this._width / 2 - oW < x && x < this._width / 2 + oW && -oW < y && y < length + oW;
	}
}
