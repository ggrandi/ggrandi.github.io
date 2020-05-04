import { baseObj, ctx, rotatePoint, checkColor } from './index.js';
/**
 * The rectangle shape
 */
export class Rectangle extends baseObj {
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
    constructor(width, height, x, y, color, rotation, outline, outlineColor) {
        super();
        this.x = x !== null && x !== void 0 ? x : -1000;
        this.y = y !== null && y !== void 0 ? y : -1000;
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
        this.type = 'Rectangle';
    }
    /**
     * The rectangle's width
     * @type {number}
     */
    set width(v) {
        this._width = v;
    }
    get width() {
        return this._width;
    }
    /**
     * Returns the width of the rectangle
   * @returns {number}
     */
    getWidth() {
        return this.width;
    }
    /**
       * Sets the width of the rectangle
     * @param {number} width the new width
     * @returns {number}
       */
    setWidth(width) {
        this.width = width;
        return this;
    }
    /**
   * The rectangle's height
   * @type {number}
     */
    set height(v) {
        this._height = v;
    }
    get height() {
        return this._height;
    }
    /**
     * Returns the height of the rectangle
     * @returns {number}
     */
    getHeight() {
        return this.height;
    }
    /**
     * Sets the height of the rectangle
     * @param {number} height the new height
     * @returns {number}
     */
    setHeight(height) {
        this.height = height;
        return this;
    }
    /**
     * Set the width and height of the rectangle
     * @param {number} width the rectangle's new width
     * @param {number} height the rectangle's new height
   * @returns {this}
     */
    setSize(width, height) {
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
    containsPoint(x, y) {
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
//# sourceMappingURL=Rectangle.js.map