import { Rectangle } from "./index.js";
/**
 * The Image from the web shape
 */
export declare class WebImage extends Rectangle {
    private readonly _img;
    private _sx;
    private _sy;
    private _sw;
    private _sh;
    private _hasLoaded;
    /**
     * Note: the clip is a smaller portion of the image
     * @constructor
     * @param src The images source (url or dataurl)
     */
    constructor(src: string);
    /**
     * Note: the clip is a smaller portion of the image
     * @constructor
     * @param src The images source (url or dataurl)
     * @param width the image's width
     * @param height the image's height
     */
    constructor(src: string, width: number, height: number);
    /**
     * Note: the clip is a smaller portion of the image
     * @constructor
     * @param src The images source (url or dataurl)
     * @param width the image's width
     * @param height the image's height
     * @param x the image's x-position
     * @param y the image's y-position
     */
    constructor(src: string, width: number, height: number, x: number, y: number);
    /**
     * Note: the clip is a smaller portion of the image
     * @constructor
     * @param src The images source (url or dataurl)
     * @param width the image's width
     * @param height the image's height
     * @param x the image's x-position
     * @param y the image's y-position
     * @param sx the x-position of the clip
     * @param sy the y-position of the clip
     * @param swidth the width of the clip
     * @param sheight the height of the clip
     */
    constructor(src: string, width: number, height: number, x: number, y: number, sx: number, sy: number, swidth: number, sheight: number);
    /**
     * The image to display
     * @readonly
     */
    get image(): HTMLImageElement;
    /**
     * sets the image to have a width of `width` while maintaining the aspect ratio
     * @param width the new width
     */
    setAspectWidth(width: number): this;
    /**
     * sets the image to have a height of `height` while maintaining the aspect ratio
     * @param height the new height
     */
    setAspectHeight(height: number): this;
    /**
     * the aspect ratio of the image
     * @readonly
     */
    get aspectRatio(): {
        w: number;
        h: number;
    };
    /**
     * sets a new portion of the image to display
     * @param sx the x-position of the clip
     * @param sy the y-position of the clip
     * @param swidth the width of the clip
     * @param sheight the height of the clip
     */
    setClip(sx: number, sy: number, swidth: number, sheight: number): this;
    /**
     * Returns the clip of the image
     * @returns {Object<{ sx: number, sy: number, swidth: number, sheight: number }>}
     */
    getClip(): {
        sx: number;
        sy: number;
        swidth: number;
        sheight: number;
    };
    draw(): void;
}
