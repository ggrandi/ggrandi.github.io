import { Randomizer } from "./index.js";

/**
 * The object that contains all the colors
 */
export class Color extends String {

  /**
   * @constructor
   * @param red {number} the value of red from 0-255
   * @param green {number} the value of green from 0-255
   * @param blue {number} the value of blue from 0-255
   * @param alpha {number} the value of the opacity from 0 to 1
   */
  constructor(red: number, green: number, blue: number, alpha?: number) {
    if (red < 0 || red > 255) {
      console.warn('The red should be between 0 and 255')
    }
    if (green < 0 || green > 255) {
      console.warn('The green should be between 0 and 255')
    }
    if (blue < 0 || blue > 255) {
      console.warn('The blue should be between 0 and 255')
    }
    if (alpha && ( alpha < 0 || alpha > 1)) {
      console.warn('The alpha should be between 0 and 1')
    }
    super(`rgb${alpha ? 'a': ''}(${red}, ${green}, ${blue}${alpha ? `, ${alpha}`:''})`);
  }

  /**
   * The css color black
   * @type {string}
   */
  static get black(): string {
    return "#000000"
  }

  /**
   * The css color silver
   * @type {string}
   */
  static get silver(): string {
    return "#c0c0c0"
  }

  /**
   * The css color gray
   * @type {string}
   */
  static get gray(): string {
    return "#808080"
  }

  /**
   * The css color white
   * @type {string}
   */
  static get white(): string {
    return "#ffffff"
  }

  /**
   * The css color maroon
   * @type {string}
   */
  static get maroon(): string {
    return "#800000"
  }

  /**
   * The css color red
   * @type {string}
   */
  static get red(): string {
    return "#ff0000"
  }

  /**
   * The css color purple
   * @type {string}
   */
  static get purple(): string {
    return "#800080"
  }

  /**
   * The css color fuchsia
   * @type {string}
   */
  static get fuchsia(): string {
    return "#ff00ff"
  }

  /**
   * The css color green
   * @type {string}
   */
  static get green(): string {
    return "#008000"
  }

  /**
   * The css color lime
   * @type {string}
   */
  static get lime(): string {
    return "#00ff00"
  }

  /**
   * The css color olive
   * @type {string}
   */
  static get olive(): string {
    return "#808000"
  }

  /**
   * The css color yellow
   * @type {string}
   */
  static get yellow(): string {
    return "#ffff00"
  }

  /**
   * The css color navy
   * @type {string}
   */
  static get navy(): string {
    return "#000080"
  }

  /**
   * The css color blue
   * @type {string}
   */
  static get blue(): string {
    return "#0000ff"
  }

  /**
   * The css color teal
   * @type {string}
   */
  static get teal(): string {
    return "#008080"
  }

  /**
   * The css color aqua
   * @type {string}
   */
  static get aqua(): string {
    return "#00ffff"
  }

  /**
   * The css color orange
   * @type {string}
   */
  static get orange(): string {
    return "#ffa500"
  }

  /**
   * The css color aliceblue
   * @type {string}
   */
  static get aliceblue(): string {
    return "#f0f8ff"
  }

  /**
   * The css color antiquewhite
   * @type {string}
   */
  static get antiquewhite(): string {
    return "#faebd7"
  }

  /**
   * The css color aquamarine
   * @type {string}
   */
  static get aquamarine(): string {
    return "#7fffd4"
  }

  /**
   * The css color azure
   * @type {string}
   */
  static get azure(): string {
    return "#f0ffff"
  }

  /**
   * The css color beige
   * @type {string}
   */
  static get beige(): string {
    return "#f5f5dc"
  }

  /**
   * The css color bisque
   * @type {string}
   */
  static get bisque(): string {
    return "#ffe4c4"
  }

  /**
   * The css color blanchedalmond
   * @type {string}
   */
  static get blanchedalmond(): string {
    return "#ffebcd"
  }

  /**
   * The css color blueviolet
   * @type {string}
   */
  static get blueviolet(): string {
    return "#8a2be2"
  }

  /**
   * The css color brown
   * @type {string}
   */
  static get brown(): string {
    return "#a52a2a"
  }

  /**
   * The css color burlywood
   * @type {string}
   */
  static get burlywood(): string {
    return "#deb887"
  }

  /**
   * The css color cadetblue
   * @type {string}
   */
  static get cadetblue(): string {
    return "#5f9ea0"
  }

  /**
   * The css color chartreuse
   * @type {string}
   */
  static get chartreuse(): string {
    return "#7fff00"
  }

  /**
   * The css color chocolate
   * @type {string}
   */
  static get chocolate(): string {
    return "#d2691e"
  }

  /**
   * The css color coral
   * @type {string}
   */
  static get coral(): string {
    return "#ff7f50"
  }

  /**
   * The css color cornflowerblue
   * @type {string}
   */
  static get cornflowerblue(): string {
    return "#6495ed"
  }

  /**
   * The css color cornsilk
   * @type {string}
   */
  static get cornsilk(): string {
    return "#fff8dc"
  }

  /**
   * The css color crimson
   * @type {string}
   */
  static get crimson(): string {
    return "#dc143c"
  }

  /**
   * The css color cyan
   * @type {string}
   */
  static get cyan(): string {
    return "#00ffff"
  }

  /**
   * The css color darkblue
   * @type {string}
   */
  static get darkblue(): string {
    return "#00008b"
  }

  /**
   * The css color darkcyan
   * @type {string}
   */
  static get darkcyan(): string {
    return "#008b8b"
  }

  /**
   * The css color darkgoldenrod
   * @type {string}
   */
  static get darkgoldenrod(): string {
    return "#b8860b"
  }

  /**
   * The css color darkgray
   * @type {string}
   */
  static get darkgray(): string {
    return "#a9a9a9"
  }

  /**
   * The css color darkgreen
   * @type {string}
   */
  static get darkgreen(): string {
    return "#006400"
  }

  /**
   * The css color darkgrey
   * @type {string}
   */
  static get darkgrey(): string {
    return "#a9a9a9"
  }

  /**
   * The css color darkkhaki
   * @type {string}
   */
  static get darkkhaki(): string {
    return "#bdb76b"
  }

  /**
   * The css color darkmagenta
   * @type {string}
   */
  static get darkmagenta(): string {
    return "#8b008b"
  }

  /**
   * The css color darkolivegreen
   * @type {string}
   */
  static get darkolivegreen(): string {
    return "#556b2f"
  }

  /**
   * The css color darkorange
   * @type {string}
   */
  static get darkorange(): string {
    return "#ff8c00"
  }

  /**
   * The css color darkorchid
   * @type {string}
   */
  static get darkorchid(): string {
    return "#9932cc"
  }

  /**
   * The css color darkred
   * @type {string}
   */
  static get darkred(): string {
    return "#8b0000"
  }

  /**
   * The css color darksalmon
   * @type {string}
   */
  static get darksalmon(): string {
    return "#e9967a"
  }

  /**
   * The css color darkseagreen
   * @type {string}
   */
  static get darkseagreen(): string {
    return "#8fbc8f"
  }

  /**
   * The css color darkslateblue
   * @type {string}
   */
  static get darkslateblue(): string {
    return "#483d8b"
  }

  /**
   * The css color darkslategray
   * @type {string}
   */
  static get darkslategray(): string {
    return "#2f4f4f"
  }

  /**
   * The css color darkslategrey
   * @type {string}
   */
  static get darkslategrey(): string {
    return "#2f4f4f"
  }

  /**
   * The css color darkturquoise
   * @type {string}
   */
  static get darkturquoise(): string {
    return "#00ced1"
  }

  /**
   * The css color darkviolet
   * @type {string}
   */
  static get darkviolet(): string {
    return "#9400d3"
  }

  /**
   * The css color deeppink
   * @type {string}
   */
  static get deeppink(): string {
    return "#ff1493"
  }

  /**
   * The css color deepskyblue
   * @type {string}
   */
  static get deepskyblue(): string {
    return "#00bfff"
  }

  /**
   * The css color dimgray
   * @type {string}
   */
  static get dimgray(): string {
    return "#696969"
  }

  /**
   * The css color dimgrey
   * @type {string}
   */
  static get dimgrey(): string {
    return "#696969"
  }

  /**
   * The css color dodgerblue
   * @type {string}
   */
  static get dodgerblue(): string {
    return "#1e90ff"
  }

  /**
   * The css color firebrick
   * @type {string}
   */
  static get firebrick(): string {
    return "#b22222"
  }

  /**
   * The css color floralwhite
   * @type {string}
   */
  static get floralwhite(): string {
    return "#fffaf0"
  }

  /**
   * The css color forestgreen
   * @type {string}
   */
  static get forestgreen(): string {
    return "#228b22"
  }

  /**
   * The css color gainsboro
   * @type {string}
   */
  static get gainsboro(): string {
    return "#dcdcdc"
  }

  /**
   * The css color ghostwhite
   * @type {string}
   */
  static get ghostwhite(): string {
    return "#f8f8ff"
  }

  /**
   * The css color gold
   * @type {string}
   */
  static get gold(): string {
    return "#ffd700"
  }

  /**
   * The css color goldenrod
   * @type {string}
   */
  static get goldenrod(): string {
    return "#daa520"
  }

  /**
   * The css color greenyellow
   * @type {string}
   */
  static get greenyellow(): string {
    return "#adff2f"
  }

  /**
   * The css color grey
   * @type {string}
   */
  static get grey(): string {
    return "#808080"
  }

  /**
   * The css color honeydew
   * @type {string}
   */
  static get honeydew(): string {
    return "#f0fff0"
  }

  /**
   * The css color hotpink
   * @type {string}
   */
  static get hotpink(): string {
    return "#ff69b4"
  }

  /**
   * The css color indianred
   * @type {string}
   */
  static get indianred(): string {
    return "#cd5c5c"
  }

  /**
   * The css color indigo
   * @type {string}
   */
  static get indigo(): string {
    return "#4b0082"
  }

  /**
   * The css color ivory
   * @type {string}
   */
  static get ivory(): string {
    return "#fffff0"
  }

  /**
   * The css color khaki
   * @type {string}
   */
  static get khaki(): string {
    return "#f0e68c"
  }

  /**
   * The css color lavender
   * @type {string}
   */
  static get lavender(): string {
    return "#e6e6fa"
  }

  /**
   * The css color lavenderblush
   * @type {string}
   */
  static get lavenderblush(): string {
    return "#fff0f5"
  }

  /**
   * The css color lawngreen
   * @type {string}
   */
  static get lawngreen(): string {
    return "#7cfc00"
  }

  /**
   * The css color lemonchiffon
   * @type {string}
   */
  static get lemonchiffon(): string {
    return "#fffacd"
  }

  /**
   * The css color lightblue
   * @type {string}
   */
  static get lightblue(): string {
    return "#add8e6"
  }

  /**
   * The css color lightcoral
   * @type {string}
   */
  static get lightcoral(): string {
    return "#f08080"
  }

  /**
   * The css color lightcyan
   * @type {string}
   */
  static get lightcyan(): string {
    return "#e0ffff"
  }

  /**
   * The css color lightgoldenrodyellow
   * @type {string}
   */
  static get lightgoldenrodyellow(): string {
    return "#fafad2"
  }

  /**
   * The css color lightgray
   * @type {string}
   */
  static get lightgray(): string {
    return "#d3d3d3"
  }

  /**
   * The css color lightgreen
   * @type {string}
   */
  static get lightgreen(): string {
    return "#90ee90"
  }

  /**
   * The css color lightgrey
   * @type {string}
   */
  static get lightgrey(): string {
    return "#d3d3d3"
  }

  /**
   * The css color lightpink
   * @type {string}
   */
  static get lightpink(): string {
    return "#ffb6c1"
  }

  /**
   * The css color lightsalmon
   * @type {string}
   */
  static get lightsalmon(): string {
    return "#ffa07a"
  }

  /**
   * The css color lightseagreen
   * @type {string}
   */
  static get lightseagreen(): string {
    return "#20b2aa"
  }

  /**
   * The css color lightskyblue
   * @type {string}
   */
  static get lightskyblue(): string {
    return "#87cefa"
  }

  /**
   * The css color lightslategray
   * @type {string}
   */
  static get lightslategray(): string {
    return "#778899"
  }

  /**
   * The css color lightslategrey
   * @type {string}
   */
  static get lightslategrey(): string {
    return "#778899"
  }

  /**
   * The css color lightsteelblue
   * @type {string}
   */
  static get lightsteelblue(): string {
    return "#b0c4de"
  }

  /**
   * The css color lightyellow
   * @type {string}
   */
  static get lightyellow(): string {
    return "#ffffe0"
  }

  /**
   * The css color limegreen
   * @type {string}
   */
  static get limegreen(): string {
    return "#32cd32"
  }

  /**
   * The css color linen
   * @type {string}
   */
  static get linen(): string {
    return "#faf0e6"
  }

  /**
   * The css color magenta
   * @type {string}
   */
  static get magenta(): string {
    return "#ff00ff"
  }

  /**
   * The css color mediumaquamarine
   * @type {string}
   */
  static get mediumaquamarine(): string {
    return "#66cdaa"
  }

  /**
   * The css color mediumblue
   * @type {string}
   */
  static get mediumblue(): string {
    return "#0000cd"
  }

  /**
   * The css color mediumorchid
   * @type {string}
   */
  static get mediumorchid(): string {
    return "#ba55d3"
  }

  /**
   * The css color mediumpurple
   * @type {string}
   */
  static get mediumpurple(): string {
    return "#9370db"
  }

  /**
   * The css color mediumseagreen
   * @type {string}
   */
  static get mediumseagreen(): string {
    return "#3cb371"
  }

  /**
   * The css color mediumslateblue
   * @type {string}
   */
  static get mediumslateblue(): string {
    return "#7b68ee"
  }

  /**
   * The css color mediumspringgreen
   * @type {string}
   */
  static get mediumspringgreen(): string {
    return "#00fa9a"
  }

  /**
   * The css color mediumturquoise
   * @type {string}
   */
  static get mediumturquoise(): string {
    return "#48d1cc"
  }

  /**
   * The css color mediumvioletred
   * @type {string}
   */
  static get mediumvioletred(): string {
    return "#c71585"
  }

  /**
   * The css color midnightblue
   * @type {string}
   */
  static get midnightblue(): string {
    return "#191970"
  }

  /**
   * The css color mintcream
   * @type {string}
   */
  static get mintcream(): string {
    return "#f5fffa"
  }

  /**
   * The css color mistyrose
   * @type {string}
   */
  static get mistyrose(): string {
    return "#ffe4e1"
  }

  /**
   * The css color moccasin
   * @type {string}
   */
  static get moccasin(): string {
    return "#ffe4b5"
  }

  /**
   * The css color navajowhite
   * @type {string}
   */
  static get navajowhite(): string {
    return "#ffdead"
  }

  /**
   * The css color oldlace
   * @type {string}
   */
  static get oldlace(): string {
    return "#fdf5e6"
  }

  /**
   * The css color olivedrab
   * @type {string}
   */
  static get olivedrab(): string {
    return "#6b8e23"
  }

  /**
   * The css color orangered
   * @type {string}
   */
  static get orangered(): string {
    return "#ff4500"
  }

  /**
   * The css color orchid
   * @type {string}
   */
  static get orchid(): string {
    return "#da70d6"
  }

  /**
   * The css color palegoldenrod
   * @type {string}
   */
  static get palegoldenrod(): string {
    return "#eee8aa"
  }

  /**
   * The css color palegreen
   * @type {string}
   */
  static get palegreen(): string {
    return "#98fb98"
  }

  /**
   * The css color paleturquoise
   * @type {string}
   */
  static get paleturquoise(): string {
    return "#afeeee"
  }

  /**
   * The css color palevioletred
   * @type {string}
   */
  static get palevioletred(): string {
    return "#db7093"
  }

  /**
   * The css color papayawhip
   * @type {string}
   */
  static get papayawhip(): string {
    return "#ffefd5"
  }

  /**
   * The css color peachpuff
   * @type {string}
   */
  static get peachpuff(): string {
    return "#ffdab9"
  }

  /**
   * The css color peru
   * @type {string}
   */
  static get peru(): string {
    return "#cd853f"
  }

  /**
   * The css color pink
   * @type {string}
   */
  static get pink(): string {
    return "#ffc0cb"
  }

  /**
   * The css color plum
   * @type {string}
   */
  static get plum(): string {
    return "#dda0dd"
  }

  /**
   * The css color powderblue
   * @type {string}
   */
  static get powderblue(): string {
    return "#b0e0e6"
  }

  /**
   * The css color rosybrown
   * @type {string}
   */
  static get rosybrown(): string {
    return "#bc8f8f"
  }

  /**
   * The css color royalblue
   * @type {string}
   */
  static get royalblue(): string {
    return "#4169e1"
  }

  /**
   * The css color saddlebrown
   * @type {string}
   */
  static get saddlebrown(): string {
    return "#8b4513"
  }

  /**
   * The css color salmon
   * @type {string}
   */
  static get salmon(): string {
    return "#fa8072"
  }

  /**
   * The css color sandybrown
   * @type {string}
   */
  static get sandybrown(): string {
    return "#f4a460"
  }

  /**
   * The css color seagreen
   * @type {string}
   */
  static get seagreen(): string {
    return "#2e8b57"
  }

  /**
   * The css color seashell
   * @type {string}
   */
  static get seashell(): string {
    return "#fff5ee"
  }

  /**
   * The css color sienna
   * @type {string}
   */
  static get sienna(): string {
    return "#a0522d"
  }

  /**
   * The css color skyblue
   * @type {string}
   */
  static get skyblue(): string {
    return "#87ceeb"
  }

  /**
   * The css color slateblue
   * @type {string}
   */
  static get slateblue(): string {
    return "#6a5acd"
  }

  /**
   * The css color slategray
   * @type {string}
   */
  static get slategray(): string {
    return "#708090"
  }

  /**
   * The css color slategrey
   * @type {string}
   */
  static get slategrey(): string {
    return "#708090"
  }

  /**
   * The css color snow
   * @type {string}
   */
  static get snow(): string {
    return "#fffafa"
  }

  /**
   * The css color springgreen
   * @type {string}
   */
  static get springgreen(): string {
    return "#00ff7f"
  }

  /**
   * The css color steelblue
   * @type {string}
   */
  static get steelblue(): string {
    return "#4682b4"
  }

  /**
   * The css color tan
   * @type {string}
   */
  static get tan(): string {
    return "#d2b48c"
  }

  /**
   * The css color thistle
   * @type {string}
   */
  static get thistle(): string {
    return "#d8bfd8"
  }

  /**
   * The css color tomato
   * @type {string}
   */
  static get tomato(): string {
    return "#ff6347"
  }

  /**
   * The css color turquoise
   * @type {string}
   */
  static get turquoise(): string {
    return "#40e0d0"
  }

  /**
   * The css color violet
   * @type {string}
   */
  static get violet(): string {
    return "#ee82ee"
  }

  /**
   * The css color wheat
   * @type {string}
   */
  static get wheat(): string {
    return "#f5deb3"
  }

  /**
   * The css color whitesmoke
   * @type {string}
   */
  static get whitesmoke(): string {
    return "#f5f5f5"
  }

  /**
   * The css color yellowgreen
   * @type {string}
   */
  static get yellowgreen(): string {
    return "#9acd32"
  }

  /**
   * The css color rebeccapurple
   * @type {string}
   */
  static get rebeccapurple(): string {
    return "#663399"
  }

  /**
   * Returns a random shade of Red
   * @returns {string}
   */
  static randomRed(): string {
    return `#${Randomizer.randomHex(32, 255)}1010`
  }

  /**
   * Returns a random shade of Green
   * @returns {string}
   */
  static randomGreen(): string {
    return `#10${Randomizer.randomHex(32, 255)}10`
  }

  /**
   * Returns a random shade of Blue
   * @returns {string}
   */
  static randomBlue(): string {
    return `#1010${Randomizer.randomHex(32, 255)}`
  }
}