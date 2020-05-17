import { Rectangle, ctx, gcf } from "./index.js";

/**
 * The Image from the web shape
 */
export class WebImage extends Rectangle {
	private readonly _img: HTMLImageElement;
	private _sx: number;
	private _sy: number;
	private _sw: number;
	private _sh: number;
	private _hasLoaded: boolean = false;

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
	constructor(
		src: string,
		width: number,
		height: number,
		x: number,
		y: number,
		sx: number,
		sy: number,
		swidth: number,
		sheight: number
	);
	constructor(
		src: string,
		width?: number,
		height?: number,
		x?: number,
		y?: number,
		sx?: number,
		sy?: number,
		swidth?: number,
		sheight?: number
	) {
		super(width ?? 0, height ?? 0, x ?? -1000, y ?? -1000, "#00000000");
		this._img = new Image();
		this._img.src = src;

		this._img.onload = (e: Event) => {
			let { naturalHeight, naturalWidth } = e.target as HTMLImageElement;
			this._hasLoaded = true;
			if (this.width === 0) {
				this.width = naturalWidth;
				this.height = naturalHeight;
			}
			if (this._sw === 1) {
				this._sw = naturalWidth;
				this._sh = naturalHeight;
			}
			this.draw();
		};

		this._img.onerror = (err) => {
			console.error(
				`Image with an src of "${src}" failed to load because of the following reason:`,
				err
			);
		};

		this.type = "Image";

		this._sx = sx ?? 0;
		this._sy = sy ?? 0;
		this._sw = swidth ?? 1;
		this._sh = sheight ?? 1;
	}

	/**
	 * The image to display
	 * @readonly
	 */
	public get image(): HTMLImageElement {
		return this._img;
	}

	/**
	 * sets the image to have a width of `width` while maintaining the aspect ratio
	 * @param width the new width
	 */
	public setAspectWidth(width: number): this {
		let { w, h } = this.aspectRatio;

		this.width = width;
		this.height = (h / w) * width;

		return this;
	}

	/**
	 * sets the image to have a height of `height` while maintaining the aspect ratio
	 * @param height the new height
	 */
	public setAspectHeight(height: number): this {
		let { w, h } = this.aspectRatio;

		this.height = height;
		this.width = (w / h) * height;

		return this;
	}

	/**
	 * the aspect ratio of the image
	 * @readonly
	 */
	public get aspectRatio(): { w: number; h: number } {
		let { naturalWidth, naturalHeight } = this._img;

		console.log(naturalWidth, naturalHeight);

		let f = gcf(naturalWidth, naturalHeight);

		return {
			w: naturalWidth / f,
			h: naturalHeight / f,
		};
	}

	/**
	 * sets a new portion of the image to display
	 * @param sx the x-position of the clip
	 * @param sy the y-position of the clip
	 * @param swidth the width of the clip
	 * @param sheight the height of the clip
	 */
	public setClip(sx: number, sy: number, swidth: number, sheight: number): this {
		this._sx = sx;
		this._sy = sy;
		this._sw = swidth;
		this._sh = sheight;

		return this;
	}

	/**
	 * Returns the clip of the image
	 * @returns {Object<{ sx: number, sy: number, swidth: number, sheight: number }>}
	 */
	public getClip(): { sx: number; sy: number; swidth: number; sheight: number } {
		return { sx: this._sx, sy: this._sy, swidth: this._sw, sheight: this._sh };
	}

	draw() {
		super.draw();
		if (this._hasLoaded) {
			ctx.save();
			ctx.beginPath();
			ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
			ctx.rotate(this.rotation);
			ctx.drawImage(
				this._img,
				this._sx,
				this._sy,
				this._sw,
				this._sh,
				-this.width / 2,
				-this.height / 2,
				this.width,
				this.height
			);
			ctx.restore();
		}
	}
}
