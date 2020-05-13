import { baseObj, ctx, rotatePoint } from "./index.js";

const fontRegExp = /^((normal|italic|oblique) )?((normal|small-caps) )?((normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900) )?(\d+)px [\w]+$/;

/**
 * Checks if a font matches a canvas font
 * @param {string} font the font to check
 * @returns {boolean}
 */
export const checkFont = (font: string): boolean => {
	return fontRegExp.test(font);
};

/**
 * The Text shape
 */
export class Text extends baseObj {
	private _txt: string;
	private _font: string;
	private _w: number;
	private _h: number;

	constructor(txt: string, font: string);
	constructor(txt: string, font: string, x: number, y: number);
	/**
	 * @constructor
	 * @param {string} txt the text to display
	 * @param {string} font the font to use as \`${size}px ${fontname}\`
	 * @param {number | undefined} x the x position of the text
	 * @param {number | undefined} y the y position of the text
	 */
	constructor(txt: string, font: string, x?: number, y?: number) {
		super();

		this.x = x ?? -1000;
		this.y = y ?? -1000;

		this._txt = txt;
		font = font.replace(/pt/i, "px");
		if (!checkFont(font)) {
			console.warn(
				`Please pass a valid font to Text. Your font \`${font}\` should match \`\${size}px \${fontname}\``
			);
		}
		this._font = checkFont(font) ? font : "20px Arial";

		ctx.font = this._font;
		this._w = ctx.measureText(txt).width;
		this._h = Number((fontRegExp.exec(font) as RegExpExecArray)[7]);

		this.type = "Text";
	}

	/**
	 * A string that follows the pattern \`${size}px ${fontname}\`
	 * @type {string}
	 */
	set font(v: string) {
		this._font = v;
		v = v.replace(/pt/i, "px");
		this._font = checkFont(v) ? v : "20px Arial";
		if (!checkFont(v)) {
			console.warn(
				`Please pass a valid font to Text. Your font \`${v}\` should match \`\${size}px \${fontname}\``
			);
		}

		ctx.font = this._font;
		this._w = ctx.measureText(this._txt).width;
		this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
	}

	get font(): string {
		return this._font;
	}

	/**
	 * Allows you to set the text's font
	 * @param {string} font the new font of the Text
	 * @returns {this}
	 */
	setFont(font: string): this {
		font = font.replace(/pt/i, "px");
		this._font = checkFont(font) ? font : "20px Arial";
		if (!checkFont(font)) {
			console.warn(
				`Please pass a valid font to Text. Your font \`${font}\` should match \`\${size}px \${fontname}\``
			);
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
	set text(v: string) {
		this._txt = v;

		ctx.font = this._font;
		this._w = ctx.measureText(v).width;
		this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
	}

	get text(): string {
		return this._txt;
	}

	/**
	 * Returns the Text's text
	 * @returns {string}
	 */
	getText(): string {
		return this.text;
	}

	/**
	 * Sets the text to display to `txt`
	 * @param {string} txt the string to display
	 * @returns {this}
	 */
	setText(txt: string): this {
		this.text = txt;

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
	getWidth(): number {
		return this._w;
	}

	/**
	 * The Text's height
	 * @type {number}
	 */
	set height(v: number) {
		this.font = `${v}px ${this._font.split("px ")[1]}`;
	}

	get height(): number {
		return this._h;
	}

	/**
	 * Returns the height of the Text
	 * @returns {number}
	 */
	getHeight(): number {
		return this.height;
	}

	/**
	 * Set the Height for the Text
	 * @param height {number} the new height
	 * @returns {this}
	 */
	setHeight(height: number): this {
		this.font = this.font.replace(/\d+/g, String(height));

		return this;
	}

	draw(): void {
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

	containsPoint(x: number, y: number): boolean {
		x -= this.x + this._w / 2;
		y -= this.y - this._h / 2;
		if (this.rotation !== 0) {
			let point = rotatePoint(x, y, this.rotation);
			x = point.x;
			y = point.y;
		}

		return (
			-this._w / 2 < x && x < this._w / 2 && -this._h / 2 < y && y < this._h / 2
		);
	}
}
