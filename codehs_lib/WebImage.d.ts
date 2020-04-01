import { Rectangle } from './index.js';
/**
 * @typedef AspectRatio
 * @property {number} w the width
 * @property {number} h the height
 */
/**
 * @typedef ImageClip
 * @property {number} sx
 * @property {number} sy
 * @property {number} swidth
 * @property {number} sheight
 */
/**
 * The Image from the web shape
 */
export declare class WebImage extends Rectangle {
    private _img;
    private _sx;
    private _sy;
    private _sw;
    private _sh;
    constructor(src: string);
    constructor(src: string, width: number, height: number);
    constructor(src: string, width: number, height: number, x: number, y: number);
    constructor(src: string, width: number, height: number, x: number, y: number, sx: number, sy: number, swidth: number, sheight: number);
    /**
     * The image to display
     * @readonly
   * @type {HTMLImageElement}
     */
    get image(): HTMLImageElement;
    /**
     * Sets the image to have a width of `width` while maintaining the aspect ratio
     * @param {number} width the new width
   * @returns {this}
     */
    setAspectWidth(width: number): this;
    /**
     * Sets the image to have a height of `height` while maintaining the aspect ratio
     * @param {number} height the new height
   * @returns {this}
     */
    setAspectHeight(height: number): this;
    /**
     * the aspect ratio of the image
     * @readonly
   * @type {AspectRatio}
     */
    get aspectRatio(): {
        w: number;
        h: number;
    };
    /**
     * Sets a new portion of the image to display
     * @param {number} sx the x-position of the clip
     * @param {number} sy the y-position of the clip
     * @param {number} swidth the width of the clip
     * @param {number} sheight the height of the clip
   * @returns {this}
     */
    setClip(sx: number, sy: number, swidth: number, sheight: number): this;
    /**
     * Returns the clip of the image
     * @returns {ImageClip}
     */
    getClip(): {
        sx: number;
        sy: number;
        swidth: number;
        sheight: number;
    };
    draw(): void;
}
//# sourceMappingURL=WebImage.d.ts.map