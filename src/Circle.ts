import { baseObj, ctx, lineDistance, checkColor } from "./index.js";

/**
 * The Circle shape
 */
export class Circle extends baseObj {
	private _radius: number;

	/**
	 * @constructor
	 * @param radius The radius of the circle
	 */
	constructor(radius: number);
	/**
	 * @constructor
	 * @param radius The radius of the circle
	 * @param x The x-position of the Circle
	 * @param y The y-position of the Circle
	 */
	constructor(radius: number, x: number, y: number);
	/**
	 * @constructor
	 * @param radius The radius of the circle
	 * @param x The x-position of the Circle
	 * @param y The y-position of the Circle
	 * @param color The color of the circle
	 */
	constructor(radius: number, x: number, y: number, color: string);
	/**
	 * @constructor
	 * @param radius The radius of the circle
	 * @param x The x-position of the Circle
	 * @param y The y-position of the Circle
	 * @param color The color of the circle
	 * @param outline whether to draw the outline
	 */
	constructor(
		radius: number,
		x: number,
		y: number,
		color: string | CanvasGradient,
		outline: boolean
	);
	/**
	 * @constructor
	 * @param radius The radius of the circle
	 * @param x The x-position of the Circle
	 * @param y The y-position of the Circle
	 * @param color The color of the circle
	 * @param outline whether to draw the outline
	 * @param outlineColor The color of the outline
	 */
	constructor(
		radius: number,
		x: number,
		y: number,
		color: string | CanvasGradient,
		outline: boolean,
		outlineColor: string
	);
	constructor(
		radius: number,
		x?: number,
		y?: number,
		color?: string | CanvasGradient,
		outline?: boolean,
		outlineColor?: string
	) {
		super();
		this.x = x ?? -1000;
		this.y = y ?? -1000;
		this.color = color ?? "black";
		if (color && !checkColor(color)) {
			console.warn(`The color ${color} is not a valid color`);
			this.color = "black";
		}

		this.outline = outline || false;
		this.outlineColor = outlineColor || "black";
		if (outlineColor && !checkColor(outlineColor)) {
			console.warn(`The outline color ${outlineColor} is not a valid color`);
			this.outlineColor = "black";
		}

		this._radius = radius;
		this.type = "Circle";
	}

	/**
	 * The circle's radius
	 */
	public set radius(v: number) {
		this._radius = Math.abs(v);
	}

	public get radius(): number {
		return this._radius;
	}

	/**
	 * The circle's diameter
	 */
	public set diameter(v: number) {
		this._radius = Math.abs(2 * v);
	}

	public get diameter(): number {
		return 2 * this._radius;
	}

	/**
	 * Returns the Circle's diameter
	 */
	public getDiameter(): number {
		return 2 * this._radius;
	}

	/**
	 * sets the Circle's diameter to `diameter`
	 * @param diameter the new diameter
	 */
	public setDiameter(diameter: number): this {
		this._radius = Math.abs(2 * diameter);
		return this;
	}

	/**
	 * Returns the Circle's radius
	 */
	public getRadius(): number {
		return this._radius;
	}
	/**
	 * sets the Circle's radius to `radius`
	 * @param radius the new radius
	 */
	public setRadius(radius: number): this {
		this._radius = Math.abs(radius);
		return this;
	}

	public draw(): void {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this._radius, 0, Math.PI * 2);
		if (this.outline) {
			ctx.strokeStyle = this.outlineColor;
			ctx.lineWidth = this.outlineWidth;
			ctx.stroke();
		}
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	public containsPoint(x: number, y: number): boolean {
		const oW = this.outline ? this.outlineWidth / 2 : 0;
		return lineDistance(this.x, this.y, x, y) < this.radius + oW;
	}
}
