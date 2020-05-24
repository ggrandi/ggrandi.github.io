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
	/**
	 * The css color black
	 */
	static get black() {
		return "#000000";
	}
	/**
	 * The css color silver
	 */
	static get silver() {
		return "#c0c0c0";
	}
	/**
	 * The css color gray
	 */
	static get gray() {
		return "#808080";
	}
	/**
	 * The css color white
	 */
	static get white() {
		return "#ffffff";
	}
	/**
	 * The css color maroon
	 */
	static get maroon() {
		return "#800000";
	}
	/**
	 * The css color red
	 */
	static get red() {
		return "#ff0000";
	}
	/**
	 * The css color purple
	 */
	static get purple() {
		return "#800080";
	}
	/**
	 * The css color fuchsia
	 */
	static get fuchsia() {
		return "#ff00ff";
	}
	/**
	 * The css color green
	 */
	static get green() {
		return "#008000";
	}
	/**
	 * The css color lime
	 */
	static get lime() {
		return "#00ff00";
	}
	/**
	 * The css color olive
	 */
	static get olive() {
		return "#808000";
	}
	/**
	 * The css color yellow
	 */
	static get yellow() {
		return "#ffff00";
	}
	/**
	 * The css color navy
	 */
	static get navy() {
		return "#000080";
	}
	/**
	 * The css color blue
	 */
	static get blue() {
		return "#0000ff";
	}
	/**
	 * The css color teal
	 */
	static get teal() {
		return "#008080";
	}
	/**
	 * The css color aqua
	 */
	static get aqua() {
		return "#00ffff";
	}
	/**
	 * The css color orange
	 */
	static get orange() {
		return "#ffa500";
	}
	/**
	 * The css color aliceblue
	 */
	static get aliceblue() {
		return "#f0f8ff";
	}
	/**
	 * The css color antiquewhite
	 */
	static get antiquewhite() {
		return "#faebd7";
	}
	/**
	 * The css color aquamarine
	 */
	static get aquamarine() {
		return "#7fffd4";
	}
	/**
	 * The css color azure
	 */
	static get azure() {
		return "#f0ffff";
	}
	/**
	 * The css color beige
	 */
	static get beige() {
		return "#f5f5dc";
	}
	/**
	 * The css color bisque
	 */
	static get bisque() {
		return "#ffe4c4";
	}
	/**
	 * The css color blanchedalmond
	 */
	static get blanchedalmond() {
		return "#ffebcd";
	}
	/**
	 * The css color blueviolet
	 */
	static get blueviolet() {
		return "#8a2be2";
	}
	/**
	 * The css color brown
	 */
	static get brown() {
		return "#a52a2a";
	}
	/**
	 * The css color burlywood
	 */
	static get burlywood() {
		return "#deb887";
	}
	/**
	 * The css color cadetblue
	 */
	static get cadetblue() {
		return "#5f9ea0";
	}
	/**
	 * The css color chartreuse
	 */
	static get chartreuse() {
		return "#7fff00";
	}
	/**
	 * The css color chocolate
	 */
	static get chocolate() {
		return "#d2691e";
	}
	/**
	 * The css color coral
	 */
	static get coral() {
		return "#ff7f50";
	}
	/**
	 * The css color cornflowerblue
	 */
	static get cornflowerblue() {
		return "#6495ed";
	}
	/**
	 * The css color cornsilk
	 */
	static get cornsilk() {
		return "#fff8dc";
	}
	/**
	 * The css color crimson
	 */
	static get crimson() {
		return "#dc143c";
	}
	/**
	 * The css color cyan
	 */
	static get cyan() {
		return "#00ffff";
	}
	/**
	 * The css color darkblue
	 */
	static get darkblue() {
		return "#00008b";
	}
	/**
	 * The css color darkcyan
	 */
	static get darkcyan() {
		return "#008b8b";
	}
	/**
	 * The css color darkgoldenrod
	 */
	static get darkgoldenrod() {
		return "#b8860b";
	}
	/**
	 * The css color darkgray
	 */
	static get darkgray() {
		return "#a9a9a9";
	}
	/**
	 * The css color darkgreen
	 */
	static get darkgreen() {
		return "#006400";
	}
	/**
	 * The css color darkgrey
	 */
	static get darkgrey() {
		return "#a9a9a9";
	}
	/**
	 * The css color darkkhaki
	 */
	static get darkkhaki() {
		return "#bdb76b";
	}
	/**
	 * The css color darkmagenta
	 */
	static get darkmagenta() {
		return "#8b008b";
	}
	/**
	 * The css color darkolivegreen
	 */
	static get darkolivegreen() {
		return "#556b2f";
	}
	/**
	 * The css color darkorange
	 */
	static get darkorange() {
		return "#ff8c00";
	}
	/**
	 * The css color darkorchid
	 */
	static get darkorchid() {
		return "#9932cc";
	}
	/**
	 * The css color darkred
	 */
	static get darkred() {
		return "#8b0000";
	}
	/**
	 * The css color darksalmon
	 */
	static get darksalmon() {
		return "#e9967a";
	}
	/**
	 * The css color darkseagreen
	 */
	static get darkseagreen() {
		return "#8fbc8f";
	}
	/**
	 * The css color darkslateblue
	 */
	static get darkslateblue() {
		return "#483d8b";
	}
	/**
	 * The css color darkslategray
	 */
	static get darkslategray() {
		return "#2f4f4f";
	}
	/**
	 * The css color darkslategrey
	 */
	static get darkslategrey() {
		return "#2f4f4f";
	}
	/**
	 * The css color darkturquoise
	 */
	static get darkturquoise() {
		return "#00ced1";
	}
	/**
	 * The css color darkviolet
	 */
	static get darkviolet() {
		return "#9400d3";
	}
	/**
	 * The css color deeppink
	 */
	static get deeppink() {
		return "#ff1493";
	}
	/**
	 * The css color deepskyblue
	 */
	static get deepskyblue() {
		return "#00bfff";
	}
	/**
	 * The css color dimgray
	 */
	static get dimgray() {
		return "#696969";
	}
	/**
	 * The css color dimgrey
	 */
	static get dimgrey() {
		return "#696969";
	}
	/**
	 * The css color dodgerblue
	 */
	static get dodgerblue() {
		return "#1e90ff";
	}
	/**
	 * The css color firebrick
	 */
	static get firebrick() {
		return "#b22222";
	}
	/**
	 * The css color floralwhite
	 */
	static get floralwhite() {
		return "#fffaf0";
	}
	/**
	 * The css color forestgreen
	 */
	static get forestgreen() {
		return "#228b22";
	}
	/**
	 * The css color gainsboro
	 */
	static get gainsboro() {
		return "#dcdcdc";
	}
	/**
	 * The css color ghostwhite
	 */
	static get ghostwhite() {
		return "#f8f8ff";
	}
	/**
	 * The css color gold
	 */
	static get gold() {
		return "#ffd700";
	}
	/**
	 * The css color goldenrod
	 */
	static get goldenrod() {
		return "#daa520";
	}
	/**
	 * The css color greenyellow
	 */
	static get greenyellow() {
		return "#adff2f";
	}
	/**
	 * The css color grey
	 */
	static get grey() {
		return "#808080";
	}
	/**
	 * The css color honeydew
	 */
	static get honeydew() {
		return "#f0fff0";
	}
	/**
	 * The css color hotpink
	 */
	static get hotpink() {
		return "#ff69b4";
	}
	/**
	 * The css color indianred
	 */
	static get indianred() {
		return "#cd5c5c";
	}
	/**
	 * The css color indigo
	 */
	static get indigo() {
		return "#4b0082";
	}
	/**
	 * The css color ivory
	 */
	static get ivory() {
		return "#fffff0";
	}
	/**
	 * The css color khaki
	 */
	static get khaki() {
		return "#f0e68c";
	}
	/**
	 * The css color lavender
	 */
	static get lavender() {
		return "#e6e6fa";
	}
	/**
	 * The css color lavenderblush
	 */
	static get lavenderblush() {
		return "#fff0f5";
	}
	/**
	 * The css color lawngreen
	 */
	static get lawngreen() {
		return "#7cfc00";
	}
	/**
	 * The css color lemonchiffon
	 */
	static get lemonchiffon() {
		return "#fffacd";
	}
	/**
	 * The css color lightblue
	 */
	static get lightblue() {
		return "#add8e6";
	}
	/**
	 * The css color lightcoral
	 */
	static get lightcoral() {
		return "#f08080";
	}
	/**
	 * The css color lightcyan
	 */
	static get lightcyan() {
		return "#e0ffff";
	}
	/**
	 * The css color lightgoldenrodyellow
	 */
	static get lightgoldenrodyellow() {
		return "#fafad2";
	}
	/**
	 * The css color lightgray
	 */
	static get lightgray() {
		return "#d3d3d3";
	}
	/**
	 * The css color lightgreen
	 */
	static get lightgreen() {
		return "#90ee90";
	}
	/**
	 * The css color lightgrey
	 */
	static get lightgrey() {
		return "#d3d3d3";
	}
	/**
	 * The css color lightpink
	 */
	static get lightpink() {
		return "#ffb6c1";
	}
	/**
	 * The css color lightsalmon
	 */
	static get lightsalmon() {
		return "#ffa07a";
	}
	/**
	 * The css color lightseagreen
	 */
	static get lightseagreen() {
		return "#20b2aa";
	}
	/**
	 * The css color lightskyblue
	 */
	static get lightskyblue() {
		return "#87cefa";
	}
	/**
	 * The css color lightslategray
	 */
	static get lightslategray() {
		return "#778899";
	}
	/**
	 * The css color lightslategrey
	 */
	static get lightslategrey() {
		return "#778899";
	}
	/**
	 * The css color lightsteelblue
	 */
	static get lightsteelblue() {
		return "#b0c4de";
	}
	/**
	 * The css color lightyellow
	 */
	static get lightyellow() {
		return "#ffffe0";
	}
	/**
	 * The css color limegreen
	 */
	static get limegreen() {
		return "#32cd32";
	}
	/**
	 * The css color linen
	 */
	static get linen() {
		return "#faf0e6";
	}
	/**
	 * The css color magenta
	 */
	static get magenta() {
		return "#ff00ff";
	}
	/**
	 * The css color mediumaquamarine
	 */
	static get mediumaquamarine() {
		return "#66cdaa";
	}
	/**
	 * The css color mediumblue
	 */
	static get mediumblue() {
		return "#0000cd";
	}
	/**
	 * The css color mediumorchid
	 */
	static get mediumorchid() {
		return "#ba55d3";
	}
	/**
	 * The css color mediumpurple
	 */
	static get mediumpurple() {
		return "#9370db";
	}
	/**
	 * The css color mediumseagreen
	 */
	static get mediumseagreen() {
		return "#3cb371";
	}
	/**
	 * The css color mediumslateblue
	 */
	static get mediumslateblue() {
		return "#7b68ee";
	}
	/**
	 * The css color mediumspringgreen
	 */
	static get mediumspringgreen() {
		return "#00fa9a";
	}
	/**
	 * The css color mediumturquoise
	 */
	static get mediumturquoise() {
		return "#48d1cc";
	}
	/**
	 * The css color mediumvioletred
	 */
	static get mediumvioletred() {
		return "#c71585";
	}
	/**
	 * The css color midnightblue
	 */
	static get midnightblue() {
		return "#191970";
	}
	/**
	 * The css color mintcream
	 */
	static get mintcream() {
		return "#f5fffa";
	}
	/**
	 * The css color mistyrose
	 */
	static get mistyrose() {
		return "#ffe4e1";
	}
	/**
	 * The css color moccasin
	 */
	static get moccasin() {
		return "#ffe4b5";
	}
	/**
	 * The css color navajowhite
	 */
	static get navajowhite() {
		return "#ffdead";
	}
	/**
	 * The css color oldlace
	 */
	static get oldlace() {
		return "#fdf5e6";
	}
	/**
	 * The css color olivedrab
	 */
	static get olivedrab() {
		return "#6b8e23";
	}
	/**
	 * The css color orangered
	 */
	static get orangered() {
		return "#ff4500";
	}
	/**
	 * The css color orchid
	 */
	static get orchid() {
		return "#da70d6";
	}
	/**
	 * The css color palegoldenrod
	 */
	static get palegoldenrod() {
		return "#eee8aa";
	}
	/**
	 * The css color palegreen
	 */
	static get palegreen() {
		return "#98fb98";
	}
	/**
	 * The css color paleturquoise
	 */
	static get paleturquoise() {
		return "#afeeee";
	}
	/**
	 * The css color palevioletred
	 */
	static get palevioletred() {
		return "#db7093";
	}
	/**
	 * The css color papayawhip
	 */
	static get papayawhip() {
		return "#ffefd5";
	}
	/**
	 * The css color peachpuff
	 */
	static get peachpuff() {
		return "#ffdab9";
	}
	/**
	 * The css color peru
	 */
	static get peru() {
		return "#cd853f";
	}
	/**
	 * The css color pink
	 */
	static get pink() {
		return "#ffc0cb";
	}
	/**
	 * The css color plum
	 */
	static get plum() {
		return "#dda0dd";
	}
	/**
	 * The css color powderblue
	 */
	static get powderblue() {
		return "#b0e0e6";
	}
	/**
	 * The css color rosybrown
	 */
	static get rosybrown() {
		return "#bc8f8f";
	}
	/**
	 * The css color royalblue
	 */
	static get royalblue() {
		return "#4169e1";
	}
	/**
	 * The css color saddlebrown
	 */
	static get saddlebrown() {
		return "#8b4513";
	}
	/**
	 * The css color salmon
	 */
	static get salmon() {
		return "#fa8072";
	}
	/**
	 * The css color sandybrown
	 */
	static get sandybrown() {
		return "#f4a460";
	}
	/**
	 * The css color seagreen
	 */
	static get seagreen() {
		return "#2e8b57";
	}
	/**
	 * The css color seashell
	 */
	static get seashell() {
		return "#fff5ee";
	}
	/**
	 * The css color sienna
	 */
	static get sienna() {
		return "#a0522d";
	}
	/**
	 * The css color skyblue
	 */
	static get skyblue() {
		return "#87ceeb";
	}
	/**
	 * The css color slateblue
	 */
	static get slateblue() {
		return "#6a5acd";
	}
	/**
	 * The css color slategray
	 */
	static get slategray() {
		return "#708090";
	}
	/**
	 * The css color slategrey
	 */
	static get slategrey() {
		return "#708090";
	}
	/**
	 * The css color snow
	 */
	static get snow() {
		return "#fffafa";
	}
	/**
	 * The css color springgreen
	 */
	static get springgreen() {
		return "#00ff7f";
	}
	/**
	 * The css color steelblue
	 */
	static get steelblue() {
		return "#4682b4";
	}
	/**
	 * The css color tan
	 */
	static get tan() {
		return "#d2b48c";
	}
	/**
	 * The css color thistle
	 */
	static get thistle() {
		return "#d8bfd8";
	}
	/**
	 * The css color tomato
	 */
	static get tomato() {
		return "#ff6347";
	}
	/**
	 * The css color turquoise
	 */
	static get turquoise() {
		return "#40e0d0";
	}
	/**
	 * The css color violet
	 */
	static get violet() {
		return "#ee82ee";
	}
	/**
	 * The css color wheat
	 */
	static get wheat() {
		return "#f5deb3";
	}
	/**
	 * The css color whitesmoke
	 */
	static get whitesmoke() {
		return "#f5f5f5";
	}
	/**
	 * The css color yellowgreen
	 */
	static get yellowgreen() {
		return "#9acd32";
	}
	/**
	 * The css color rebeccapurple
	 */
	static get rebeccapurple() {
		return "#663399";
	}
	/**
	 * Returns a random shade of Red
	 */
	static randomRed() {
		return `#${Randomizer.randomHex(32, 255)}1010`;
	}
	/**
	 * Returns a random shade of Green
	 */
	static randomGreen() {
		return `#10${Randomizer.randomHex(32, 255)}10`;
	}
	/**
	 * Returns a random shade of Blue
	 */
	static randomBlue() {
		return `#1010${Randomizer.randomHex(32, 255)}`;
	}
}
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
