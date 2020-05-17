/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param x A numeric expression for the x coordinate.
 * @param y A numeric expression for the y coordinate.
 * @param radians A numeric expression for the number of radians it is rotated.
 */
export const rotatePoint = (
	x: number,
	y: number,
	radians: number
): { x: number; y: number } => {
	return {
		x: Math.cos(radians) * x + Math.sin(radians) * y,
		y: -(Math.sin(radians) * x) + Math.cos(radians) * y,
	};
};

/**
 * Returns the distance of a line segment starting at (`x1`, `y1`)
 * and ending at (`x2`, `y2`)
 * @param x1 x-coordinate for the starting point
 * @param y1 y-coordinate for the starting point
 * @param x2 x-coordinate for the ending point
 * @param y2 y-coordinate for the ending point
 */
export const lineDistance = (
	x1: number,
	y1: number,
	x2: number,
	y2: number
): number => {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

/**
 * Returns the greatest common factor between `a` and `b`
 * @param a numerical expression
 * @param b numerical expression
 */
export const gcf = (a: number, b: number): number => {
	a = Math.max(Math.abs(a), Math.abs(b));
	b = Math.min(Math.abs(a), Math.abs(b));
	while (true) {
		if (b == 0) return a;
		a %= b;
		if (a == 0) return b;
		b %= a;
	}
};

/**
 * Returns the mouse's position on the canvas
 * @param e the event to get the position from
 */
export const getPosition = (e: MouseEvent): { x: number; y: number } => {
	let p = e.target as HTMLElement;
	let offsetLeft = 0;
	let offsetTop = 0;

	while (p.offsetParent) {
		offsetLeft += p.offsetLeft;
		offsetTop += p.offsetTop;
		p = p.offsetParent as HTMLElement;
	}

	return {
		x: e.pageX - offsetLeft,
		y: e.pageY - offsetTop,
	};
};

/**
 * Convert a number of degrees to radians
 * @param degrees the degrees to convert
 */
export const toRadians = (degrees: number): number => {
	return (degrees * Math.PI) / 2;
};

/**
 * Convert a number of radians to degrees
 * @param radians the radians to convert
 */
export const toDegrees = (radians: number): number => {
	return (radians * 2) / Math.PI;
};
