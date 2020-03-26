import { Rectangle, ctx, gcf } from './index.js';
/**
 * The Image from the web shape
 */
export class WebImage extends Rectangle {
    /**
     * Note: the clip is a smaller portion of the image
     * @constructor
     * @param src {string} The images source (url or dataurl)
     * @param width {number} the image's width
     * @param height {number} the image's height
     * @param x {number} the image's x-position
     * @param y {number} the image's y-position
     * @param sx {number} the x-position of the clip
     * @param sy {number} the y-position of the clip
     * @param swidth {number} the width of the clip
     * @param sheight {number} the height of the clip
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
        this._sw = swidth || width || 1;
        this._sh = sheight || height || 1;
    }
    /**
     * The image to display
     * @readonly
     */
    get image() {
        return this._img;
    }
    /**
     * Sets the image to have a width of `width` while maintaining the aspect ratio
     * @param width the new width
     */
    setAspectWidth(width) {
        let { w, h } = this.aspectRatio;
        this.width = width;
        this.height = h / w * width;
    }
    /**
     * Sets the image to have a height of `height` while maintaining the aspect ratio
     * @param height the new height
     */
    setAspectHeight(height) {
        let { w, h } = this.aspectRatio;
        this.height = height;
        this.width = w / h * height;
    }
    /**
     * the aspect ratio of the image
     * @readonly
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
     * @param sx {number} the x-position of the clip
     * @param sy {number} the y-position of the clip
     * @param swidth {number} the width of the clip
     * @param sheight {number} the height of the clip
     */
    setClip(sx, sy, swidth, sheight) {
        this._sx = sx;
        this._sy = sy;
        this._sw = swidth;
        this._sh = sheight;
        return this;
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