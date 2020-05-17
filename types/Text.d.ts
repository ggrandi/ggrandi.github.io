import { baseObj } from "./index.js";
/**
 * Checks if a font matches a canvas font
 * @param font the font to check
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
    /**
     * @constructor
     * @param txt the text to display
     * @param font the font to use as \`${size}px ${fontname}\`
     */
    constructor(txt: string, font: string);
    /**
     * @constructor
     * @param txt the text to display
     * @param font the font to use as \`${size}px ${fontname}\`
     * @param x the x position of the text
     * @param y the y position of the text
     */
    constructor(txt: string, font: string, x: number, y: number);
    /**
     * A string that follows the pattern \`${size}px ${fontname}\`
     */
    set font(v: string);
    get font(): string;
    /**
     * Allows you to public set the text's font
     * @param font the new font of the Text
     */
    setFont(font: string): this;
    /**
     * The text to display
     */
    set text(v: string);
    get text(): string;
    /**
     * Returns the Text's text
     */
    getText(): string;
    /**
     * sets the text to display to `txt`
     * @param txt the string to display
     */
    setText(txt: string): this;
    /**
     * The width of the Text
     * @readonly
     */
    get width(): number;
    /**
     * Returns the Text's width
     */
    getWidth(): number;
    /**
     * The Text's height
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the Text
     */
    getHeight(): number;
    /**
     * set the Height for the Text
     * @param height {number} the new height
     */
    setHeight(height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
