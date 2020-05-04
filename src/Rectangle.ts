import { baseObj, ctx, rotatePoint, checkColor } from './index.js';

/**
 * The rectangle shape
 */
export class Rectangle extends baseObj {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number);
  constructor(width: number, height: number, x: number, y: number);
  constructor(width: number, height: number, x: number, y: number, color: string);
  constructor(width: number, height: number, x: number, y: number, color: string, rotation: number);
  constructor(width: number, height: number, x: number, y: number, color: string, rotation: number, outline: boolean);
  constructor(width: number, height: number, x: number, y: number, color: string, rotation: number, outline: boolean, outlineColor: string);
	/**
	 * @constructor
	 * @param {number} width the rectangle's width
	 * @param {number} height the rectangle's height
	 * @param {number | undefined} x the rectangle's x-position
	 * @param {number | undefined} y the rectangle's y-position
	 * @param {string | undefined} color the rectangle's color
	 * @param {number | undefined} rotation the rectangle's rotation in radians
	 * @param {boolean | undefined} outline whether to outline the rectangle
	 * @param {string | undefined} outlineColor the outline's color
	 */
  constructor(width: number, height: number, x?: number, y?: number, color?: string, rotation?: number, outline?: boolean, outlineColor?: string) {
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
    this.outlineColor = outlineColor || 'black';
    if (outlineColor && !checkColor(outlineColor)) {
      console.warn(`Your outline color of ${outlineColor} is not a valid color`);
      this.outlineColor = "black";
    }

    this.type = 'Rectangle'
  }

	/**
	 * The rectangle's width
	 * @type {number}
	 */
  set width(v: number) {
    this._width = v;
  }

  get width(): number {
    return this._width;
  }

	/**
	 * Returns the width of the rectangle
   * @returns {number}
	 */
  getWidth(): number {
    return this.width;
  }

  /**
	 * Sets the width of the rectangle
   * @param {number} width the new width
   * @returns {number}
	 */
  setWidth(width: number): this {
    this.width = width;

    return this;
  }

	/**
   * The rectangle's height
   * @type {number}
	 */
  set height(v: number) {
    this._height = v;
  }

  get height(): number {
    return this._height;
  }

  /**
   * Returns the height of the rectangle
   * @returns {number}
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Sets the height of the rectangle
   * @param {number} height the new height
   * @returns {number}
   */
  setHeight(height: number): this {
    this.height = height;

    return this;
  }

	/**
	 * Set the width and height of the rectangle
	 * @param {number} width the rectangle's new width
	 * @param {number} height the rectangle's new height
   * @returns {this}
	 */
  setSize(width: number, height: number): this {
    this._width = width;
    this._height = height;

    return this;
  }

  draw() {
    ctx.save()
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

    return -this._width / 2 - oW < x && x < this._width / 2 + oW && -this._height / 2 - oW < y && y < this._height / 2 + oW;
  }
}