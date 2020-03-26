import { baseObj, ctx, rotatePoint, lineDistance } from "./index.js";
/**
 * The Arc shape
 */
export class Arc extends baseObj {
    /**
     * @constructor
     * @param radius {number} the radius of the arc
     * @param startingAngle {number} the starting angle of the arc
     * @param endingAngle {number} the ending angle of the arc
     * @param mode {0 | 1} 0 for degrees, 1 for radians
     * @param x {number | undefined} the x-position of the arc
     * @param y {number | undefined} the y-position of the arc
     * @param counterClockwise {boolean | undefined} whether the arc is counterclockwise or not
     */
    constructor(radius, starting, ending, mode, x, y, counterClockwise) {
        super();
        this.x = x === 0 ? 0 : x || -1000;
        this.y = y === 0 ? 0 : y || -1000;
        this._radius = radius;
        this._sa = mode === 0 ? starting * Math.PI / 180 : starting;
        this._ea = mode === 0 ? ending * Math.PI / 180 : ending;
        this._cc = counterClockwise || false;
        this.type = 'Arc';
    }
    /**
     * The radius of the arc
     * @type {number}
     */
    set radius(v) {
        this._radius = v;
    }
    get radius() {
        return this._radius;
    }
    /**
     * The starting angle of the arc
     * @type {number}
     */
    set startingAngle(v) {
        this._sa = v;
    }
    get startingAngle() {
        return this._sa;
    }
    /**
     * Set the new startingAngle
     * @param angle {number} the new starting angle
     */
    setStartingAngle(angle) {
        this._sa = angle;
        return this;
    }
    /**
     * The ending angle of the arc
     * @type {number}
     */
    set endingAngle(v) {
        this._ea = v;
    }
    get endingAngle() {
        return this._ea;
    }
    /**
     * Whether or not the arc is counterclockwise
     * @type {boolean}
     */
    set counterClockwise(cc) {
        this._cc = cc;
    }
    get counterClockwise() {
        return this._cc;
    }
    /**
     * Set the ending angle of the arc
     * @param angle {number} The new ending angle
     */
    setEndingAngle(angle) {
        this._sa = angle;
        return this;
    }
    /**
     * Set the starting and ending angle of the arc
     * @param startingAngle {number} the new starting angle
     * @param endingAngle {number} the new ending angle
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
            endingAngle: this._ea
        };
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.arc(0, 0, this._radius, this._sa, this._ea, this._cc);
        ctx.fillStyle = this.color;
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        if (this.outline) {
            ctx.strokeStyle = this.outlineColor;
            ctx.lineWidth = this.outlineWidth;
            ctx.stroke();
        }
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
        return this._cc !== (this._sa < this._ea ? (this._sa < A && A < this._ea) : (A > this._sa || A < this._ea));
    }
}
//# sourceMappingURL=Arc.js.map