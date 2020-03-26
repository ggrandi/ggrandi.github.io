const outputDiv = "output";
/** 
 * The canvas everything is drawn to
 * @type {HTMLCanvasElement}
 */
export const canvas: HTMLCanvasElement = createCanvas(outputDiv);
/**
 * The console println logs to
 * @type {HTMLPreElement}
 */
export const output: HTMLPreElement = createConsole(outputDiv);
/** 
 * The canvas context 
 * @type {CanvasRenderingContext2D}
 */
export const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
if (!ctx) {
	throw new Error("Error creating canvas context. Check that the canvas is loading correctly.")
}

/**
 * Returns the width of the canvas
 * @function
 */
export const getWidth = (): number => canvas.width;

/**
 * Returns the height of the canvas
 * @function
 */
export const getHeight = (): number => canvas.height;

function createCanvas(divId: string): HTMLCanvasElement {
	let div: HTMLElement | null = document.getElementById(divId);

	if (!div) {
		throw new Error(`Cannot find any element with the id of "${divId}". Please create that div in your html file.`);
	}

	let c: HTMLCanvasElement = document.createElement("canvas");
	c.height = 480;
	c.width = 400;
	c.id = "game";
	div.append(c);

	return c;
}

function createConsole(divId: string): HTMLPreElement {
	let div: HTMLElement | null = document.getElementById(divId);

	if (!div) {
		throw new Error(`Cannot find any element with the id of "${divId}". Please create that div in your html file.`);
	}

	let p: HTMLPreElement = document.createElement("pre");
	p.id = "console";
	div.append(p);

	return p;
}