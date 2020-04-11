import { baseObj, ctx, lineDistance, checkColor } from './index.js';
/**
 * The Circle shape
 */
export class Circle extends baseObj {
    /**
     * @constructor
     * @param {number} radius The radius of the circle
     * @param {number | undefined} x The x-position of the Circle
     * @param {number | undefined} y The y-position of the Circle
     * @param {string | undefined} color The color of the circle
     * @param {boolean | undefined} outline whether to draw the outline
     * @param {string | undefined} outlineColor The color of the outline
     */
    constructor(radius, x, y, color, outline, outlineColor) {
        super();
        this.x = x === 0 ? 0 : Math.abs(x || 0) || -1000;
        this.y = y === 0 ? 0 : Math.abs(y || 0) || -1000;
        this.color = color || "black";
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
     * @returns {number}
     */
    getDiameter() {
        return 2 * this._radius;
    }
    /**
     * Sets the Circle's diameter to `diameter`
     * @param {number} diameter the new diameter
     * @returns {this}
     */
    setDiameter(diameter) {
        this._radius = Math.abs(2 * diameter);
        return this;
    }
    /**
     * Returns the Circle's radius
     * @returns {number}
     */
    getRadius() {
        return this._radius;
    }
    /**
     * Sets the Circle's radius to `radius`
     * @param {number} radius the new radius
     * @returns {this}
     */
    setRadius(radius) {
        this._radius = Math.abs(radius);
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
//# sourceMappingURL=Circle.js.map