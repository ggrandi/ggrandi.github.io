import { baseObj } from "./index.js";
/**
 * Checks if a font matches a canvas font
 * @param {string} font the font to check
 * @returns {boolean}
 */
export declare const checkFont: (font: string) => boolean;
/**
 * The Text shape
 */
export declare class Text extends baseObj {
    private _txt;
    private _font;
    private _w;
    private _h;
    constructor(txt: string, font: string);
    constructor(txt: string, font: string, x: number, y: number);
    /**
     * A string that follows the pattern \`${size}px ${fontname}\`
     * @type {string}
     */
    set font(v: string);
    get font(): string;
    /**
     * Allows you to set the text's font
     * @param {string} font the new font of the Text
     * @returns {this}
     */
    setFont(font: string): this;
    /**
     * The text to display
     * @type {string}
     */
    set text(v: string);
    get text(): string;
    /**
     * Returns the Text's text
     * @returns {string}
     */
    getText(): string;
    /**
     * Sets the text to display to `txt`
     * @param {string} txt the string to display
     * @returns {this}
     */
    setText(txt: string): this;
    /**
     * The width of the Text
     * @readonly
     * @type {number}
     */
    get width(): number;
    /**
     * Returns the Text's width
     * @returns {number}
     */
    getWidth(): number;
    /**
     * The Text's height
     * @type {number}
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the Text
     * @returns {number}
     */
    getHeight(): number;
    /**
     * Set the Height for the Text
     * @param height {number} the new height
     * @returns {this}
     */
    setHeight(height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
