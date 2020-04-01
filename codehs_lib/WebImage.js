import { Rectangle, ctx, gcf } from './index.js';
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
export class WebImage extends Rectangle {
    /**
     * Note: the clip is a smaller portion of the image
     * @constructor
     * @param {string} src The images source (url or dataurl)
     * @param {number} width the image's width
     * @param {number} height the image's height
     * @param {number} x the image's x-position
     * @param {number} y the image's y-position
     * @param {number} sx the x-position of the clip
     * @param {number} sy the y-position of the clip
     * @param {number} swidth the width of the clip
     * @param {number} sheight the height of the clip
     */
    constructor(src, width, height, x, y, sx, sy, swidth, sheight) {
        super(width || 0, height || 0, x === 0 ? 0 : x || -1000, y === 0 ? 0 : y || -1000, 'rgba(0, 0, 0, 0)');
        this._img = new Image();
        this._img.src = src;
        this._img.onload = (e) => {
            let { naturalHeight, naturalWidth } = e.srcElement;
            if (this.width === 0) {
                this.width = naturalWidth;
                this.height = naturalHeight;
            }
            if (this._sw === 1) {
                this._sw = naturalWidth;
                this._sh = naturalHeight;
            }
        };
        this.type = 'Image';
        this._sx = sx || 0;
        this._sy = sy || 0;
        this._sw = swidth || 1;
        this._sh = sheight || 1;
    }
    /**
     * The image to display
     * @readonly
   * @type {HTMLImageElement}
     */
    get image() {
        return this._img;
    }
    /**
     * Sets the image to have a width of `width` while maintaining the aspect ratio
     * @param {number} width the new width
   * @returns {this}
     */
    setAspectWidth(width) {
        let { w, h } = this.aspectRatio;
        this.width = width;
        this.height = h / w * width;
        return this;
    }
    /**
     * Sets the image to have a height of `height` while maintaining the aspect ratio
     * @param {number} height the new height
   * @returns {this}
     */
    setAspectHeight(height) {
        let { w, h } = this.aspectRatio;
        this.height = height;
        this.width = w / h * height;
        return this;
    }
    /**
     * the aspect ratio of the image
     * @readonly
   * @type {AspectRatio}
     */
    get aspectRatio() {
        let { naturalWidth, naturalHeight } = this._img;
        console.log(naturalWidth, naturalHeight);
        let f = gcf(naturalWidth, naturalHeight);
        return {
            w: naturalWidth / f,
            h: naturalHeight / f,
        };
    }
    /**
     * Sets a new portion of the image to display
     * @param {number} sx the x-position of the clip
     * @param {number} sy the y-position of the clip
     * @param {number} swidth the width of the clip
     * @param {number} sheight the height of the clip
   * @returns {this}
     */
    setClip(sx, sy, swidth, sheight) {
        this._sx = sx;
        this._sy = sy;
        this._sw = swidth;
        this._sh = sheight;
        return this;
    }
    /**
     * Returns the clip of the image
     * @returns {ImageClip}
     */
    getClip() {
        return { sx: this._sx, sy: this._sy, swidth: this._sw, sheight: this._sh };
    }
    draw() {
        super.draw();
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.rotation);
        ctx.drawImage(this._img, this._sx, this._sy, this._sw, this._sh, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }
}
;
//# sourceMappingURL=WebImage.js.map