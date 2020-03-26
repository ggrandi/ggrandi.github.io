import { baseObj, ctx, rotatePoint } from "./index.js";
/**
 * The oval shape
 */
export class Oval extends baseObj {
    /**
     * @constructor
     * @param width {number} the width of the oval
     * @param height {number} the height of the oval
     * @param x {number | undefined} the x-position
     * @param y {number | undefined} the y-position
     * @param color {string | undefined} the color of the oval
     */
    constructor(width, height, x, y, color) {
        super();
        this._width = width;
        this._height = height;
        this.x = x === 0 ? 0 : x || -1000;
        this.y = y === 0 ? 0 : y || -1000;
        this.color = color || 'black';
    }
    /**
     * The width of the oval
     * @type {number}
     */
    set width(v) {
        this._width = v;
    }
    get width() {
        return this._width;
    }
    /**
     * Set the width of the oval
     * @param width {number} the new width
     */
    setWidth(width) {
        this._width = width;
        return this;
    }
    /**
     * The height of the oval
     * @type {number}
     */
    set height(v) {
        this._height = v;
    }
    get height() {
        return this._height;
    }
    /**
     * Set the height of the oval
     * @param height {number} the new height
     */
    setHeight(v) {
        this._height = v;
        return this;
    }
    /**
     * Set the width and height of the oval
     * @param width {number} the new width of the oval
     * @param height {number} the new height of the oval
     */
    setSize(width, height) {
        this._width = width;
        this._height = height;
        return this;
    }
    draw() {
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
    containsPoint(x, y) {
        x -= this.x;
        y -= this.y;
        if (this.rotation !== 0) {
            let point = rotatePoint(x, y, this.rotation);
            x = point.x;
            y = point.y;
        }
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        return (Math.pow(x, 2)) / Math.pow((this._width / 2 + oW), 2) + (Math.pow(y, 2)) / Math.pow((this._height / 2 + oW), 2) <= 1;
    }
}
//# sourceMappingURL=Oval.js.map