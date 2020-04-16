import { baseObj, ctx, rotatePoint, lineDistance, checkColor } from './index.js';

/**
 * The Line shape
 */
export class Line extends baseObj {
  private _x1: number;
  private _y1: number;
  private _x2: number;
  private _y2: number;
  private _width: number;

  constructor(x1: number, y1: number, x2: number, y2: number);
  constructor(x1: number, y1: number, x2: number, y2: number, width: number);
  constructor(x1: number, y1: number, x2: number, y2: number, width: number, color: string);
	/**
	 * @constructor
	 * @param {number} x1 x-coordinate for the starting point
	 * @param {number} y1 y-coordinate for the starting point
	 * @param {number} x2 x-coordinate for the ending point
	 * @param {number} y2 y-coordinate for the ending point
	 * @param {number | undefined} width the width of the line
	 * @param {string | undefined} color the color of the line
	 */
  constructor(x1: number, y1: number, x2: number, y2: number, width?: number, color?: string) {
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
    this.type = 'Line';
  }

  toString(): string {
    return `${this.type} from (${this.x1}, ${this.y1}) to (${this.x2}, ${this.y2})`;
  }

	/**
	 * Set the width of the line
	 * @param {number} w the new width
   * @returns {this}
	 */
  setLineWidth(w: number): this {
    this._width = w;

    return this;
  }

	/**
	 * X-coordinate for the starting point
	 * @type {number}
	 */
  set x1(v: number) {
    this._x1 = v;
  }

  get x1(): number {
    return this._x1;
  }

	/**
	 * X-coordinate for the ending point
	 * @type {number}
	 */
  set x2(v: number) {
    this._x2 = v;
  }

  get x2(): number {
    return this._x2;
  }

	/**
	 * Y-coordinate for the starting point
	 * @type {number}
	 */
  set y1(v: number) {
    this._y1 = v;
  }

  get y1(): number {
    return this._y1;
  }

	/**
	 * Y-coordinate for the ending point
	 * @type {number}
	 */
  set y2(v: number) {
    this._y2 = v;
  }

  get y2(): number {
    return this._y2;
  }

	/**
	 * Set the starting point
	 * @param {number} x the x-coordinate for the starting point
	 * @param {number} y the y-coordinate for the starting point
   * @returns {this}
	 */
  setStartpoint(x: number, y: number): this {
    this._x1 = x;
    this._y1 = y;

    return this;
  }

	/**
	 * Set the ending point
	 * @param {number} x the x-coordinate for the ending point
	 * @param {number} y the y-coordinate for the ending point
   * @returns {this}
	 */
  setEndpoint(x: number, y: number): this {
    this._x2 = x;
    this._y2 = y;

    return this;
  }

	/**
	 * Sets the Line's to the start position (`x1`, `y1`)
	 * @param {number} x1 new x-coordinate of the shape
	 * @param {number} y1 new y-coordinate of the shape
   * @returns {this}
	 */
  setPosition(x1: number, y1: number): this {
    return this.setStartpoint(x1, y1);
  }

  draw() {
    if (this.outline) {
      ctx.save();
      ctx.beginPath();
      const w = this._width + 2 * this.outlineWidth;
      const h = lineDistance(this.x1, this.y1, this.x2, this.y2) + 2 * this.outlineWidth;
      ctx.translate(Math.min(this._x1, this._x2) + Math.abs(this._x1 - this._x2) / 2, Math.min(this._y1, this._y2) + Math.abs(this._y1 - this._y2) / 2);
      ctx.rotate(Math.atan2(-(this.x2 - this.x1), this.y2 - this.y1));
      ctx.fillStyle = this.outlineColor;
      ctx.rect(- w / 2, - h / 2, w, h);
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

  containsPoint(x: number, y: number): boolean {
    let r = Math.atan2(-(this.x2 - this.x1), this.y2 - this.y1);

    let point = rotatePoint(x - this.x1, y - this.y1, r);
    x = point.x;
    y = point.y;

    let length = lineDistance(this.x1, this.y1, this.x2, this.y2);

    const oW = this.outline ? this.outlineWidth : 0;

    return -this._width / 2 - oW < x && x < this._width / 2 + oW && - oW < y && y < length + oW;
  }
}