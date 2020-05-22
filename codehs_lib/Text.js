import { baseObj, ctx, rotatePoint } from "./index.js";
// eslint-disable-next-line max-len
const fontRegExp = /^((normal|italic|oblique) )?((normal|small-caps) )?((normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900) )?(\d+)px [\w]+$/;
/**
 * Checks if a font matches a canvas font
 * @param font the font to check
 */
export const checkFont = (font) => {
	return fontRegExp.test(font);
};
/**
 * The Text shape
 */
export class Text extends baseObj {
	constructor(txt, font, x, y) {
		super();
		this.x = x !== null && x !== void 0 ? x : 0;
		this.y = y !== null && y !== void 0 ? y : 0;
		this._txt = txt;
		font = font.replace(/pt/i, "px");
		if (!checkFont(font)) {
			console.warn(`Please pass a valid font to Text. Your font \`${font}\` should match \`\${size}px \${fontname}\``);
		}
		this._font = checkFont(font) ? font : "20px Arial";
		ctx.font = this._font;
		this._w = ctx.measureText(txt).width;
		this._h = Number(fontRegExp.exec(font)[7]);
		this.type = "Text";
	}
	/**
	 * A string that follows the pattern \`${size}px ${fontname}\`
	 */
	set font(v) {
		this._font = v;
		v = v.replace(/pt/i, "px");
		this._font = checkFont(v) ? v : "20px Arial";
		if (!checkFont(v)) {
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
	 * Allows you to public set the text's font
	 * @param font the new font of the Text
	 */
	setFont(font) {
		font = font.replace(/pt/i, "px");
		this._font = checkFont(font) ? font : "20px Arial";
		if (!checkFont(font)) {
			console.warn(`Please pass a valid font to Text. Your font \`${font}\` should match \`\${size}px \${fontname}\``);
		}
		ctx.font = this._font;
		this._w = ctx.measureText(this._txt).width;
		this._h = Number((/(\d)+/g.exec(this._font) || [20])[0]);
		return this;
	}
	/**
	 * The text to display
	 */
	set text(v) {
		this._txt = v;
		ctx.font = this._font;
		this._w = ctx.measureText(v).width;
		this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
	}
	get text() {
		return this._txt;
	}
	/**
	 * Returns the Text's text
	 */
	getText() {
		return this.text;
	}
	/**
	 * Sets the text to display to `txt`
	 * @param txt the string to display
	 */
	setText(txt) {
		this.text = txt;
		return this;
	}
	/**
	 * The width of the Text
	 * @readonly
	 */
	get width() {
		return this._w;
	}
	/**
	 * Returns the Text's width
	 */
	getWidth() {
		return this._w;
	}
	/**
	 * The Text's height
	 */
	set height(v) {
		this.font = `${v}px ${this._font.split("px ")[1]}`;
	}
	get height() {
		return this._h;
	}
	/**
	 * Returns the height of the Text
	 */
	getHeight() {
		return this.height;
	}
	/**
	 * Set the Height for the Text
	 * @param height {number} the new height
	 */
	setHeight(height) {
		this.font = this.font.replace(/\d+/g, String(height));
		return this;
	}
	draw() {
		ctx.save();
		ctx.beginPath();
		ctx.translate(this.x + this._w / 2, this.y - this._h / 2);
		ctx.rotate(this.rotation);
		ctx.font = this._font;
		if (this.outline) {
			ctx.strokeStyle = this.outlineColor;
			ctx.strokeText(this._txt, -this._w / 2, this._h / 2);
		}
		ctx.fillStyle = this.color;
		ctx.fillText(this._txt, -this._w / 2, this._h / 2);
		ctx.restore();
	}
	containsPoint(x, y) {
		x -= this.x + this._w / 2;
		y -= this.y - this._h / 2;
		if (this.rotation !== 0) {
			const point = rotatePoint(x, y, this.rotation);
			x = point.x;
			y = point.y;
		}
		return -this._w / 2 < x && x < this._w / 2 && -this._h / 2 < y && y < this._h / 2;
	}
}
