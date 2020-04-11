/**
 * The object that contains all the colors
 */
export declare class Color extends String {
    /**
     * @constructor
     * @param red {number} the value of red from 0-255
     * @param green {number} the value of green from 0-255
     * @param blue {number} the value of blue from 0-255
     * @param alpha {number} the value of the opacity from 0 to 1
     */
    constructor(red: number, green: number, blue: number, alpha?: number);
    /**
     * The css color black
     * @type {string}
     */
    static get black(): string;
    /**
     * The css color silver
     * @type {string}
     */
    static get silver(): string;
    /**
     * The css color gray
     * @type {string}
     */
    static get gray(): string;
    /**
     * The css color white
     * @type {string}
     */
    static get white(): string;
    /**
     * The css color maroon
     * @type {string}
     */
    static get maroon(): string;
    /**
     * The css color red
     * @type {string}
     */
    static get red(): string;
    /**
     * The css color purple
     * @type {string}
     */
    static get purple(): string;
    /**
     * The css color fuchsia
     * @type {string}
     */
    static get fuchsia(): string;
    /**
     * The css color green
     * @type {string}
     */
    static get green(): string;
    /**
     * The css color lime
     * @type {string}
     */
    static get lime(): string;
    /**
     * The css color olive
     * @type {string}
     */
    static get olive(): string;
    /**
     * The css color yellow
     * @type {string}
     */
    static get yellow(): string;
    /**
     * The css color navy
     * @type {string}
     */
    static get navy(): string;
    /**
     * The css color blue
     * @type {string}
     */
    static get blue(): string;
    /**
     * The css color teal
     * @type {string}
     */
    static get teal(): string;
    /**
     * The css color aqua
     * @type {string}
     */
    static get aqua(): string;
    /**
     * The css color orange
     * @type {string}
     */
    static get orange(): string;
    /**
     * The css color aliceblue
     * @type {string}
     */
    static get aliceblue(): string;
    /**
     * The css color antiquewhite
     * @type {string}
     */
    static get antiquewhite(): string;
    /**
     * The css color aquamarine
     * @type {string}
     */
    static get aquamarine(): string;
    /**
     * The css color azure
     * @type {string}
     */
    static get azure(): string;
    /**
     * The css color beige
     * @type {string}
     */
    static get beige(): string;
    /**
     * The css color bisque
     * @type {string}
     */
    static get bisque(): string;
    /**
     * The css color blanchedalmond
     * @type {string}
     */
    static get blanchedalmond(): string;
    /**
     * The css color blueviolet
     * @type {string}
     */
    static get blueviolet(): string;
    /**
     * The css color brown
     * @type {string}
     */
    static get brown(): string;
    /**
     * The css color burlywood
     * @type {string}
     */
    static get burlywood(): string;
    /**
     * The css color cadetblue
     * @type {string}
     */
    static get cadetblue(): string;
    /**
     * The css color chartreuse
     * @type {string}
     */
    static get chartreuse(): string;
    /**
     * The css color chocolate
     * @type {string}
     */
    static get chocolate(): string;
    /**
     * The css color coral
     * @type {string}
     */
    static get coral(): string;
    /**
     * The css color cornflowerblue
     * @type {string}
     */
    static get cornflowerblue(): string;
    /**
     * The css color cornsilk
     * @type {string}
     */
    static get cornsilk(): string;
    /**
     * The css color crimson
     * @type {string}
     */
    static get crimson(): string;
    /**
     * The css color cyan
     * @type {string}
     */
    static get cyan(): string;
    /**
     * The css color darkblue
     * @type {string}
     */
    static get darkblue(): string;
    /**
     * The css color darkcyan
     * @type {string}
     */
    static get darkcyan(): string;
    /**
     * The css color darkgoldenrod
     * @type {string}
     */
    static get darkgoldenrod(): string;
    /**
     * The css color darkgray
     * @type {string}
     */
    static get darkgray(): string;
    /**
     * The css color darkgreen
     * @type {string}
     */
    static get darkgreen(): string;
    /**
     * The css color darkgrey
     * @type {string}
     */
    static get darkgrey(): string;
    /**
     * The css color darkkhaki
     * @type {string}
     */
    static get darkkhaki(): string;
    /**
     * The css color darkmagenta
     * @type {string}
     */
    static get darkmagenta(): string;
    /**
     * The css color darkolivegreen
     * @type {string}
     */
    static get darkolivegreen(): string;
    /**
     * The css color darkorange
     * @type {string}
     */
    static get darkorange(): string;
    /**
     * The css color darkorchid
     * @type {string}
     */
    static get darkorchid(): string;
    /**
     * The css color darkred
     * @type {string}
     */
    static get darkred(): string;
    /**
     * The css color darksalmon
     * @type {string}
     */
    static get darksalmon(): string;
    /**
     * The css color darkseagreen
     * @type {string}
     */
    static get darkseagreen(): string;
    /**
     * The css color darkslateblue
     * @type {string}
     */
    static get darkslateblue(): string;
    /**
     * The css color darkslategray
     * @type {string}
     */
    static get darkslategray(): string;
    /**
     * The css color darkslategrey
     * @type {string}
     */
    static get darkslategrey(): string;
    /**
     * The css color darkturquoise
     * @type {string}
     */
    static get darkturquoise(): string;
    /**
     * The css color darkviolet
     * @type {string}
     */
    static get darkviolet(): string;
    /**
     * The css color deeppink
     * @type {string}
     */
    static get deeppink(): string;
    /**
     * The css color deepskyblue
     * @type {string}
     */
    static get deepskyblue(): string;
    /**
     * The css color dimgray
     * @type {string}
     */
    static get dimgray(): string;
    /**
     * The css color dimgrey
     * @type {string}
     */
    static get dimgrey(): string;
    /**
     * The css color dodgerblue
     * @type {string}
     */
    static get dodgerblue(): string;
    /**
     * The css color firebrick
     * @type {string}
     */
    static get firebrick(): string;
    /**
     * The css color floralwhite
     * @type {string}
     */
    static get floralwhite(): string;
    /**
     * The css color forestgreen
     * @type {string}
     */
    static get forestgreen(): string;
    /**
     * The css color gainsboro
     * @type {string}
     */
    static get gainsboro(): string;
    /**
     * The css color ghostwhite
     * @type {string}
     */
    static get ghostwhite(): string;
    /**
     * The css color gold
     * @type {string}
     */
    static get gold(): string;
    /**
     * The css color goldenrod
     * @type {string}
     */
    static get goldenrod(): string;
    /**
     * The css color greenyellow
     * @type {string}
     */
    static get greenyellow(): string;
    /**
     * The css color grey
     * @type {string}
     */
    static get grey(): string;
    /**
     * The css color honeydew
     * @type {string}
     */
    static get honeydew(): string;
    /**
     * The css color hotpink
     * @type {string}
     */
    static get hotpink(): string;
    /**
     * The css color indianred
     * @type {string}
     */
    static get indianred(): string;
    /**
     * The css color indigo
     * @type {string}
     */
    static get indigo(): string;
    /**
     * The css color ivory
     * @type {string}
     */
    static get ivory(): string;
    /**
     * The css color khaki
     * @type {string}
     */
    static get khaki(): string;
    /**
     * The css color lavender
     * @type {string}
     */
    static get lavender(): string;
    /**
     * The css color lavenderblush
     * @type {string}
     */
    static get lavenderblush(): string;
    /**
     * The css color lawngreen
     * @type {string}
     */
    static get lawngreen(): string;
    /**
     * The css color lemonchiffon
     * @type {string}
     */
    static get lemonchiffon(): string;
    /**
     * The css color lightblue
     * @type {string}
     */
    static get lightblue(): string;
    /**
     * The css color lightcoral
     * @type {string}
     */
    static get lightcoral(): string;
    /**
     * The css color lightcyan
     * @type {string}
     */
    static get lightcyan(): string;
    /**
     * The css color lightgoldenrodyellow
     * @type {string}
     */
    static get lightgoldenrodyellow(): string;
    /**
     * The css color lightgray
     * @type {string}
     */
    static get lightgray(): string;
    /**
     * The css color lightgreen
     * @type {string}
     */
    static get lightgreen(): string;
    /**
     * The css color lightgrey
     * @type {string}
     */
    static get lightgrey(): string;
    /**
     * The css color lightpink
     * @type {string}
     */
    static get lightpink(): string;
    /**
     * The css color lightsalmon
     * @type {string}
     */
    static get lightsalmon(): string;
    /**
     * The css color lightseagreen
     * @type {string}
     */
    static get lightseagreen(): string;
    /**
     * The css color lightskyblue
     * @type {string}
     */
    static get lightskyblue(): string;
    /**
     * The css color lightslategray
     * @type {string}
     */
    static get lightslategray(): string;
    /**
     * The css color lightslategrey
     * @type {string}
     */
    static get lightslategrey(): string;
    /**
     * The css color lightsteelblue
     * @type {string}
     */
    static get lightsteelblue(): string;
    /**
     * The css color lightyellow
     * @type {string}
     */
    static get lightyellow(): string;
    /**
     * The css color limegreen
     * @type {string}
     */
    static get limegreen(): string;
    /**
     * The css color linen
     * @type {string}
     */
    static get linen(): string;
    /**
     * The css color magenta
     * @type {string}
     */
    static get magenta(): string;
    /**
     * The css color mediumaquamarine
     * @type {string}
     */
    static get mediumaquamarine(): string;
    /**
     * The css color mediumblue
     * @type {string}
     */
    static get mediumblue(): string;
    /**
     * The css color mediumorchid
     * @type {string}
     */
    static get mediumorchid(): string;
    /**
     * The css color mediumpurple
     * @type {string}
     */
    static get mediumpurple(): string;
    /**
     * The css color mediumseagreen
     * @type {string}
     */
    static get mediumseagreen(): string;
    /**
     * The css color mediumslateblue
     * @type {string}
     */
    static get mediumslateblue(): string;
    /**
     * The css color mediumspringgreen
     * @type {string}
     */
    static get mediumspringgreen(): string;
    /**
     * The css color mediumturquoise
     * @type {string}
     */
    static get mediumturquoise(): string;
    /**
     * The css color mediumvioletred
     * @type {string}
     */
    static get mediumvioletred(): string;
    /**
     * The css color midnightblue
     * @type {string}
     */
    static get midnightblue(): string;
    /**
     * The css color mintcream
     * @type {string}
     */
    static get mintcream(): string;
    /**
     * The css color mistyrose
     * @type {string}
     */
    static get mistyrose(): string;
    /**
     * The css color moccasin
     * @type {string}
     */
    static get moccasin(): string;
    /**
     * The css color navajowhite
     * @type {string}
     */
    static get navajowhite(): string;
    /**
     * The css color oldlace
     * @type {string}
     */
    static get oldlace(): string;
    /**
     * The css color olivedrab
     * @type {string}
     */
    static get olivedrab(): string;
    /**
     * The css color orangered
     * @type {string}
     */
    static get orangered(): string;
    /**
     * The css color orchid
     * @type {string}
     */
    static get orchid(): string;
    /**
     * The css color palegoldenrod
     * @type {string}
     */
    static get palegoldenrod(): string;
    /**
     * The css color palegreen
     * @type {string}
     */
    static get palegreen(): string;
    /**
     * The css color paleturquoise
     * @type {string}
     */
    static get paleturquoise(): string;
    /**
     * The css color palevioletred
     * @type {string}
     */
    static get palevioletred(): string;
    /**
     * The css color papayawhip
     * @type {string}
     */
    static get papayawhip(): string;
    /**
     * The css color peachpuff
     * @type {string}
     */
    static get peachpuff(): string;
    /**
     * The css color peru
     * @type {string}
     */
    static get peru(): string;
    /**
     * The css color pink
     * @type {string}
     */
    static get pink(): string;
    /**
     * The css color plum
     * @type {string}
     */
    static get plum(): string;
    /**
     * The css color powderblue
     * @type {string}
     */
    static get powderblue(): string;
    /**
     * The css color rosybrown
     * @type {string}
     */
    static get rosybrown(): string;
    /**
     * The css color royalblue
     * @type {string}
     */
    static get royalblue(): string;
    /**
     * The css color saddlebrown
     * @type {string}
     */
    static get saddlebrown(): string;
    /**
     * The css color salmon
     * @type {string}
     */
    static get salmon(): string;
    /**
     * The css color sandybrown
     * @type {string}
     */
    static get sandybrown(): string;
    /**
     * The css color seagreen
     * @type {string}
     */
    static get seagreen(): string;
    /**
     * The css color seashell
     * @type {string}
     */
    static get seashell(): string;
    /**
     * The css color sienna
     * @type {string}
     */
    static get sienna(): string;
    /**
     * The css color skyblue
     * @type {string}
     */
    static get skyblue(): string;
    /**
     * The css color slateblue
     * @type {string}
     */
    static get slateblue(): string;
    /**
     * The css color slategray
     * @type {string}
     */
    static get slategray(): string;
    /**
     * The css color slategrey
     * @type {string}
     */
    static get slategrey(): string;
    /**
     * The css color snow
     * @type {string}
     */
    static get snow(): string;
    /**
     * The css color springgreen
     * @type {string}
     */
    static get springgreen(): string;
    /**
     * The css color steelblue
     * @type {string}
     */
    static get steelblue(): string;
    /**
     * The css color tan
     * @type {string}
     */
    static get tan(): string;
    /**
     * The css color thistle
     * @type {string}
     */
    static get thistle(): string;
    /**
     * The css color tomato
     * @type {string}
     */
    static get tomato(): string;
    /**
     * The css color turquoise
     * @type {string}
     */
    static get turquoise(): string;
    /**
     * The css color violet
     * @type {string}
     */
    static get violet(): string;
    /**
     * The css color wheat
     * @type {string}
     */
    static get wheat(): string;
    /**
     * The css color whitesmoke
     * @type {string}
     */
    static get whitesmoke(): string;
    /**
     * The css color yellowgreen
     * @type {string}
     */
    static get yellowgreen(): string;
    /**
     * The css color rebeccapurple
     * @type {string}
     */
    static get rebeccapurple(): string;
    /**
     * Returns a random shade of Red
     * @returns {string}
     */
    static randomRed(): string;
    /**
     * Returns a random shade of Green
     * @returns {string}
     */
    static randomGreen(): string;
    /**
     * Returns a random shade of Blue
     * @returns {string}
     */
    static randomBlue(): string;
}
/**
 * Checks if a string is a color
 * @param {string} color color to check
 * @returns {boolean}
 * @function
 */
export declare const checkColor: (color: string) => boolean;
//# sourceMappingURL=Color.d.ts.map