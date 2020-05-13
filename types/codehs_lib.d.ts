/**
 * The enum to set the arc's mode
 * @enum {number}
 * @readonly
 * @property {number<{0}>} DEGREES the value for degrees
 * @property {number<{1}>} RADIANS the value for radians
 */
export declare enum ArcMode {
    DEGREES = 0,
    RADIANS = 1
}
/**
 * The Arc shape
 */
export declare class Arc extends baseObj {
    private _radius;
    private _sa;
    private _ea;
    private _cc;
    constructor(radius: number, starting: number, ending: number, mode: ArcMode);
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number);
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number, counterClockwise: boolean);
    /**
     * The radius of the arc
     * @type {number}
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The starting angle of the arc
     * @type {number}
     */
    set startingAngle(v: number);
    get startingAngle(): number;
    /**
     * Set the new startingAngle
     * @param {number} angle the new starting angle
     * @returns {this}
     */
    setStartingAngle(angle: number): this;
    /**
     * The ending angle of the arc
     * @type {number}
     */
    set endingAngle(v: number);
    get endingAngle(): number;
    /**
     * Whether or not the arc is counterclockwise
     * @type {boolean}
     */
    set counterClockwise(cc: boolean);
    get counterClockwise(): boolean;
    /**
     * Set the ending angle of the arc
     * @param {number} angle The new ending angle
     * @returns {this}
     */
    setEndingAngle(angle: number): this;
    /**
     * Set the starting and ending angle of the arc
     * @param {number} startingAngle the new starting angle
     * @param {number} endingAngle the new ending angle
     * @returns {this}
     */
    setAngle(startingAngle: number, endingAngle: number): this;
    /**
     * Returns the angle of the arc
     * @returns {Object<{startingAngle: number, endingAngle: number}>}
     */
    getAngle(): {
        startingAngle: number;
        endingAngle: number;
    };
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}

/**
 * The base shape that all other shapes inherit from
 */
export declare class baseObj {
    private _x;
    private _y;
    private _color;
    private _type;
    private _rot;
    private _outline;
    private _outlineColor;
    private _outlineWidth;
    /**
     * @constructor
     */
    constructor();
    toString(): string;
    /**
     * The type of the shape
     * @type {string}
     */
    set type(v: string);
    get type(): string;
    /**
     * Returns the type of the Shape
     * @returns {string}
     */
    getType(): string;
    /**
     * Sets the shape to the position (`x`, `y`)
     * @param {number} x new x-coordinate of the shape
     * @param {number} y new y-coordinate of the shape
     * @returns {this}
     */
    setPosition(x: number, y: number): this;
    /**
     * Sets the color of the shape to `color`
     * @param {string} color css color, hexadecimal string, or rgba() string
     * @returns {this}
     */
    setColor(color: string): this;
    setOutline(show: boolean): this;
    setOutline(show: boolean, color: string, width: number): this;
    setBorder(show: boolean): this;
    setBorder(show: boolean, color: string, width: number): this;
    /**
     * Sets the color of the shape's outline to `color`
     * @param {string} color css color, hexadecimal string, or rgba() string
     * @returns {this}
     */
    setOutlineColor(color: string): this;
    /**
     * Sets the color of the shape's outline to `color` (same as setOutlineColor)
     * @param {string} color css color, hexadecimal string, or rgba() string
     * @returns {this}
     */
    setBorderColor(color: string): this;
    /**
     * Sets the width of the shape's outline to `width`
     * @param {number} width the new widthoo of the outline
     * @returns {this}
     */
    setOutlineWidth(width: number): this;
    /**
     * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
     * @param {number} width the new width of the outline
     * @returns {this}
     */
    setBorderWidth(width: number): this;
    /**
     * Whether or not to draw outline
     * @type {boolean}
     */
    set outline(v: boolean);
    get outline(): boolean;
    /**
     * Whether or not to draw outline (same as borderWidth)
     * @type {number}
     */
    set borderWidth(v: number);
    get borderWidth(): number;
    /**
     * Whether or not to draw outline
     * @type {number}
     */
    set outlineWidth(v: number);
    get outlineWidth(): number;
    /**
     * Whether or not to draw outline (same as outline)
     * @type {boolean}
     */
    set border(v: boolean);
    get border(): boolean;
    /**
     * The outline's color
     * @type {string}
     */
    set outlineColor(v: string);
    get outlineColor(): string;
    /**
     * The outline's color (same as outlineColor)
     * @type {string}
     */
    set borderColor(v: string);
    get borderColor(): string;
    /**
     * The shape's x-position
     * @type {number}
     */
    set x(v: number);
    get x(): number;
    /**
     * method to return the shapes x-position
     * @returns {number}
     */
    getX(): number;
    /**
     * The shape's y-position
     * @type {number}
     */
    set y(v: number);
    get y(): number;
    /**
     * method to return the shapes y-position
     * @returns {number}
     */
    getY(): number;
    /**
     * Move a shape `dx` pixels right and `dy` pixels left
     * @param {number} dx pixels to move along the x-axis
     * @param {number} dy pixels to move along the y-axis
     * @returns {this}
     */
    move(dx: number, dy: number): this;
    /**
     * The shape's rotation in degrees
     * @type {number}
     */
    set rotationDegrees(r: number);
    get rotationDegrees(): number;
    /**
     * Rotate the shape by `degrees` degrees
     * @param {number} degrees number of degrees to rotate it by
     * @returns {this}
     */
    rotateDegrees(degrees: number): this;
    /**
     * The shape's rotation in radians
     * @type {number}
     */
    set rotation(r: number);
    get rotation(): number;
    /**
     * Rotate the shape by `radians` radians
     * @param {number} radians number of degrees to rotate it by
     * @returns {this}
     */
    rotate(radians: number): this;
    /**
     * Returns the shapes rotation in radians
     * @returns {number}
     */
    getRotation(): number;
    /**
     * Returns the shapes rotation in degrees
     * @returns {number}
     */
    getRotationDegrees(): number;
    /**
     * The shape's color
     * @type {string}
     */
    set color(v: string);
    get color(): string;
    /**
     * Returns the shape's color
     * @returns {string}
     */
    getColor(): string;
    /**
     * adds the shape to the canvas
     * @returns {this}
     */
    add(): this;
    /**
     * removes the shape from the canvas
     * @returns {this}
     */
    remove(): this;
    /**
     * Returns a boolean to check if the shape contains the point (`x`, `y`)
     * @param {number} x x-position of point
     * @param {number} y y-position of point
     * @returns {boolean}
     */
    containsPoint(x: number, y: number): boolean;
    /**
     * Method called to draw the shape on the screen
     * @returns {void}
     */
    draw(): void;
}

/**
 * The Circle shape
 */
export declare class Circle extends baseObj {
    private _radius;
    constructor(radius: number);
    constructor(radius: number, x: number, y: number);
    constructor(radius: number, x: number, y: number, color: string);
    constructor(radius: number, x: number, y: number, color: string, outline: boolean);
    constructor(radius: number, x: number, y: number, color: string, outline: boolean, outlineColor: string);
    /**
     * The circle's radius
     * @type {number}
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The circle's diameter
     * @type {number}
     */
    set diameter(v: number);
    get diameter(): number;
    /**
     * Returns the Circle's diameter
     * @returns {number}
     */
    getDiameter(): number;
    /**
     * Sets the Circle's diameter to `diameter`
     * @param {number} diameter the new diameter
     * @returns {this}
     */
    setDiameter(diameter: number): this;
    /**
     * Returns the Circle's radius
     * @returns {number}
     */
    getRadius(): number;
    /**
     * Sets the Circle's radius to `radius`
     * @param {number} radius the new radius
     * @returns {this}
     */
    setRadius(radius: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}

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

/**
 * Clears the output console
 * @returns {void}
 */
export declare const clearConsole: () => void;
/**
 * logs any argument passed to the console
 * @param {...*} args arguments to print
 * @returns {void}
 * @function
 */
export declare const println: (...args: any[]) => void;
/**
 * Returns the user's answer to the prompt as a string
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {string}
 */
export declare const readLine: (message: string) => string;
/**
 * Returns the user's answer to the prompt as an integer
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {number}
 */
export declare const readInt: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a float
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {number}
 */
export declare const readFloat: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a boolean
 * @param {string} message the prompt to ask the user
 * @param {string} y the yes string
 * @param {string} n the no string
 * @function
 * @returns {boolean}
 */
export declare const readBoolean: (message: string, y?: string, n?: string) => boolean;
/**
 * Use this function to create your own console inputs if they are not supported by the library
 * @param {string} message the message to display
 * @param {function} submitHandler function to handle the submit
 * @param {string} inputType the type of the input
 * @param {boolean | undefined} submitButton whether to show a submit button or not
 * @function
 * @async
 */
export declare const consoleInput: <PromiseType, EventType extends MouseEvent | KeyboardEvent>(message: string, submitHandler: (input: HTMLInputElement, e: EventType) => {
    done: boolean;
    value?: PromiseType | undefined;
    color?: string | undefined;
}, inputType: string, submitButton?: boolean | undefined) => Promise<PromiseType>;
/**
 * Ask a question in the console and return a string
 * @param {string} message question to ask
 * @function
 * @returns {Promise<string>}
 * @async
 */
export declare const readLineConsole: (message: string) => Promise<string>;
/**
 * Ask a question in the console and return an integer
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 * @async
 */
export declare const readIntConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a float
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 * @async
 */
export declare const readFloatConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a boolean value
 * @param {string} message question to ask
 * @returns {Promise<boolean>}
 * @function
 * @async
 */
export declare const readBooleanConsole: (message: string) => Promise<boolean>;
/**
 * Asks the user to enter a color in the console
 * @param {string} message the message to ask
 * @function
 * @async
 * @returns {Promise<string>}
 */
export declare const readColorConsole: (message: string) => Promise<string>;

/**
 * CodeHS's Keyboard object. If possible use the built-in javascript
 * KeyboardEvent.key or KeyboardEvent.code in your handler
 * (Included for compatibility with CodeHS, compare to e.code instead of e.keyCode)
 * @deprecated
 */
export declare class Keyboard {
    /**
     * The key for the Left Alt
     * @type {string}
     */
    static get ALT_LEFT(): string;
    /**
     * The key for the right Alt
     * @type {string}
     */
    static get ALT_RIGHT(): string;
    /**
     * The key for BACKSPACE
     * @type {string}
     */
    static get BACKSPACE(): string;
    /**
     * The key for CAPS LOCK
     * @type {string}
     */
    static get CAPS_LOCK(): string;
    /**
     * The key for the left CTRL
     * @type {string}
     */
    static get CTRL_LEFT(): string;
    /**
     * The key for the right CTRL
     * @type {string}
     */
    static get CTRL_RIGHT(): string;
    /**
     * The key for DOWN
     * @type {string}
     */
    static get DOWN(): string;
    /**
     * The key for ENTER
     * @type {string}
     */
    static get ENTER(): string;
    /**
     * The key for LEFT
     * @type {string}
     */
    static get LEFT(): string;
    /**
     * The key for LEFT COMMAND
     * @type {string}
     */
    static get LEFT_COMMAND(): string;
    /**
     * The key for LEFT WINDOW
     * @type {string}
     */
    static get LEFT_WINDOW(): string;
    /**
     * The key for RIGHT
     * @type {string}
     */
    static get RIGHT(): string;
    /**
     * The key for RIGHT COMMAND
     * @type {string}
     */
    static get RIGHT_COMMAND(): string;
    /**
     * The key for RIGHT WINDOW
     * @type {string}
     */
    static get RIGHT_WINDOW(): string;
    /**
     * The key for SELECT
     * @type {string}
     */
    static get SELECT(): string;
    /**
     * The key for the left SHIFT
     * @type {string}
     */
    static get SHIFT_LEFT(): string;
    /**
     * The key for the right SHIFT
     * @type {string}
     */
    static get SHIFT_RIGHT(): string;
    /**
     * The key for SPACE
     * @type {string}
     */
    static get SPACE(): string;
    /**
     * The key for TAB
     * @type {string}
     */
    static get TAB(): string;
    /**
     * The key for UP
     * @type {string}
     */
    static get UP(): string;
}

/**
 * The Line shape
 */
export declare class Line extends baseObj {
    private _x1;
    private _y1;
    private _x2;
    private _y2;
    private _width;
    constructor(x1: number, y1: number, x2: number, y2: number);
    constructor(x1: number, y1: number, x2: number, y2: number, width: number);
    constructor(x1: number, y1: number, x2: number, y2: number, width: number, color: string);
    toString(): string;
    /**
     * Set the width of the line
     * @param {number} w the new width
     * @returns {this}
     */
    setLineWidth(w: number): this;
    /**
     * X-coordinate for the starting point
     * @type {number}
     */
    set x1(v: number);
    get x1(): number;
    /**
     * X-coordinate for the ending point
     * @type {number}
     */
    set x2(v: number);
    get x2(): number;
    /**
     * Y-coordinate for the starting point
     * @type {number}
     */
    set y1(v: number);
    get y1(): number;
    /**
     * Y-coordinate for the ending point
     * @type {number}
     */
    set y2(v: number);
    get y2(): number;
    /**
     * Set the starting point
     * @param {number} x the x-coordinate for the starting point
     * @param {number} y the y-coordinate for the starting point
     * @returns {this}
     */
    setStartpoint(x: number, y: number): this;
    /**
     * Set the ending point
     * @param {number} x the x-coordinate for the ending point
     * @param {number} y the y-coordinate for the ending point
     * @returns {this}
     */
    setEndpoint(x: number, y: number): this;
    /**
     * Sets the Line's to the start position (`x1`, `y1`)
     * @param {number} x1 new x-coordinate of the shape
     * @param {number} y1 new y-coordinate of the shape
     * @returns {this}
     */
    setPosition(x1: number, y1: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}

/**
 * The oval shape
 */
export declare class Oval extends baseObj {
    private _width;
    private _height;
    constructor(width: number, height: number);
    constructor(width: number, height: number, x: number, y: number);
    constructor(width: number, height: number, x: number, y: number, color: string);
    /**
     * The width of the oval
     * @type {number}
     */
    set width(v: number);
    get width(): number;
    /**
     * Set the width of the oval
     * @param {number} width the new width
     * @returns {this}
     */
    setWidth(width: number): this;
    /**
     * The height of the oval
     * @type {number}
     */
    set height(v: number);
    get height(): number;
    /**
     * Set the height of the oval
     * @param {number} height the new height
     * @returns {this}
     */
    setHeight(height: number): this;
    /**
     * Set the width and height of the oval
     * @param {number} width the new width of the oval
     * @param {number} height the new height of the oval
     * @returns {this}
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}

/**
 * The object that returns random values
 */
export declare class Randomizer {
    constructor();
    /**
     * Returns a random integer between `min` and `max`
     * @param min {number} minimum value of the integer
     * @param max {number} maximum value of the integer
     * @returns {number}
     */
    static nextInt(min: number, max: number): number;
    /**
     * Returns true with a probability of 50% or `probability`%
     * @param {number | undefined} probability The probability of returning true from 0 (never) to 1 (always)
     * @returns {boolean}
     */
    static nextBoolean(probability?: number): boolean;
    /**
     * Returns a random float between `min` and `max`
     * @param min {number} minimum value of the float
     * @param max {number} maximum value of the float
     * @returns {float}
     */
    static nextFloat(min: number, max: number): number;
    /**
     * Returns a random hexadecimal color
     * @returns {string}
     */
    static nextColor(): string;
    /**
     * Returns a random hex string between min and max
     * @param min {number} minimum value
     * @param max {number} maximum value
     * @returns {string}
     */
    static randomHex(min: number, max: number): string;
    /**
     * Returns a random value from the array
     * @param {Array<ArrayType>} array The array to extract a value from
     * @returns {ArrayType}
     */
    static randomArrayValue<ArrayType>(array: ArrayType[]): ArrayType;
}

/**
 * The rectangle shape
 */
export declare class Rectangle extends baseObj {
    private _width;
    private _height;
    constructor(width: number, height: number);
    constructor(width: number, height: number, x: number, y: number);
    constructor(width: number, height: number, x: number, y: number, color: string);
    constructor(width: number, height: number, x: number, y: number, color: string, rotation: number);
    constructor(width: number, height: number, x: number, y: number, color: string, rotation: number, outline: boolean);
    constructor(width: number, height: number, x: number, y: number, color: string, rotation: number, outline: boolean, outlineColor: string);
    /**
     * The rectangle's width
     * @type {number}
     */
    set width(v: number);
    get width(): number;
    /**
     * Returns the width of the rectangle
     * @returns {number}
     */
    getWidth(): number;
    /**
     * Sets the width of the rectangle
     * @param {number} width the new width
     * @returns {number}
     */
    setWidth(width: number): this;
    /**
     * The rectangle's height
     * @type {number}
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the rectangle
     * @returns {number}
     */
    getHeight(): number;
    /**
     * Sets the height of the rectangle
     * @param {number} height the new height
     * @returns {number}
     */
    setHeight(height: number): this;
    /**
     * Set the width and height of the rectangle
     * @param {number} width the rectangle's new width
     * @param {number} height the rectangle's new height
     * @returns {this}
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}

/**
 * The canvas everything is drawn to
 * @type {HTMLCanvasElement}
 */
export declare const canvas: HTMLCanvasElement;
/**
 * The console println logs to
 * @type {HTMLPreElement}
 */
export declare const output: HTMLPreElement;
/**
 * The canvas context
 * @type {CanvasRenderingContext2D}
 */
export declare const ctx: CanvasRenderingContext2D;
/**
 * Returns the width of the canvas
 * @function
 * @returns {number}
 */
export declare const getWidth: () => number;
/**
 * Returns the height of the canvas
 * @function
 * @returns {number}
 */
export declare const getHeight: () => number;
/**
 * Set the width and height of the canvas
 * @param width {number} the canvas's new width
 * @param height {number} the canvas's new height
 * @function
 * @returns {void}
 */
export declare const setSize: (width: number, height: number) => void;
/**
 * Set the background color of the canvas
 * @param color {string} the new background color
 * @function
 */
export declare const setBackgroundColor: (color: string) => void;
/**
 * Show the mouse over the canvas
 * @param cursor {string} (optional) the css cursor to show
 * @function
 */
export declare const showCursor: (cursor?: string | undefined) => void;
/**
 * Hide the mouse over the canvas
 * @function
 */
export declare const hideCursor: () => void;

/**
 * All the shapes that have been added to the screen
 * @type {Array<baseObj>}
 */
export declare const shapes: baseObj[];
/**
 * Set whether the canvas should update every frame
 * @param {boolean} update whether to redraw each frame;
 * @function
 * @returns {void}
 */
export declare const setUpdate: (update: boolean) => void;
/**
 * Removes all objects from the canvas
 * @function
 * @returns {void}
 */
export declare const removeAll: () => void;
/**
 * Adds all shapes that are passed to the screen
 * @param args {baseObj[]} any number of shapes to add
 * @function
 * @returns {void}
 */
export declare const add: (...args: baseObj[]) => void;
/**
 * Removes all shapes that are passed from the screen
 * @param args {baseObj[]} shapes to remove
 * @function
 * @returns {void}
 */
export declare const remove: (...args: baseObj[]) => void;
/**
 * Returns the shape that is on the top at the point (`x`, `y`)
 * @param x {number} x-coordinate to check
 * @param y {number} y-coordinate to check
 * @function
 * @returns {baseObj | undefined}
 */
export declare const getElementAt: (x: number, y: number) => baseObj | undefined;
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param {number} x the x-value to find
 * @param {number} y the y-value to check
 * @function
 * @returns {baseObj[]}
 */
export declare function getElementsAt(x: number, y: number): Array<baseObj>;
/**
 * Returns the all the shapes onscreen
 * @param {boolean} showAll return all shapes onscreen
 * @function
 * @returns {baseObj[]}
 */
export declare function getElementsAt(showAll: true): Array<baseObj>;

/**
 * Checks if a font matches a canvas font
 * @param {string} font the font to check
 * @returns {boolean}
 */
export declare const checkFont: (font: string) => boolean;
/**
 * The Text shape
 */
export declare class Text extends baseObj {
    private _txt;
    private _font;
    private _w;
    private _h;
    constructor(txt: string, font: string);
    constructor(txt: string, font: string, x: number, y: number);
    /**
     * A string that follows the pattern \`${size}px ${fontname}\`
     * @type {string}
     */
    set font(v: string);
    get font(): string;
    /**
     * Allows you to set the text's font
     * @param {string} font the new font of the Text
     * @returns {this}
     */
    setFont(font: string): this;
    /**
     * The text to display
     * @type {string}
     */
    set text(v: string);
    get text(): string;
    /**
     * Returns the Text's text
     * @returns {string}
     */
    getText(): string;
    /**
     * Sets the text to display to `txt`
     * @param {string} txt the string to display
     * @returns {this}
     */
    setText(txt: string): this;
    /**
     * The width of the Text
     * @readonly
     * @type {number}
     */
    get width(): number;
    /**
     * Returns the Text's width
     * @returns {number}
     */
    getWidth(): number;
    /**
     * The Text's height
     * @type {number}
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the Text
     * @returns {number}
     */
    getHeight(): number;
    /**
     * Set the Height for the Text
     * @param height {number} the new height
     * @returns {this}
     */
    setHeight(height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}

interface ITimer {
    callback: TupleParams<any>;
    delay: number;
    params: any;
    name: string;
    id: number;
}
/**
 * The array of active timers
 * @type {Array}
 */
export declare const timers: Array<ITimer>;
declare type NotArray = number | boolean | string | object;
declare type TenTuple = [NotArray, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?];
declare type TupleParams<T> = T extends null | undefined ? () => void : (param: T) => void;
/**
 * Sets a timer with the callback `callback`
 * @param {function} callback function for the timer to call
 * @param {number} delay delay between the calls
 * @param {any} params the parameters to pass to the callback, can be anything
 * @param {string} name name of the timer
 * @function
 * @returns {void}
 */
export declare const setTimer: <T extends string | number | boolean | object | TenTuple>(callback: TupleParams<T>, delay: number, params?: T | undefined, name?: string | undefined) => void;
/**
 * Stops a previously set timer
 * @param {string | function} stopId the timer's name or the callback the timer was set with
 * @function
 * @returns {void}
 */
export declare const stopTimer: (stopId: string | ((...params: any[]) => void)) => void;
/**
 * Stops all timers
 * @function
 * @returns {void}
 */
export declare const stopAllTimers: () => void;
export {};

/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export declare const mouseClickMethod: (func: (e: MouseEvent) => void) => void;
/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export declare const mouseMoveMethod: (func: (e: MouseEvent) => void) => void;
/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export declare const keyDownMethod: (func: (e: KeyboardEvent) => void) => void;
/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @function
 * @deprecated
 * @returns {void}
 */
export declare const keyUpMethod: (func: (e: KeyboardEvent) => void) => void;

/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param {number} x A numeric expression for the x coordinate.
 * @param {number} y A numeric expression for the y coordinate.
 * @param {number} radians A numeric expression for the number of radians it is rotated.
 * @returns {Object<{ x: number, y: number }>}
 * @function
 */
export declare const rotatePoint: (x: number, y: number, radians: number) => {
    x: number;
    y: number;
};
/**
 * Returns the distance of a line segment starting at (`x1`, `y1`)
 * and ending at (`x2`, `y2`)
 * @param {number} x1 x-coordinate for the starting point
 * @param {number} y1 y-coordinate for the starting point
 * @param {number} x2 x-coordinate for the ending point
 * @param {number} y2 y-coordinate for the ending point
 * @function
 * @returns {number}
 */
export declare const lineDistance: (x1: number, y1: number, x2: number, y2: number) => number;
/**
 * Returns the greatest common factor between `a` and `b`
 * @param {number} a numerical expression
 * @param {number} b numerical expression
 * @function
 * @returns {number}
 */
export declare const gcf: (a: number, b: number) => number;
/**
 * Returns the mouse's position on the canvas
 * @param {MouseEvent} e the event to get the position from
 * @function
 * @returns {Object<{ x: number, y: number }>}
 */
export declare const getPosition: (e: MouseEvent) => {
    x: number;
    y: number;
};
/**
 * Convert a number of degrees to radians
 * @param {number} degrees the degrees to convert
 * @function
 * @returns {number}
 */
export declare const toRadians: (degrees: number) => number;
/**
 * Convert a number of radians to degrees
 * @param {number} radians the radians to convert
 * @function
 * @returns {number}
 */
export declare const toDegrees: (radians: number) => number;

/**
 * The Image from the web shape
 */
export declare class WebImage extends Rectangle {
    private readonly _img;
    private _sx;
    private _sy;
    private _sw;
    private _sh;
    private _hasLoaded;
    constructor(src: string);
    constructor(src: string, width: number, height: number);
    constructor(src: string, width: number, height: number, x: number, y: number);
    constructor(src: string, width: number, height: number, x: number, y: number, sx: number, sy: number, swidth: number, sheight: number);
    /**
     * The image to display
     * @readonly
     * @type {HTMLImageElement}
     */
    get image(): HTMLImageElement;
    /**
     * Sets the image to have a width of `width` while maintaining the aspect ratio
     * @param {number} width the new width
     * @returns {this}
     */
    setAspectWidth(width: number): this;
    /**
     * Sets the image to have a height of `height` while maintaining the aspect ratio
     * @param {number} height the new height
     * @returns {this}
     */
    setAspectHeight(height: number): this;
    /**
     * the aspect ratio of the image
     * @readonly
     * @type {Object<{ w: number, h: number }>}
     */
    get aspectRatio(): {
        w: number;
        h: number;
    };
    /**
     * Sets a new portion of the image to display
     * @param {number} sx the x-position of the clip
     * @param {number} sy the y-position of the clip
     * @param {number} swidth the width of the clip
     * @param {number} sheight the height of the clip
     * @returns {this}
     */
    setClip(sx: number, sy: number, swidth: number, sheight: number): this;
    /**
     * Returns the clip of the image
     * @returns {Object<{ sx: number, sy: number, swidth: number, sheight: number }>}
     */
    getClip(): {
        sx: number;
        sy: number;
        swidth: number;
        sheight: number;
    };
    draw(): void;
}

