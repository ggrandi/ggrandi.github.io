import { Rectangle } from './index.js';
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
     */
    get image(): HTMLImageElement;
    /**
     * Sets the image to have a width of `width` while maintaining the aspect ratio
     * @param width the new width
     */
    setAspectWidth(width: number): void;
    /**
     * Sets the image to have a height of `height` while maintaining the aspect ratio
     * @param height the new height
     */
    setAspectHeight(height: number): void;
    /**
     * the aspect ratio of the image
     * @readonly
     */
    get aspectRatio(): {
        w: number;
        h: number;
    };
    /**
     * Sets a new portion of the image to display
     * @param sx {number} the x-position of the clip
     * @param sy {number} the y-position of the clip
     * @param swidth {number} the width of the clip
     * @param sheight {number} the height of the clip
     */
    setClip(sx: number, sy: number, swidth: number, sheight: number): this;
    draw(): void;
}
//# sourceMappingURL=WebImage.d.ts.map