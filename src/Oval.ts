import { baseObj, ctx, rotatePoint, checkColor } from "./index.js";

/**
 * The oval shape
 */
export class Oval extends baseObj {
	private _width: number;
	private _height: number;

	/**
	 * @constructor
	 * @param width the width of the oval
	 * @param height the height of the oval
	 */
	constructor(width: number, height: number);
	/**
	 * @constructor
	 * @param width the width of the oval
	 * @param height the height of the oval
	 * @param x the x-position
	 * @param y the y-position
	 */
	constructor(width: number, height: number, x: number, y: number);
	/**
	 * @constructor
	 * @param width the width of the oval
	 * @param height the height of the oval
	 * @param x the x-position
	 * @param y the y-position
	 * @param color the color of the oval
	 */
	constructor(
		width: number,
		height: number,
		x: number,
		y: number,
		color: string | CanvasGradient
	);
	constructor(
		width: number,
		height: number,
		x?: number,
		y?: number,
		color?: string | CanvasGradient
	) {
		super();

		this._width = width;
		this._height = height;

		this.x = x ?? -1000;
		this.y = y ?? -1000;

		this.color = color || "black";
		if (color && !checkColor(color)) {
			console.warn(`Your color of ${color} is not a valid color`);
			this.color = "black";
		}
	}

	/**
	 * The width of the oval
	 */
	public set width(v: number) {
		this._width = v;
	}

	public get width(): number {
		return this._width;
	}

	/**
	 * set the width of the oval
	 * @param width the new width
	 */
	public setWidth(width: number): this {
		this._width = width;

		return this;
	}

	/**
	 * The height of the oval
	 */
	public set height(v: number) {
		this._height = v;
	}

	public get height(): number {
		return this._height;
	}

	/**
	 * set the height of the oval
	 * @param height the new height
	 */
	public setHeight(height: number): this {
		this._height = height;

		return this;
	}

	/**
	 * set the width and height of the oval
	 * @param width the new width of the oval
	 * @param height the new height of the oval
	 */
	public setSize(width: number, height: number): this {
		this._width = width;
		this._height = height;

		return this;
	}

	public draw(): void {
		ctx.beginPath();
		ctx.ellipse(
			this.x,
			this.y,
			this._width / 2,
			this._height / 2,
			this.rotation,
			0,
			2 * Math.PI
		);
		ctx.fillStyle = this.color;
		if (this.outline) {
			ctx.strokeStyle = this.outlineColor;
			ctx.lineWidth = this.outlineWidth;
			ctx.stroke();
		}
		ctx.fill();
	}

	public containsPoint(x: number, y: number): boolean {
		x -= this.x;
		y -= this.y;
		if (this.rotation !== 0) {
			let point = rotatePoint(x, y, this.rotation);
			x = point.x;
			y = point.y;
		}

		const oW = this.outline ? this.outlineWidth / 2 : 0;

		return (
			x ** 2 / (this._width / 2 + oW) ** 2 +
				y ** 2 / (this._height / 2 + oW) ** 2 <=
			1
		);
	}
}
