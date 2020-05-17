import { baseObj, ctx, rotatePoint, checkColor } from "./index.js";

/**
 * The rectangle shape
 */
export class Rectangle extends baseObj {
	private _width: number;
	private _height: number;

	/**
	 * @constructor
	 * @param width the rectangle's width
	 * @param height the rectangle's height
	 */
	constructor(width: number, height: number);
	/**
	 * @constructor
	 * @param width the rectangle's width
	 * @param height the rectangle's height
	 * @param x the rectangle's x-position
	 * @param y the rectangle's y-position
	 */
	constructor(width: number, height: number, x: number, y: number);
	/**
	 * @constructor
	 * @param width the rectangle's width
	 * @param height the rectangle's height
	 * @param x the rectangle's x-position
	 * @param y the rectangle's y-position
	 * @param color the rectangle's color
	 */
	constructor(
		width: number,
		height: number,
		x: number,
		y: number,
		color: string | CanvasGradient
	);
	/**
	 * @constructor
	 * @param width the rectangle's width
	 * @param height the rectangle's height
	 * @param x the rectangle's x-position
	 * @param y the rectangle's y-position
	 * @param color the rectangle's color
	 * @param rotation the rectangle's rotation in radians
	 */
	constructor(
		width: number,
		height: number,
		x: number,
		y: number,
		color: string | CanvasGradient,
		rotation: number
	);
	/**
	 * @constructor
	 * @param width the rectangle's width
	 * @param height the rectangle's height
	 * @param x the rectangle's x-position
	 * @param y the rectangle's y-position
	 * @param color the rectangle's color
	 * @param rotation the rectangle's rotation in radians
	 * @param outline whether to outline the rectangle
	 */
	constructor(
		width: number,
		height: number,
		x: number,
		y: number,
		color: string | CanvasGradient,
		rotation: number,
		outline: boolean
	);
	/**
	 * @constructor
	 * @param width the rectangle's width
	 * @param height the rectangle's height
	 * @param x the rectangle's x-position
	 * @param y the rectangle's y-position
	 * @param color the rectangle's color
	 * @param rotation the rectangle's rotation in radians
	 * @param outline whether to outline the rectangle
	 * @param outlineColor the outline's color
	 */
	constructor(
		width: number,
		height: number,
		x: number,
		y: number,
		color: string | CanvasGradient,
		rotation: number,
		outline: boolean,
		outlineColor: string
	);
	constructor(
		width: number,
		height: number,
		x?: number,
		y?: number,
		color?: string | CanvasGradient,
		rotation?: number,
		outline?: boolean,
		outlineColor?: string
	) {
		super();
		this.x = x ?? -1000;
		this.y = y ?? -1000;
		this.color = color || "black";
		if (color && !checkColor(color)) {
			console.warn(`Your color of ${color} is not a valid color`);
			this.color = "black";
		}

		this.rotation = rotation || 0;
		this._width = width;
		this._height = height;
		this.outline = outline || false;
		this.outlineColor = outlineColor || "black";
		if (outlineColor && !checkColor(outlineColor)) {
			console.warn(
				`Your outline color of ${outlineColor} is not a valid color`
			);
			this.outlineColor = "black";
		}

		this.type = "Rectangle";
	}

	/**
	 * The rectangle's width
	 */
	public set width(v: number) {
		this._width = v;
	}

	public get width(): number {
		return this._width;
	}

	/**
	 * Returns the width of the rectangle
	 */
	public getWidth(): number {
		return this.width;
	}

	/**
	 * sets the width of the rectangle
	 * @param width the new width
	 */
	public setWidth(width: number): this {
		this.width = width;

		return this;
	}

	/**
	 * The rectangle's height
	 */
	public set height(v: number) {
		this._height = v;
	}

	public get height(): number {
		return this._height;
	}

	/**
	 * Returns the height of the rectangle
	 */
	public getHeight(): number {
		return this.height;
	}

	/**
	 * sets the height of the rectangle
	 * @param height the new height
	 */
	public setHeight(height: number): this {
		this.height = height;

		return this;
	}

	/**
	 * set the width and height of the rectangle
	 * @param width the rectangle's new width
	 * @param height the rectangle's new height
	 */
	public setSize(width: number, height: number): this {
		this._width = width;
		this._height = height;

		return this;
	}

	draw() {
		ctx.save();
		ctx.beginPath();
		ctx.translate(this.x + this._width / 2, this.y + this._height / 2);
		ctx.rotate(this.rotation);
		ctx.rect(-this._width / 2, -this._height / 2, this._width, this._height);
		if (this.outline) {
			ctx.strokeStyle = this.outlineColor;
			ctx.lineWidth = this.outlineWidth;
			ctx.stroke();
		}
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.restore();
	}

	containsPoint(x: number, y: number): boolean {
		x -= this.x + this._width / 2;
		y -= this.y + this._height / 2;

		if (this.rotation !== 0) {
			let point = rotatePoint(x, y, this.rotation);
			x = point.x;
			y = point.y;
		}

		const oW = this.outline ? this.outlineWidth / 2 : 0;

		return (
			-this._width / 2 - oW < x &&
			x < this._width / 2 + oW &&
			-this._height / 2 - oW < y &&
			y < this._height / 2 + oW
		);
	}
}
