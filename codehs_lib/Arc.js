/* eslint-disable */
import { baseObj, ctx, rotatePoint, lineDistance } from "./index.js";
/**
 * The enum to set the arc's mode
 * @enum {number}
 * @readonly
 */
export var ArcMode;
(function (ArcMode) {
	/** The value for degrees */
	ArcMode[(ArcMode["DEGREES"] = 0)] = "DEGREES";
	/** The value for radians */
	ArcMode[(ArcMode["RADIANS"] = 1)] = "RADIANS";
})(ArcMode || (ArcMode = {}));
/**
 * The Arc shape
 */
export class Arc extends baseObj {
	constructor(radius, startingAngle, endingAngle, mode, x, y, counterClockwise) {
		super();
		this.x = x !== null && x !== void 0 ? x : 0;
		this.y = y !== null && y !== void 0 ? y : 0;
		this._radius = radius;
		this._sa = mode === ArcMode.DEGREES ? (startingAngle * Math.PI) / 180 : startingAngle;
		this._ea = mode === ArcMode.DEGREES ? (endingAngle * Math.PI) / 180 : endingAngle;
		this._cc = counterClockwise !== null && counterClockwise !== void 0 ? counterClockwise : false;
		this.type = "Arc";
	}
	/**
	 * The radius of the arc
	 */
	set radius(v) {
		this._radius = v;
	}
	get radius() {
		return this._radius;
	}
	/**
	 * The starting angle of the arc
	 */
	set startingAngle(v) {
		this._sa = v;
	}
	get startingAngle() {
		return this._sa;
	}
	/**
	 * Set the new startingAngle
	 * @param angle the new starting angle
	 */
	setStartingAngle(angle) {
		this._sa = angle;
		return this;
	}
	/**
	 * The ending angle of the arc
	 */
	set endingAngle(v) {
		this._ea = v;
	}
	get endingAngle() {
		return this._ea;
	}
	/**
	 * Whether or not the arc is counterclockwise
	 */
	set counterClockwise(cc) {
		this._cc = cc;
	}
	get counterClockwise() {
		return this._cc;
	}
	/**
	 * Set the ending angle of the arc
	 * @param angle The new ending angle
	 */
	setEndingAngle(angle) {
		this._sa = angle;
		return this;
	}
	/**
	 * Set the starting and ending angle of the arc
	 * @param startingAngle the new starting angle
	 * @param endingAngle the new ending angle
	 */
	setAngle(startingAngle, endingAngle) {
		this._sa = startingAngle;
		this._ea = endingAngle;
		return this;
	}
	/**
	 * Returns the angle of the arc
	 */
	getAngle() {
		return {
			startingAngle: this._sa,
			endingAngle: this._ea,
		};
	}
	draw() {
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
	containsPoint(x, y) {
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
		return this._cc !== (this._sa < this._ea ? this._sa < A && A < this._ea : A > this._sa || A < this._ea);
	}
}
