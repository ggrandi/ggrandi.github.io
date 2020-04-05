import { baseObj, ctx, lineDistance } from './index.js';

/**
 * The Circle shape
 */
export class Circle extends baseObj {
  private _radius: number;

  constructor(radius: number);
  constructor(radius: number, x: number, y: number);
  constructor(radius: number, x: number, y: number, color: string);
  constructor(radius: number, x: number, y: number, color: string, outline: boolean);
  constructor(radius: number, x: number, y: number, color: string, outline: boolean, outlineColor: string);
  /**
   * @constructor
   * @param {number} radius The radius of the circle
   * @param {number | undefined} x The x-position of the Circle
   * @param {number | undefined} y The y-position of the Circle
   * @param {string | undefined} color The color of the circle
   * @param {boolean | undefined} outline whether to draw the outline
   * @param {string | undefined} outlineColor The color of the outline
   */
  constructor(radius: number, x?: number, y?: number, color?: string, outline?: boolean, outlineColor?: string) {
    super();
    this.x = x === 0 ? 0 : Math.abs(x || 0) || -1000;
    this.y = y === 0 ? 0 : Math.abs(y || 0) || -1000;
    this.color = color || "black";
    this.outline = outline || false;
    this.outlineColor = outlineColor || 'black';
    this._radius = radius;
    this.type = 'Circle';
  }

  /**
   * The circle's radius
   * @type {number}
   */
  set radius(v: number) {
    this._radius = Math.abs(v);
  }

  get radius(): number {
    return this._radius;
  }

  /**
   * The circle's diameter
   * @type {number}
   */
  set diameter(v: number) {
    this._radius = Math.abs(2 * v);
  }
  
  get diameter(): number {
    return 2 * this._radius;
  }

  /**
   * Returns the Circle's diameter
   * @returns {number}
   */
  getDiameter(): number {
    return 2 * this._radius;
  }

  /**
   * Sets the Circle's diameter to `diameter`
   * @param {number} diameter the new diameter
   * @returns {this}
   */
  setDiameter(diameter: number): this {
    this._radius = Math.abs(2 * diameter);
    return this
  }

  /**
   * Returns the Circle's radius
   * @returns {number}
   */
  getRadius(): number {
    return this._radius;
  }
  /**
   * Sets the Circle's radius to `radius`
   * @param {number} radius the new radius
   * @returns {this}
   */
  setRadius(r: number): this {
    this._radius = Math.abs(r);
    return this;
  }

  draw(): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this._radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    if (this.outline) {
      ctx.strokeStyle = this.outlineColor;
      ctx.lineWidth = this.outlineWidth;
      ctx.stroke();
    }
  }

  containsPoint(x: number, y: number): boolean {
    const oW = this.outline ? this.outlineWidth / 2: 0;
    return lineDistance(this.x, this.y, x, y) < this.radius + oW;
  }
};