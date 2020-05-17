import { baseObj, ctx, rotatePoint, lineDistance } from "./index.js";

/**
 * The enum to set the arc's mode
 * @enum {number}
 * @readonly
 */
export enum ArcMode {
	/** the value for degrees */
	DEGREES = 0,
	/** the value for radians */
	RADIANS = 1,
}

/**
 * The Arc shape
 */
export class Arc extends baseObj {
	private _radius: number;
	private _sa: number;
	private _ea: number;
	private _cc: boolean;

	/**
	 * @constructor
	 * @param radius the radius of the arc
	 * @param startingAngle the starting angle of the arc
	 * @param endingAngle {number} the ending angle of the arc
	 * @param mode 0 for degrees, 1 for radians
	 */
	constructor(radius: number, starting: number, ending: number, mode: ArcMode);
	/**
	 * @constructor
	 * @param radius the radius of the arc
	 * @param startingAngle the starting angle of the arc
	 * @param endingAngle {number} the ending angle of the arc
	 * @param mode 0 for degrees, 1 for radians
	 * @param x the x-position of the arc
	 * @param y the y-position of the arc
	 */
	constructor(
		radius: number,
		starting: number,
		ending: number,
		mode: ArcMode,
		x: number,
		y: number
	);
	/**
	 * @constructor
	 * @param radius the radius of the arc
	 * @param startingAngle the starting angle of the arc
	 * @param endingAngle {number} the ending angle of the arc
	 * @param mode 0 for degrees, 1 for radians
	 * @param x the x-position of the arc
	 * @param y the y-position of the arc
	 * @param counterClockwise whether the arc is counterclockwise or not
	 */
	constructor(
		radius: number,
		starting: number,
		ending: number,
		mode: ArcMode,
		x: number,
		y: number,
		counterClockwise: boolean
	);
	constructor(
		radius: number,
		startingAngle: number,
		endingAngle: number,
		mode: ArcMode,
		x?: number,
		y?: number,
		counterClockwise?: boolean
	) {
		super();

		this.x = x ?? -1000;
		this.y = y ?? -1000;

		this._radius = radius;

		this._sa =
			mode === ArcMode.DEGREES
				? (startingAngle * Math.PI) / 180
				: startingAngle;
		this._ea =
			mode === ArcMode.DEGREES ? (endingAngle * Math.PI) / 180 : endingAngle;

		this._cc = counterClockwise ?? false;

		this.type = "Arc";
	}

	/**
	 * The radius of the arc
	 */
	public set radius(v: number) {
		this._radius = v;
	}

	public get radius(): number {
		return this._radius;
	}

	/**
	 * The starting angle of the arc
	 */
	public set startingAngle(v: number) {
		this._sa = v;
	}

	public get startingAngle(): number {
		return this._sa;
	}

	/**
	 * Set the new startingAngle
	 * @param angle the new starting angle
	 */
	public setStartingAngle(angle: number): this {
		this._sa = angle;
		return this;
	}

	/**
	 * The ending angle of the arc
	 */
	public set endingAngle(v: number) {
		this._ea = v;
	}

	public get endingAngle(): number {
		return this._ea;
	}

	/**
	 * Whether or not the arc is counterclockwise
	 */
	public set counterClockwise(cc: boolean) {
		this._cc = cc;
	}

	public get counterClockwise(): boolean {
		return this._cc;
	}

	/**
	 * Set the ending angle of the arc
	 * @param angle The new ending angle
	 */
	public setEndingAngle(angle: number): this {
		this._sa = angle;
		return this;
	}

	/**
	 * Set the starting and ending angle of the arc
	 * @param startingAngle the new starting angle
	 * @param endingAngle the new ending angle
	 */
	public setAngle(startingAngle: number, endingAngle: number): this {
		this._sa = startingAngle;
		this._ea = endingAngle;

		return this;
	}

	/**
	 * Returns the angle of the arc
	 */
	public getAngle(): { startingAngle: number; endingAngle: number } {
		return {
			startingAngle: this._sa,
			endingAngle: this._ea,
		};
	}

	public draw(): void {
		ctx.save();
		ctx.beginPath();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);
		ctx.arc(0, 0, this._radius, this._sa, this._ea, this._cc);
		ctx.lineTo(0, 0);
		ctx.closePath();
		if (this.outline) {
			ctx.strokeStyle = this.outlineColor;
			ctx.lineWidth = this.outlineWidth;
			ctx.stroke();
		}
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.restore();
	}

	public containsPoint(x: number, y: number): boolean {
		x -= this.x;
		y -= this.y;

		const oW = this.outline ? this.outlineWidth / 2 : 0;
		const R = lineDistance(0, 0, x, y);
		if (R >= this._radius + oW) {
			return false;
		}

		if (this.rotation !== 0) {
			const point = rotatePoint(x, y, this.rotation);
			x = point.x;
			y = point.y;
		}

		let A = Math.atan2(y, x);
		if (A < 0) {
			A += 2 * Math.PI;
		}

		return (
			this._cc !==
			(this._sa < this._ea
				? this._sa < A && A < this._ea
				: A > this._sa || A < this._ea)
		);
	}
}
