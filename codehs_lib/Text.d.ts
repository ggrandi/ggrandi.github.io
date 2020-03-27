import { baseObj } from './index.js';
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
     * A string that follows the pattern `"${Size}px ${Fontname}"`
     * @type {string}
     */
    set font(v: string);
    get font(): string;
    /**
     * The text to display
     * @type {string}
     */
    set txt(v: string);
    get txt(): string;
    /**
     * Sets the text to display to `txt`
     * @param txt {string} the string to display
     */
    setTxt(txt: string): this;
    /**
     * The width of the Text
     * @readonly
     */
    get width(): number;
    /**
     * Returns the Text's width
     */
    getWidth(): number;
    /**The Text's height */
    set height(v: number);
    get height(): number;
    /**
     * Set the Height for the Text
     * @param height {number} the new height
     */
    setHeight(height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}
//# sourceMappingURL=Text.d.ts.map