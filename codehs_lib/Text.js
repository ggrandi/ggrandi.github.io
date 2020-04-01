import { baseObj, ctx, rotatePoint } from './index.js';
/**
 * The Text shape
 */
export class Text extends baseObj {
    /**
     * @constructor
     * @param {string} txt the text to display
     * @param {string} font the font to use as \`${size}px ${fontname}\`
     * @param {number | undefined} x the x position of the text
     * @param {number | undefined} y the y position of the text
     */
    constructor(txt, font, x, y) {
        super();
        this.x = x === 0 ? 0 : x || -1000;
        this.y = y === 0 ? 0 : y || -1000;
        this._txt = txt;
        if (!/(\d)+px (\w)+/g.test(font)) {
            console.warn(`Please pass a valid font to Text. Your font \`${font}\` should match \`\${size}px \${fontname}\``);
        }
        this._font = /(\d)+px (\w)+/g.test(font) ? font : '20px Arial';
        ctx.font = this._font;
        this._w = ctx.measureText(txt).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
        this.type = 'Text';
    }
    /**
     * A string that follows the pattern \`${size}px ${fontname}\`
     * @type {string}
     */
    set font(v) {
        this._font = v;
        this._font = /(\d)+px (\w)+/g.test(v) ? v : '20px Arial';
        if (!/(\d)+px (\w)+/g.test(v)) {
            console.warn(`Please pass a valid font to Text. Your font \`${v}\` should match \`\${size}px \${fontname}\``);
        }
        ctx.font = this._font;
        this._w = ctx.measureText(this._txt).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
    }
    get font() {
        return this._font;
    }
    /**
     * Allows you to set the text's font
     * @param {string} font the new font of the Text
     * @returns {this}
     */
    setFont(font) {
        this._font = /(\d)+px (\w)+/g.test(font) ? font : '20px Arial';
        if (!/(\d)+px (\w)+/g.test(font)) {
            console.warn(`Please pass a valid font to Text. Your font \`${font}\` should match \`\${size}px \${fontname}\``);
        }
        ctx.font = this._font;
        this._w = ctx.measureText(this._txt).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [20])[0]);
        return this;
    }
    /**
     * The text to display
     * @type {string}
     */
    set txt(v) {
        this._txt = v;
        ctx.font = this._font;
        this._w = ctx.measureText(this._txt).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
    }
    get txt() {
        return this._txt;
    }
    /**
     * Sets the text to display to `txt`
     * @param {string} txt the string to display
     * @returns {this}
     */
    setTxt(txt) {
        this._txt = txt;
        ctx.font = this._font;
        this._w = ctx.measureText(this._txt).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
        return this;
    }
    /**
     * The width of the Text
     * @readonly
     * @type {number}
     */
    get width() {
        return this._w;
    }
    /**
     * Returns the Text's width
     * @returns {number}
     */
    getWidth() {
        return this._w;
    }
    /**
     * The Text's height
     * @type {number}
     */
    set height(v) {
        this.font = `${v}px ${this._font.split('px ')[1]}`;
    }
    get height() {
        return this._h;
    }
    /**
     * Set the Height for the Text
     * @param height {number} the new height
     * @returns {this}
     */
    setHeight(height) {
        this.font = `${height}px ${this._font.split('px ')[1]}`;
        return this;
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x + this._w / 2, this.y - this._h / 2);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.font = this._font;
        ctx.fillText(this._txt, -this._w / 2, this._h / 2);
        if (this.outline) {
            ctx.strokeStyle = this.outlineColor;
            ctx.strokeText(this._txt, -this._w / 2, this._h / 2);
        }
        ctx.restore();
    }
    containsPoint(x, y) {
        x -= this.x + this._w / 2;
        y -= this.y - this._h / 2;
        if (this.rotation !== 0) {
            let point = rotatePoint(x, y, this.rotation);
            x = point.x;
            y = point.y;
        }
        return -this._w / 2 < x && x < this._w / 2 && -this._h / 2 < y && y < this._h / 2;
    }
}
//# sourceMappingURL=Text.js.map