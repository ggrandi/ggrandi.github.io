/* eslint-disable */
import { baseObj, ctx, rotatePoint, checkColor, camera, canvas } from "./index.js";
/**
 * The oval shape
 */
export class Oval extends baseObj {
	constructor(width, height, x, y, color) {
		super();
		this._width = width;
		this._height = height;
		this.x = x !== null && x !== void 0 ? x : 0;
		this.y = y !== null && y !== void 0 ? y : 0;
		this.color = color || "black";
		if (color && !checkColor(color)) {
			console.warn(`Your color of ${color} is not a valid color`);
			this.color = "black";
		}
	}
	/**
	 * The width of the oval
	 */
	set width(v) {
		this._width = v;
	}
	get width() {
		return this._width;
	}
	/**
	 * Set the width of the oval
	 * @param width the new width
	 */
	setWidth(width) {
		this._width = width;
		return this;
	}
	/**
	 * The height of the oval
	 */
	set height(v) {
		this._height = v;
	}
	get height() {
		return this._height;
	}
	/**
	 * Set the height of the oval
	 * @param height the new height
	 */
	setHeight(height) {
		this._height = height;
		return this;
	}
	/**
	 * Set the width and height of the oval
	 * @param width the new width of the oval
	 * @param height the new height of the oval
	 */
	setSize(width, height) {
		this._width = width;
		this._height = height;
		return this;
	}
	draw() {
		const cx = this.still ? 0 : camera.x;
		const cy = this.still ? 0 : camera.y;
		ctx.beginPath();
		ctx.ellipse(this.x - cx, this.y - cy, this._width / 2, this._height / 2, this.rotation, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		if (this.outline) {
			ctx.strokeStyle = this.outlineColor;
			ctx.lineWidth = this.outlineWidth;
			ctx.stroke();
		}
		ctx.fill();
	}
	onScreen() {
		return (
			this.x + this.width >= camera.x &&
			this.x <= camera.x + canvas.width &&
			this.y + this.height >= camera.y &&
			this.y <= camera.y + canvas.height
		);
	}
	containsPoint(x, y) {
		x -= this.x;
		y -= this.y;
		if (this.rotation !== 0) {
			const point = rotatePoint(x, y, this.rotation);
			x = point.x;
			y = point.y;
		}
		const oW = this.outline ? this.outlineWidth / 2 : 0;
		return x ** 2 / (this._width / 2 + oW) ** 2 + y ** 2 / (this._height / 2 + oW) ** 2 <= 1;
	}
}
