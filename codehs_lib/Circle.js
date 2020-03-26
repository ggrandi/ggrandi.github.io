import { baseObj, ctx, lineDistance } from './index.js';
/**
 * The Circle shape
 */
export class Circle extends baseObj {
    /**
     * @constructor
     * @param radius {number} The radius of the circle
     * @param x {number | undefined} The x-position of the Circle
     * @param y {number | undefined} The y-position of the Circle
     * @param color {string | undefined} The color of the circle
     * @param outline {boolean | undefined} whether to draw the outline
     * @param outlineColor {string | undefined} The color of the outline
     */
    constructor(radius, x, y, color, outline, outlineColor) {
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
    set radius(v) {
        this._radius = Math.abs(v);
    }
    get radius() {
        return this._radius;
    }
    /**
     * The circle's diameter
     * @type {number}
     */
    set diameter(v) {
        this._radius = Math.abs(2 * v);
    }
    get diameter() {
        return 2 * this._radius;
    }
    /**
     * Returns the Circle's diameter
     */
    getDiameter() {
        return 2 * this._radius;
    }
    /**
     * Sets the Circle's diameter to `diameter`
     * @param diameter {number} the new diameter
     */
    setDiameter(diameter) {
        this._radius = Math.abs(2 * diameter);
        return this;
    }
    /**
     * Returns the Circle's radius
     */
    getRadius() {
        return this._radius;
    }
    /**
     * Sets the Circle's radius to `radius`
     * @param radius {number} the new radius
     */
    setRadius(r) {
        this._radius = Math.abs(r);
        return this;
    }
    draw() {
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
    containsPoint(x, y) {
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        return lineDistance(this.x, this.y, x, y) < this.radius + oW;
    }
}
;
//# sourceMappingURL=Circle.js.map