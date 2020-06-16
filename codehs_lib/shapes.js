/* eslint-disable */
import { canvas, ctx } from "./index.js";
/**
 * All the shapes that have been added to the screen
 */
export const shapes = [];
/** @ignore */
let up = true;
/**
 * Set whether the canvas should update every frame
 * @param update whether to redraw each frame;
 */
export const setUpdate = (update) => {
	up = update;
};
/**
 * Removes all objects from the canvas
 */
export const removeAll = () => {
	shapes.splice(0, shapes.length);
};
/**
 * Adds all shapes that are passed to the screen
 * @param args any number of shapes to add
 */
export const add = (...args) => {
	setTimeout(() => {
		args.forEach((e) => {
			if (shapes.indexOf(e) !== -1) {
				remove(e);
			}
			shapes.push(e);
			if (!up) {
				e.draw();
			}
		});
	});
};
/**
 * Removes all shapes that are passed from the screen
 * @param args shapes to remove
 */
export const remove = (...args) => {
	setTimeout(() => {
		args.forEach((e) => {
			if (shapes.indexOf(e) !== -1) {
				shapes.splice(shapes.indexOf(e), 1);
			}
		});
	});
};
/**
 * Returns the shape that is on the top at the point (`x`, `y`)
 * @param x x-coordinate to check
 * @param y y-coordinate to check
 */
export const getElementAt = (x, y) => {
	let elem = undefined;
	for (const s of shapes) {
		if (s.containsPoint(x, y)) {
			elem = s;
		}
	}
	return elem;
};
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param x the x-value to find, if set to true it returns all the shapes onscreen
 * @param y the y-value to check
 */
export function getElementsAt(x, y) {
	var _a;
	if (x === true) {
		return shapes;
	}
	if ((_a = x) === null || _a === void 0 ? void 0 : _a.x) {
		y = x.y;
		x = x.x;
	}
	const elems = [];
	shapes.forEach((i) => {
		if (i.containsPoint(x, y)) {
			elems.push(i);
		}
	});
	return elems.reverse();
}
/**
 * Check if an element has been added to the screen
 * @param e The element to check
 */
export function isElementAdded(e) {
	return shapes.includes(e);
}
/** The location of the screen, useful for screen scrolling */
export const camera = {
	x: 0,
	y: 0,
	setPosition(x, y) {
		if (typeof x === "number") {
			this.x = x;
			this.y = y;
		} else {
			this.x = x.x;
			this.y = x.y;
		}
	},
};
/** Moves the camera horizontally */
export function moveHorizontal(dx) {
	camera.x += dx;
}
/** Moves the camera vertically */
export function moveVertical(dx) {
	camera.x += dx;
}
const main = () => {
	if (up) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		shapes
			.filter((s) => s.still || s.onScreen())
			.sort((s) => (s.still ? 1 : 0))
			.forEach((s) => s.draw());
	}
	requestAnimationFrame(main);
};
main();
