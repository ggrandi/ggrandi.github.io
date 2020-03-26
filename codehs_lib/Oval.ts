import { baseObj, ctx, rotatePoint } from "./index.js";

/**
 * The oval shape
 */
export class Oval extends baseObj {
  private _width: number;
  private _height: number;
  
  constructor(width: number, height: number);
  constructor(width: number, height: number, x: number, y: number);
  constructor(width: number, height: number, x: number, y: number, color: string);
  /**
   * @constructor
   * @param width {number} the width of the oval
   * @param height {number} the height of the oval
   * @param x {number | undefined} the x-position
   * @param y {number | undefined} the y-position
   * @param color {string | undefined} the color of the oval
   */
  constructor(width: number, height: number, x?: number, y?: number, color?: string) {
    super();

    this._width = width;
    this._height = height;
    
    this.x = x === 0 ? 0: x || -1000;
    this.y = y === 0 ? 0: y || -1000;

    this.color = color || 'black';
  }

  /**
   * The width of the oval
   * @type {number}
   */
  set width(v: number) {
    this._width = v;
  }

  get width(): number {
    return this._width;
  }

  /**
   * Set the width of the oval
   * @param width {number} the new width
   */
  setWidth(width: number): this {
    this._width = width;

    return this;
  }

  /**
   * The height of the oval
   * @type {number}
   */
  set height(v: number) {
    this._height = v;
  }

   get height(): number {
    return this._height;
  }

  /**
   * Set the height of the oval
   * @param height {number} the new height
   */
  setHeight(v: number): this {
    this._height = v;
    
    return this;
  }

  /**
   * Set the width and height of the oval
   * @param width {number} the new width of the oval
   * @param height {number} the new height of the oval
   */
  setSize(width: number, height: number): this {
    this._width = width;
    this._height = height;

    return this;
  }

  draw(): void {
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this._width / 2, this._height / 2, this.rotation, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    if (this.outline) {
      ctx.strokeStyle = this.outlineColor;
      ctx.lineWidth = this.outlineWidth;
      ctx.stroke();
    }
    ctx.fill();
  }

  containsPoint(x: number, y: number): boolean {
    x -= this.x;
    y -= this.y;
    if (this.rotation !== 0) {
      let point = rotatePoint(x, y, this.rotation);
      x = point.x;
      y = point.y;
    }
    
    const oW = this.outline ? this.outlineWidth / 2: 0;
    
    return (x ** 2) / (this._width / 2 + oW) ** 2 + (y ** 2) / (this._height / 2 + oW) ** 2 <= 1;
  }

}