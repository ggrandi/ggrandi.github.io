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
	constructor(red: number, green: number, blue: number, alpha?: number) {
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
		super(
			`rgb${alpha ? "a" : ""}(${red}, ${green}, ${blue}${
				alpha ? `, ${alpha}` : ""
			})`
		);
	}

	/**
	 * The css color black
	 */
	static get black(): string {
		return "#000000";
	}

	/**
	 * The css color silver
	 */
	static get silver(): string {
		return "#c0c0c0";
	}

	/**
	 * The css color gray
	 */
	static get gray(): string {
		return "#808080";
	}

	/**
	 * The css color white
	 */
	static get white(): string {
		return "#ffffff";
	}

	/**
	 * The css color maroon
	 */
	static get maroon(): string {
		return "#800000";
	}

	/**
	 * The css color red
	 */
	static get red(): string {
		return "#ff0000";
	}

	/**
	 * The css color purple
	 */
	static get purple(): string {
		return "#800080";
	}

	/**
	 * The css color fuchsia
	 */
	static get fuchsia(): string {
		return "#ff00ff";
	}

	/**
	 * The css color green
	 */
	static get green(): string {
		return "#008000";
	}

	/**
	 * The css color lime
	 */
	static get lime(): string {
		return "#00ff00";
	}

	/**
	 * The css color olive
	 */
	static get olive(): string {
		return "#808000";
	}

	/**
	 * The css color yellow
	 */
	static get yellow(): string {
		return "#ffff00";
	}

	/**
	 * The css color navy
	 */
	static get navy(): string {
		return "#000080";
	}

	/**
	 * The css color blue
	 */
	static get blue(): string {
		return "#0000ff";
	}

	/**
	 * The css color teal
	 */
	static get teal(): string {
		return "#008080";
	}

	/**
	 * The css color aqua
	 */
	static get aqua(): string {
		return "#00ffff";
	}

	/**
	 * The css color orange
	 */
	static get orange(): string {
		return "#ffa500";
	}

	/**
	 * The css color aliceblue
	 */
	static get aliceblue(): string {
		return "#f0f8ff";
	}

	/**
	 * The css color antiquewhite
	 */
	static get antiquewhite(): string {
		return "#faebd7";
	}

	/**
	 * The css color aquamarine
	 */
	static get aquamarine(): string {
		return "#7fffd4";
	}

	/**
	 * The css color azure
	 */
	static get azure(): string {
		return "#f0ffff";
	}

	/**
	 * The css color beige
	 */
	static get beige(): string {
		return "#f5f5dc";
	}

	/**
	 * The css color bisque
	 */
	static get bisque(): string {
		return "#ffe4c4";
	}

	/**
	 * The css color blanchedalmond
	 */
	static get blanchedalmond(): string {
		return "#ffebcd";
	}

	/**
	 * The css color blueviolet
	 */
	static get blueviolet(): string {
		return "#8a2be2";
	}

	/**
	 * The css color brown
	 */
	static get brown(): string {
		return "#a52a2a";
	}

	/**
	 * The css color burlywood
	 */
	static get burlywood(): string {
		return "#deb887";
	}

	/**
	 * The css color cadetblue
	 */
	static get cadetblue(): string {
		return "#5f9ea0";
	}

	/**
	 * The css color chartreuse
	 */
	static get chartreuse(): string {
		return "#7fff00";
	}

	/**
	 * The css color chocolate
	 */
	static get chocolate(): string {
		return "#d2691e";
	}

	/**
	 * The css color coral
	 */
	static get coral(): string {
		return "#ff7f50";
	}

	/**
	 * The css color cornflowerblue
	 */
	static get cornflowerblue(): string {
		return "#6495ed";
	}

	/**
	 * The css color cornsilk
	 */
	static get cornsilk(): string {
		return "#fff8dc";
	}

	/**
	 * The css color crimson
	 */
	static get crimson(): string {
		return "#dc143c";
	}

	/**
	 * The css color cyan
	 */
	static get cyan(): string {
		return "#00ffff";
	}

	/**
	 * The css color darkblue
	 */
	static get darkblue(): string {
		return "#00008b";
	}

	/**
	 * The css color darkcyan
	 */
	static get darkcyan(): string {
		return "#008b8b";
	}

	/**
	 * The css color darkgoldenrod
	 */
	static get darkgoldenrod(): string {
		return "#b8860b";
	}

	/**
	 * The css color darkgray
	 */
	static get darkgray(): string {
		return "#a9a9a9";
	}

	/**
	 * The css color darkgreen
	 */
	static get darkgreen(): string {
		return "#006400";
	}

	/**
	 * The css color darkgrey
	 */
	static get darkgrey(): string {
		return "#a9a9a9";
	}

	/**
	 * The css color darkkhaki
	 */
	static get darkkhaki(): string {
		return "#bdb76b";
	}

	/**
	 * The css color darkmagenta
	 */
	static get darkmagenta(): string {
		return "#8b008b";
	}

	/**
	 * The css color darkolivegreen
	 */
	static get darkolivegreen(): string {
		return "#556b2f";
	}

	/**
	 * The css color darkorange
	 */
	static get darkorange(): string {
		return "#ff8c00";
	}

	/**
	 * The css color darkorchid
	 */
	static get darkorchid(): string {
		return "#9932cc";
	}

	/**
	 * The css color darkred
	 */
	static get darkred(): string {
		return "#8b0000";
	}

	/**
	 * The css color darksalmon
	 */
	static get darksalmon(): string {
		return "#e9967a";
	}

	/**
	 * The css color darkseagreen
	 */
	static get darkseagreen(): string {
		return "#8fbc8f";
	}

	/**
	 * The css color darkslateblue
	 */
	static get darkslateblue(): string {
		return "#483d8b";
	}

	/**
	 * The css color darkslategray
	 */
	static get darkslategray(): string {
		return "#2f4f4f";
	}

	/**
	 * The css color darkslategrey
	 */
	static get darkslategrey(): string {
		return "#2f4f4f";
	}

	/**
	 * The css color darkturquoise
	 */
	static get darkturquoise(): string {
		return "#00ced1";
	}

	/**
	 * The css color darkviolet
	 */
	static get darkviolet(): string {
		return "#9400d3";
	}

	/**
	 * The css color deeppink
	 */
	static get deeppink(): string {
		return "#ff1493";
	}

	/**
	 * The css color deepskyblue
	 */
	static get deepskyblue(): string {
		return "#00bfff";
	}

	/**
	 * The css color dimgray
	 */
	static get dimgray(): string {
		return "#696969";
	}

	/**
	 * The css color dimgrey
	 */
	static get dimgrey(): string {
		return "#696969";
	}

	/**
	 * The css color dodgerblue
	 */
	static get dodgerblue(): string {
		return "#1e90ff";
	}

	/**
	 * The css color firebrick
	 */
	static get firebrick(): string {
		return "#b22222";
	}

	/**
	 * The css color floralwhite
	 */
	static get floralwhite(): string {
		return "#fffaf0";
	}

	/**
	 * The css color forestgreen
	 */
	static get forestgreen(): string {
		return "#228b22";
	}

	/**
	 * The css color gainsboro
	 */
	static get gainsboro(): string {
		return "#dcdcdc";
	}

	/**
	 * The css color ghostwhite
	 */
	static get ghostwhite(): string {
		return "#f8f8ff";
	}

	/**
	 * The css color gold
	 */
	static get gold(): string {
		return "#ffd700";
	}

	/**
	 * The css color goldenrod
	 */
	static get goldenrod(): string {
		return "#daa520";
	}

	/**
	 * The css color greenyellow
	 */
	static get greenyellow(): string {
		return "#adff2f";
	}

	/**
	 * The css color grey
	 */
	static get grey(): string {
		return "#808080";
	}

	/**
	 * The css color honeydew
	 */
	static get honeydew(): string {
		return "#f0fff0";
	}

	/**
	 * The css color hotpink
	 */
	static get hotpink(): string {
		return "#ff69b4";
	}

	/**
	 * The css color indianred
	 */
	static get indianred(): string {
		return "#cd5c5c";
	}

	/**
	 * The css color indigo
	 */
	static get indigo(): string {
		return "#4b0082";
	}

	/**
	 * The css color ivory
	 */
	static get ivory(): string {
		return "#fffff0";
	}

	/**
	 * The css color khaki
	 */
	static get khaki(): string {
		return "#f0e68c";
	}

	/**
	 * The css color lavender
	 */
	static get lavender(): string {
		return "#e6e6fa";
	}

	/**
	 * The css color lavenderblush
	 */
	static get lavenderblush(): string {
		return "#fff0f5";
	}

	/**
	 * The css color lawngreen
	 */
	static get lawngreen(): string {
		return "#7cfc00";
	}

	/**
	 * The css color lemonchiffon
	 */
	static get lemonchiffon(): string {
		return "#fffacd";
	}

	/**
	 * The css color lightblue
	 */
	static get lightblue(): string {
		return "#add8e6";
	}

	/**
	 * The css color lightcoral
	 */
	static get lightcoral(): string {
		return "#f08080";
	}

	/**
	 * The css color lightcyan
	 */
	static get lightcyan(): string {
		return "#e0ffff";
	}

	/**
	 * The css color lightgoldenrodyellow
	 */
	static get lightgoldenrodyellow(): string {
		return "#fafad2";
	}

	/**
	 * The css color lightgray
	 */
	static get lightgray(): string {
		return "#d3d3d3";
	}

	/**
	 * The css color lightgreen
	 */
	static get lightgreen(): string {
		return "#90ee90";
	}

	/**
	 * The css color lightgrey
	 */
	static get lightgrey(): string {
		return "#d3d3d3";
	}

	/**
	 * The css color lightpink
	 */
	static get lightpink(): string {
		return "#ffb6c1";
	}

	/**
	 * The css color lightsalmon
	 */
	static get lightsalmon(): string {
		return "#ffa07a";
	}

	/**
	 * The css color lightseagreen
	 */
	static get lightseagreen(): string {
		return "#20b2aa";
	}

	/**
	 * The css color lightskyblue
	 */
	static get lightskyblue(): string {
		return "#87cefa";
	}

	/**
	 * The css color lightslategray
	 */
	static get lightslategray(): string {
		return "#778899";
	}

	/**
	 * The css color lightslategrey
	 */
	static get lightslategrey(): string {
		return "#778899";
	}

	/**
	 * The css color lightsteelblue
	 */
	static get lightsteelblue(): string {
		return "#b0c4de";
	}

	/**
	 * The css color lightyellow
	 */
	static get lightyellow(): string {
		return "#ffffe0";
	}

	/**
	 * The css color limegreen
	 */
	static get limegreen(): string {
		return "#32cd32";
	}

	/**
	 * The css color linen
	 */
	static get linen(): string {
		return "#faf0e6";
	}

	/**
	 * The css color magenta
	 */
	static get magenta(): string {
		return "#ff00ff";
	}

	/**
	 * The css color mediumaquamarine
	 */
	static get mediumaquamarine(): string {
		return "#66cdaa";
	}

	/**
	 * The css color mediumblue
	 */
	static get mediumblue(): string {
		return "#0000cd";
	}

	/**
	 * The css color mediumorchid
	 */
	static get mediumorchid(): string {
		return "#ba55d3";
	}

	/**
	 * The css color mediumpurple
	 */
	static get mediumpurple(): string {
		return "#9370db";
	}

	/**
	 * The css color mediumseagreen
	 */
	static get mediumseagreen(): string {
		return "#3cb371";
	}

	/**
	 * The css color mediumslateblue
	 */
	static get mediumslateblue(): string {
		return "#7b68ee";
	}

	/**
	 * The css color mediumspringgreen
	 */
	static get mediumspringgreen(): string {
		return "#00fa9a";
	}

	/**
	 * The css color mediumturquoise
	 */
	static get mediumturquoise(): string {
		return "#48d1cc";
	}

	/**
	 * The css color mediumvioletred
	 */
	static get mediumvioletred(): string {
		return "#c71585";
	}

	/**
	 * The css color midnightblue
	 */
	static get midnightblue(): string {
		return "#191970";
	}

	/**
	 * The css color mintcream
	 */
	static get mintcream(): string {
		return "#f5fffa";
	}

	/**
	 * The css color mistyrose
	 */
	static get mistyrose(): string {
		return "#ffe4e1";
	}

	/**
	 * The css color moccasin
	 */
	static get moccasin(): string {
		return "#ffe4b5";
	}

	/**
	 * The css color navajowhite
	 */
	static get navajowhite(): string {
		return "#ffdead";
	}

	/**
	 * The css color oldlace
	 */
	static get oldlace(): string {
		return "#fdf5e6";
	}

	/**
	 * The css color olivedrab
	 */
	static get olivedrab(): string {
		return "#6b8e23";
	}

	/**
	 * The css color orangered
	 */
	static get orangered(): string {
		return "#ff4500";
	}

	/**
	 * The css color orchid
	 */
	static get orchid(): string {
		return "#da70d6";
	}

	/**
	 * The css color palegoldenrod
	 */
	static get palegoldenrod(): string {
		return "#eee8aa";
	}

	/**
	 * The css color palegreen
	 */
	static get palegreen(): string {
		return "#98fb98";
	}

	/**
	 * The css color paleturquoise
	 */
	static get paleturquoise(): string {
		return "#afeeee";
	}

	/**
	 * The css color palevioletred
	 */
	static get palevioletred(): string {
		return "#db7093";
	}

	/**
	 * The css color papayawhip
	 */
	static get papayawhip(): string {
		return "#ffefd5";
	}

	/**
	 * The css color peachpuff
	 */
	static get peachpuff(): string {
		return "#ffdab9";
	}

	/**
	 * The css color peru
	 */
	static get peru(): string {
		return "#cd853f";
	}

	/**
	 * The css color pink
	 */
	static get pink(): string {
		return "#ffc0cb";
	}

	/**
	 * The css color plum
	 */
	static get plum(): string {
		return "#dda0dd";
	}

	/**
	 * The css color powderblue
	 */
	static get powderblue(): string {
		return "#b0e0e6";
	}

	/**
	 * The css color rosybrown
	 */
	static get rosybrown(): string {
		return "#bc8f8f";
	}

	/**
	 * The css color royalblue
	 */
	static get royalblue(): string {
		return "#4169e1";
	}

	/**
	 * The css color saddlebrown
	 */
	static get saddlebrown(): string {
		return "#8b4513";
	}

	/**
	 * The css color salmon
	 */
	static get salmon(): string {
		return "#fa8072";
	}

	/**
	 * The css color sandybrown
	 */
	static get sandybrown(): string {
		return "#f4a460";
	}

	/**
	 * The css color seagreen
	 */
	static get seagreen(): string {
		return "#2e8b57";
	}

	/**
	 * The css color seashell
	 */
	static get seashell(): string {
		return "#fff5ee";
	}

	/**
	 * The css color sienna
	 */
	static get sienna(): string {
		return "#a0522d";
	}

	/**
	 * The css color skyblue
	 */
	static get skyblue(): string {
		return "#87ceeb";
	}

	/**
	 * The css color slateblue
	 */
	static get slateblue(): string {
		return "#6a5acd";
	}

	/**
	 * The css color slategray
	 */
	static get slategray(): string {
		return "#708090";
	}

	/**
	 * The css color slategrey
	 */
	static get slategrey(): string {
		return "#708090";
	}

	/**
	 * The css color snow
	 */
	static get snow(): string {
		return "#fffafa";
	}

	/**
	 * The css color springgreen
	 */
	static get springgreen(): string {
		return "#00ff7f";
	}

	/**
	 * The css color steelblue
	 */
	static get steelblue(): string {
		return "#4682b4";
	}

	/**
	 * The css color tan
	 */
	static get tan(): string {
		return "#d2b48c";
	}

	/**
	 * The css color thistle
	 */
	static get thistle(): string {
		return "#d8bfd8";
	}

	/**
	 * The css color tomato
	 */
	static get tomato(): string {
		return "#ff6347";
	}

	/**
	 * The css color turquoise
	 */
	static get turquoise(): string {
		return "#40e0d0";
	}

	/**
	 * The css color violet
	 */
	static get violet(): string {
		return "#ee82ee";
	}

	/**
	 * The css color wheat
	 */
	static get wheat(): string {
		return "#f5deb3";
	}

	/**
	 * The css color whitesmoke
	 */
	static get whitesmoke(): string {
		return "#f5f5f5";
	}

	/**
	 * The css color yellowgreen
	 */
	static get yellowgreen(): string {
		return "#9acd32";
	}

	/**
	 * The css color rebeccapurple
	 */
	static get rebeccapurple(): string {
		return "#663399";
	}

	/**
	 * Returns a random shade of Red
	 */
	static randomRed(): string {
		return `#${Randomizer.randomHex(32, 255)}1010`;
	}

	/**
	 * Returns a random shade of Green
	 */
	static randomGreen(): string {
		return `#10${Randomizer.randomHex(32, 255)}10`;
	}

	/**
	 * Returns a random shade of Blue
	 */
	static randomBlue(): string {
		return `#1010${Randomizer.randomHex(32, 255)}`;
	}
}

/**
 * Checks if a string is a color
 * @param color color to check
 */
export const checkColor = (color: string | CanvasGradient): boolean => {
	const hexColor = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;
	const rgbColor = /^rgb(\((([01]?\d?\d|2([0-4]\d|5[0-5])), ?){2}([01]?\d?\d|2([0-4]\d|5[0-5]))|a\((([01]?\d?\d|2([0-4]\d|5[0-5])), ?){3}(1|0?(.\d+)?))\)$/;
	const hslColor = /^hsl(\((3([0-5]\d|60)|[0-2]?(\d)?\d)(, ?((100|\d?\d)%)){2}|a\((3([0-5]\d|60)|[0-2]?(\d)?\d)(, ?((100|\d?\d)%)){2}, ?(1|0(.\d+)?))\)$/;

	return (
		hexColor.test(color as string) ||
		rgbColor.test(color as string) ||
		hslColor.test(color as string) ||
		Color.hasOwnProperty(color as string) ||
		color instanceof CanvasGradient
	);
};
