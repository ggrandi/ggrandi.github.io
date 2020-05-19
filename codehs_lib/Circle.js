import { baseObj, ctx, lineDistance, checkColor } from "./index.js";
/**
 * The Circle shape
 */
export class Circle extends baseObj {
    constructor(radius, x, y, color, outline, outlineColor) {
        super();
        this.x = x !== null && x !== void 0 ? x : -1000;
        this.y = y !== null && y !== void 0 ? y : -1000;
        this.color = color !== null && color !== void 0 ? color : "black";
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
        this.type = "Circle";
    }
    /**
     * The circle's radius
     */
    set radius(v) {
        this._radius = Math.abs(v);
    }
    get radius() {
        return this._radius;
    }
    /**
     * The circle's diameter
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
     * sets the Circle's diameter to `diameter`
     * @param diameter the new diameter
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
     * sets the Circle's radius to `radius`
     * @param radius the new radius
     */
    setRadius(radius) {
        this._radius = Math.abs(radius);
        return this;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this._radius, 0, Math.PI * 2);
        if (this.outline) {
            ctx.strokeStyle = this.outlineColor;
            ctx.lineWidth = this.outlineWidth;
            ctx.stroke();
        }
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    containsPoint(x, y) {
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        return lineDistance(this.x, this.y, x, y) < this.radius + oW;
    }
}
