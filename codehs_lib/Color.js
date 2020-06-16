/* eslint-disable */
import { Randomizer } from "./index.js";
/**
 * The object that contains all the colors
 */
export class Color extends String {
	/**
	 * @constructor
	 * @param red the value of red from 0-255
	 * @param green the value of green from 0-255
	 * @param blue the value of blue from 0-255
	 * @param alpha the value of the opacity from 0 to 1
	 */
	constructor(red, green, blue, alpha) {
		if (red < 0 || red > 255) {
			console.warn("The red should be between 0 and 255");
		}
		if (green < 0 || green > 255) {
			console.warn("The green should be between 0 and 255");
		}
		if (blue < 0 || blue > 255) {
			console.warn("The blue should be between 0 and 255");
		}
		if (alpha && (alpha < 0 || alpha > 1)) {
			console.warn("The alpha should be between 0 and 1");
		}
		super(`rgb${alpha ? "a" : ""}(${red}, ${green}, ${blue}${alpha ? `, ${alpha}` : ""})`);
	}
	/** Returns a random shade of Red */
	static randomRed() {
		return `#${Randomizer.randomHex(32, 255)}1010`;
	}
	/** Returns a random shade of Green */
	static randomGreen() {
		return `#10${Randomizer.randomHex(32, 255)}10`;
	}
	/** Returns a random shade of Blue */
	static randomBlue() {
		return `#1010${Randomizer.randomHex(32, 255)}`;
	}
}
/** The css color black */
Color.black = "#000000";
/** The css color silver */
Color.silver = "#c0c0c0";
/** The css color gray */
Color.gray = "#808080";
/** The css color white */
Color.white = "#ffffff";
/** The css color maroon */
Color.maroon = "#800000";
/** The css color red */
Color.red = "#ff0000";
/** The css color purple */
Color.purple = "#800080";
/** The css color fuchsia */
Color.fuchsia = "#ff00ff";
/** The css color green */
Color.green = "#008000";
/** The css color lime */
Color.lime = "#00ff00";
/** The css color olive */
Color.olive = "#808000";
/** The css color yellow */
Color.yellow = "#ffff00";
/** The css color navy */
Color.navy = "#000080";
/** The css color blue */
Color.blue = "#0000ff";
/** The css color teal */
Color.teal = "#008080";
/** The css color aqua */
Color.aqua = "#00ffff";
/** The css color orange */
Color.orange = "#ffa500";
/** The css color aliceblue */
Color.aliceblue = "#f0f8ff";
/** The css color antiquewhite */
Color.antiquewhite = "#faebd7";
/** The css color aquamarine */
Color.aquamarine = "#7fffd4";
/** The css color azure */
Color.azure = "#f0ffff";
/** The css color beige */
Color.beige = "#f5f5dc";
/** The css color bisque */
Color.bisque = "#ffe4c4";
/** The css color blanchedalmond */
Color.blanchedalmond = "#ffebcd";
/** The css color blueviolet */
Color.blueviolet = "#8a2be2";
/** The css color brown */
Color.brown = "#a52a2a";
/** The css color burlywood */
Color.burlywood = "#deb887";
/** The css color cadetblue */
Color.cadetblue = "#5f9ea0";
/** The css color chartreuse */
Color.chartreuse = "#7fff00";
/** The css color chocolate */
Color.chocolate = "#d2691e";
/** The css color coral */
Color.coral = "#ff7f50";
/** The css color cornflowerblue */
Color.cornflowerblue = "#6495ed";
/** The css color cornsilk */
Color.cornsilk = "#fff8dc";
/** The css color crimson */
Color.crimson = "#dc143c";
/** The css color cyan */
Color.cyan = "#00ffff";
/** The css color darkblue */
Color.darkblue = "#00008b";
/** The css color darkcyan */
Color.darkcyan = "#008b8b";
/** The css color darkgoldenrod */
Color.darkgoldenrod = "#b8860b";
/** The css color darkgray */
Color.darkgray = "#a9a9a9";
/** The css color darkgreen */
Color.darkgreen = "#006400";
/** The css color darkgrey */
Color.darkgrey = "#a9a9a9";
/** The css color darkkhaki */
Color.darkkhaki = "#bdb76b";
/** The css color darkmagenta */
Color.darkmagenta = "#8b008b";
/** The css color darkolivegreen */
Color.darkolivegreen = "#556b2f";
/** The css color darkorange */
Color.darkorange = "#ff8c00";
/** The css color darkorchid */
Color.darkorchid = "#9932cc";
/** The css color darkred */
Color.darkred = "#8b0000";
/** The css color darksalmon */
Color.darksalmon = "#e9967a";
/** The css color darkseagreen */
Color.darkseagreen = "#8fbc8f";
/** The css color darkslateblue */
Color.darkslateblue = "#483d8b";
/** The css color darkslategray */
Color.darkslategray = "#2f4f4f";
/** The css color darkslategrey */
Color.darkslategrey = "#2f4f4f";
/** The css color darkturquoise */
Color.darkturquoise = "#00ced1";
/** The css color darkviolet */
Color.darkviolet = "#9400d3";
/** The css color deeppink */
Color.deeppink = "#ff1493";
/** The css color deepskyblue */
Color.deepskyblue = "#00bfff";
/** The css color dimgray */
Color.dimgray = "#696969";
/** The css color dimgrey */
Color.dimgrey = "#696969";
/** The css color dodgerblue */
Color.dodgerblue = "#1e90ff";
/** The css color firebrick */
Color.firebrick = "#b22222";
/** The css color floralwhite */
Color.floralwhite = "#fffaf0";
/** The css color forestgreen */
Color.forestgreen = "#228b22";
/** The css color gainsboro */
Color.gainsboro = "#dcdcdc";
/** The css color ghostwhite */
Color.ghostwhite = "#f8f8ff";
/** The css color gold */
Color.gold = "#ffd700";
/** The css color goldenrod */
Color.goldenrod = "#daa520";
/** The css color greenyellow */
Color.greenyellow = "#adff2f";
/** The css color grey */
Color.grey = "#808080";
/** The css color honeydew */
Color.honeydew = "#f0fff0";
/** The css color hotpink */
Color.hotpink = "#ff69b4";
/** The css color indianred */
Color.indianred = "#cd5c5c";
/** The css color indigo */
Color.indigo = "#4b0082";
/** The css color ivory */
Color.ivory = "#fffff0";
/** The css color khaki */
Color.khaki = "#f0e68c";
/** The css color lavender */
Color.lavender = "#e6e6fa";
/** The css color lavenderblush */
Color.lavenderblush = "#fff0f5";
/** The css color lawngreen */
Color.lawngreen = "#7cfc00";
/** The css color lemonchiffon */
Color.lemonchiffon = "#fffacd";
/** The css color lightblue */
Color.lightblue = "#add8e6";
/** The css color lightcoral */
Color.lightcoral = "#f08080";
/** The css color lightcyan */
Color.lightcyan = "#e0ffff";
/** The css color lightgoldenrodyellow */
Color.lightgoldenrodyellow = "#fafad2";
/** The css color lightgray */
Color.lightgray = "#d3d3d3";
/** The css color lightgreen */
Color.lightgreen = "#90ee90";
/** The css color lightgrey */
Color.lightgrey = "#d3d3d3";
/** The css color lightpink */
Color.lightpink = "#ffb6c1";
/** The css color lightsalmon */
Color.lightsalmon = "#ffa07a";
/** The css color lightseagreen */
Color.lightseagreen = "#20b2aa";
/** The css color lightskyblue */
Color.lightskyblue = "#87cefa";
/** The css color lightslategray */
Color.lightslategray = "#778899";
/** The css color lightslategrey */
Color.lightslategrey = "#778899";
/** The css color lightsteelblue */
Color.lightsteelblue = "#b0c4de";
/** The css color lightyellow */
Color.lightyellow = "#ffffe0";
/** The css color limegreen */
Color.limegreen = "#32cd32";
/** The css color linen */
Color.linen = "#faf0e6";
/** The css color magenta */
Color.magenta = "#ff00ff";
/** The css color mediumaquamarine */
Color.mediumaquamarine = "#66cdaa";
/** The css color mediumblue */
Color.mediumblue = "#0000cd";
/** The css color mediumorchid */
Color.mediumorchid = "#ba55d3";
/** The css color mediumpurple */
Color.mediumpurple = "#9370db";
/** The css color mediumseagreen */
Color.mediumseagreen = "#3cb371";
/** The css color mediumslateblue */
Color.mediumslateblue = "#7b68ee";
/** The css color mediumspringgreen */
Color.mediumspringgreen = "#00fa9a";
/** The css color mediumturquoise */
Color.mediumturquoise = "#48d1cc";
/** The css color mediumvioletred */
Color.mediumvioletred = "#c71585";
/** The css color midnightblue */
Color.midnightblue = "#191970";
/** The css color mintcream */
Color.mintcream = "#f5fffa";
/** The css color mistyrose */
Color.mistyrose = "#ffe4e1";
/** The css color moccasin */
Color.moccasin = "#ffe4b5";
/** The css color navajowhite */
Color.navajowhite = "#ffdead";
/** The css color oldlace */
Color.oldlace = "#fdf5e6";
/** The css color olivedrab */
Color.olivedrab = "#6b8e23";
/** The css color orangered */
Color.orangered = "#ff4500";
/** The css color orchid */
Color.orchid = "#da70d6";
/** The css color palegoldenrod */
Color.palegoldenrod = "#eee8aa";
/** The css color palegreen */
Color.palegreen = "#98fb98";
/** The css color paleturquoise */
Color.paleturquoise = "#afeeee";
/** The css color palevioletred */
Color.palevioletred = "#db7093";
/** The css color papayawhip */
Color.papayawhip = "#ffefd5";
/** The css color peachpuff */
Color.peachpuff = "#ffdab9";
/** The css color peru */
Color.peru = "#cd853f";
/** The css color pink */
Color.pink = "#ffc0cb";
/** The css color plum */
Color.plum = "#dda0dd";
/** The css color powderblue */
Color.powderblue = "#b0e0e6";
/** The css color rosybrown */
Color.rosybrown = "#bc8f8f";
/** The css color royalblue */
Color.royalblue = "#4169e1";
/** The css color saddlebrown */
Color.saddlebrown = "#8b4513";
/** The css color salmon */
Color.salmon = "#fa8072";
/** The css color sandybrown */
Color.sandybrown = "#f4a460";
/** The css color seagreen */
Color.seagreen = "#2e8b57";
/** The css color seashell */
Color.seashell = "#fff5ee";
/** The css color sienna */
Color.sienna = "#a0522d";
/** The css color skyblue */
Color.skyblue = "#87ceeb";
/** The css color slateblue */
Color.slateblue = "#6a5acd";
/** The css color slategray */
Color.slategray = "#708090";
/** The css color slategrey */
Color.slategrey = "#708090";
/** The css color snow */
Color.snow = "#fffafa";
/** The css color springgreen */
Color.springgreen = "#00ff7f";
/** The css color steelblue */
Color.steelblue = "#4682b4";
/** The css color tan */
Color.tan = "#d2b48c";
/** The css color thistle */
Color.thistle = "#d8bfd8";
/** The css color tomato */
Color.tomato = "#ff6347";
/** The css color turquoise */
Color.turquoise = "#40e0d0";
/** The css color violet */
Color.violet = "#ee82ee";
/** The css color wheat */
Color.wheat = "#f5deb3";
/** The css color whitesmoke */
Color.whitesmoke = "#f5f5f5";
/** The css color yellowgreen */
Color.yellowgreen = "#9acd32";
/** The css color rebeccapurple */
Color.rebeccapurple = "#663399";
/**
 * Checks if a string is a color
 * @param color color to check
 */
export const checkColor = (color) => {
	const hexColor = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;
	// eslint-disable-next-line max-len
	const rgbColor = /^rgb(\((([01]?\d?\d|2([0-4]\d|5[0-5])), ?){2}([01]?\d?\d|2([0-4]\d|5[0-5]))|a\((([01]?\d?\d|2([0-4]\d|5[0-5])), ?){3}(1|0?(.\d+)?))\)$/;
	// eslint-disable-next-line max-len
	const hslColor = /^hsl(\((3([0-5]\d|60)|[0-2]?(\d)?\d)(, ?((100|\d?\d)%)){2}|a\((3([0-5]\d|60)|[0-2]?(\d)?\d)(, ?((100|\d?\d)%)){2}, ?(1|0(.\d+)?))\)$/;
	return (
		color instanceof CanvasGradient ||
		hexColor.test(color) ||
		rgbColor.test(color) ||
		hslColor.test(color) ||
		Object.prototype.hasOwnProperty.call(Color, color.toLowerCase())
	);
};
