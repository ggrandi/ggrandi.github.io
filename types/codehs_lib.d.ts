/**
 * The enum to set the arc's mode
 * @enum {number}
 * @readonly
 */
export declare enum ArcMode {
    /** the value for degrees */
    DEGREES = 0,
    /** the value for radians */
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
    /**
     * @constructor
     * @param radius the radius of the arc
     * @param startingAngle the starting angle of the arc
     * @param endingAngle {number} the ending angle of the arc
     * @param mode 0 for degrees, 1 for radians
     */
    constructor(radius: number, starting: number, ending: number, mode: ArcMode);
    /**
     * @constructor
     * @param radius the radius of the arc
     * @param startingAngle the starting angle of the arc
     * @param endingAngle {number} the ending angle of the arc
     * @param mode 0 for degrees, 1 for radians
     * @param x the x-position of the arc
     * @param y the y-position of the arc
     */
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number);
    /**
     * @constructor
     * @param radius the radius of the arc
     * @param startingAngle the starting angle of the arc
     * @param endingAngle {number} the ending angle of the arc
     * @param mode 0 for degrees, 1 for radians
     * @param x the x-position of the arc
     * @param y the y-position of the arc
     * @param counterClockwise whether the arc is counterclockwise or not
     */
    constructor(radius: number, starting: number, ending: number, mode: ArcMode, x: number, y: number, counterClockwise: boolean);
    /**
     * The radius of the arc
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The starting angle of the arc
     */
    set startingAngle(v: number);
    get startingAngle(): number;
    /**
     * Set the new startingAngle
     * @param angle the new starting angle
     */
    setStartingAngle(angle: number): this;
    /**
     * The ending angle of the arc
     */
    set endingAngle(v: number);
    get endingAngle(): number;
    /**
     * Whether or not the arc is counterclockwise
     */
    set counterClockwise(cc: boolean);
    get counterClockwise(): boolean;
    /**
     * Set the ending angle of the arc
     * @param angle The new ending angle
     */
    setEndingAngle(angle: number): this;
    /**
     * Set the starting and ending angle of the arc
     * @param startingAngle the new starting angle
     * @param endingAngle the new ending angle
     */
    setAngle(startingAngle: number, endingAngle: number): this;
    /**
     * Returns the angle of the arc
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
     */
    set type(v: string);
    get type(): string;
    /**
     * Returns the type of the Shape
     */
    getType(): string;
    /**
     * Sets the shape to the position (`x`, `y`)
     * @param x new x-coordinate of the shape
     * @param y new y-coordinate of the shape
     */
    setPosition(x: number, y: number): this;
    /**
     * Sets the color of the shape to `color`
     * @param color css color, hexadecimal string, or rgba() string
     */
    setColor(color: string): this;
    /**
     * Set whether to draw outline
     * @param show boolean to show/hide the outline
     */
    setOutline(show: boolean): this;
    /**
     * Set whether to draw outline and the outline color and width
     * @param show boolean to show/hide the outline
     * @param color the new outline color
     * @param width the new outline width
     */
    setOutline(show: boolean, color: string, width: number): this;
    /**
     * Set whether to draw outline (same as setOutline)
     * @param show boolean to show/hide the outline
     */
    setBorder(show: boolean): this;
    /**
     * Set whether to draw outline and the outline color and width (same as setOutline)
     * @param show boolean to show/hide the outline
     * @param color the new outline color
     * @param width the new outline width
     */
    setBorder(show: boolean, color: string, width: number): this;
    /**
     * Sets the color of the shape's outline to `color`
     * @param color css color, hexadecimal string, or rgba() string
     */
    setOutlineColor(color: string): this;
    /**
     * Sets the color of the shape's outline to `color` (same as setOutlineColor)
     * @param color css color, hexadecimal string, or rgba() string
     */
    setBorderColor(color: string): this;
    /**
     * Sets the width of the shape's outline to `width`
     * @param width the new widthoo of the outline
     */
    setOutlineWidth(width: number): this;
    /**
     * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
     * @param width the new width of the outline
     */
    setBorderWidth(width: number): this;
    /**
     * Whether or not to draw outline
     */
    set outline(v: boolean);
    get outline(): boolean;
    /**
     * Whether or not to draw outline (same as borderWidth)
     */
    set borderWidth(v: number);
    get borderWidth(): number;
    /**
     * Whether or not to draw outline
     */
    set outlineWidth(v: number);
    get outlineWidth(): number;
    /**
     * Whether or not to draw outline (same as outline)
     */
    set border(v: boolean);
    get border(): boolean;
    /**
     * The outline's color
     */
    set outlineColor(v: string);
    get outlineColor(): string;
    /**
     * The outline's color (same as outlineColor)
     */
    set borderColor(v: string);
    get borderColor(): string;
    /**
     * The shape's x-position
     */
    set x(v: number);
    get x(): number;
    /**
     * method to return the shapes x-position
     */
    getX(): number;
    /**
     * The shape's y-position
     */
    set y(v: number);
    get y(): number;
    /**
     * method to return the shapes y-position
     */
    getY(): number;
    /**
     * Move a shape `dx` pixels right and `dy` pixels left
     * @param dx pixels to move along the x-axis
     * @param dy pixels to move along the y-axis
     */
    move(dx: number, dy: number): this;
    /**
     * The shape's rotation in degrees
     */
    set rotationDegrees(r: number);
    get rotationDegrees(): number;
    /**
     * Rotate the shape by `degrees` degrees
     * @param degrees number of degrees to rotate it by
     */
    rotateDegrees(degrees: number): this;
    /**
     * The shape's rotation in radians
     */
    set rotation(r: number);
    get rotation(): number;
    /**
     * Rotate the shape by `radians` radians
     * @param radians number of degrees to rotate it by
     */
    rotate(radians: number): this;
    /**
     * Returns the shapes rotation in radians
     */
    getRotation(): number;
    /**
     * Returns the shapes rotation in degrees
     */
    getRotationDegrees(): number;
    /**
     * The shape's color
     */
    set color(v: string | CanvasGradient);
    get color(): string | CanvasGradient;
    /**
     * Returns the shape's color
     */
    getColor(): string | CanvasGradient;
    /**
     * adds the shape to the canvas
     */
    add(): this;
    /**
     * removes the shape from the canvas
     */
    remove(): this;
    /**
     * Returns a boolean to check if the shape contains the point (`x`, `y`)
     * @param x x-position of point
     * @param y y-position of point
     */
    containsPoint(x: number, y: number): boolean;
    /**
     * Method called to draw the shape on the screen
     */
    draw(): void;
}

/**
 * The Circle shape
 */
export declare class Circle extends baseObj {
    private _radius;
    /**
     * @constructor
     * @param radius The radius of the circle
     */
    constructor(radius: number);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     */
    constructor(radius: number, x: number, y: number);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     * @param color The color of the circle
     */
    constructor(radius: number, x: number, y: number, color: string);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     * @param color The color of the circle
     * @param outline whether to draw the outline
     */
    constructor(radius: number, x: number, y: number, color: string | CanvasGradient, outline: boolean);
    /**
     * @constructor
     * @param radius The radius of the circle
     * @param x The x-position of the Circle
     * @param y The y-position of the Circle
     * @param color The color of the circle
     * @param outline whether to draw the outline
     * @param outlineColor The color of the outline
     */
    constructor(radius: number, x: number, y: number, color: string | CanvasGradient, outline: boolean, outlineColor: string);
    /**
     * The circle's radius
     */
    set radius(v: number);
    get radius(): number;
    /**
     * The circle's diameter
     */
    set diameter(v: number);
    get diameter(): number;
    /**
     * Returns the Circle's diameter
     */
    getDiameter(): number;
    /**
     * sets the Circle's diameter to `diameter`
     * @param diameter the new diameter
     */
    setDiameter(diameter: number): this;
    /**
     * Returns the Circle's radius
     */
    getRadius(): number;
    /**
     * sets the Circle's radius to `radius`
     * @param radius the new radius
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
     * @param red the value of red from 0-255
     * @param green the value of green from 0-255
     * @param blue the value of blue from 0-255
     * @param alpha the value of the opacity from 0 to 1
     */
    constructor(red: number, green: number, blue: number, alpha?: number);
    /**
     * The css color black
     */
    static get black(): string;
    /**
     * The css color silver
     */
    static get silver(): string;
    /**
     * The css color gray
     */
    static get gray(): string;
    /**
     * The css color white
     */
    static get white(): string;
    /**
     * The css color maroon
     */
    static get maroon(): string;
    /**
     * The css color red
     */
    static get red(): string;
    /**
     * The css color purple
     */
    static get purple(): string;
    /**
     * The css color fuchsia
     */
    static get fuchsia(): string;
    /**
     * The css color green
     */
    static get green(): string;
    /**
     * The css color lime
     */
    static get lime(): string;
    /**
     * The css color olive
     */
    static get olive(): string;
    /**
     * The css color yellow
     */
    static get yellow(): string;
    /**
     * The css color navy
     */
    static get navy(): string;
    /**
     * The css color blue
     */
    static get blue(): string;
    /**
     * The css color teal
     */
    static get teal(): string;
    /**
     * The css color aqua
     */
    static get aqua(): string;
    /**
     * The css color orange
     */
    static get orange(): string;
    /**
     * The css color aliceblue
     */
    static get aliceblue(): string;
    /**
     * The css color antiquewhite
     */
    static get antiquewhite(): string;
    /**
     * The css color aquamarine
     */
    static get aquamarine(): string;
    /**
     * The css color azure
     */
    static get azure(): string;
    /**
     * The css color beige
     */
    static get beige(): string;
    /**
     * The css color bisque
     */
    static get bisque(): string;
    /**
     * The css color blanchedalmond
     */
    static get blanchedalmond(): string;
    /**
     * The css color blueviolet
     */
    static get blueviolet(): string;
    /**
     * The css color brown
     */
    static get brown(): string;
    /**
     * The css color burlywood
     */
    static get burlywood(): string;
    /**
     * The css color cadetblue
     */
    static get cadetblue(): string;
    /**
     * The css color chartreuse
     */
    static get chartreuse(): string;
    /**
     * The css color chocolate
     */
    static get chocolate(): string;
    /**
     * The css color coral
     */
    static get coral(): string;
    /**
     * The css color cornflowerblue
     */
    static get cornflowerblue(): string;
    /**
     * The css color cornsilk
     */
    static get cornsilk(): string;
    /**
     * The css color crimson
     */
    static get crimson(): string;
    /**
     * The css color cyan
     */
    static get cyan(): string;
    /**
     * The css color darkblue
     */
    static get darkblue(): string;
    /**
     * The css color darkcyan
     */
    static get darkcyan(): string;
    /**
     * The css color darkgoldenrod
     */
    static get darkgoldenrod(): string;
    /**
     * The css color darkgray
     */
    static get darkgray(): string;
    /**
     * The css color darkgreen
     */
    static get darkgreen(): string;
    /**
     * The css color darkgrey
     */
    static get darkgrey(): string;
    /**
     * The css color darkkhaki
     */
    static get darkkhaki(): string;
    /**
     * The css color darkmagenta
     */
    static get darkmagenta(): string;
    /**
     * The css color darkolivegreen
     */
    static get darkolivegreen(): string;
    /**
     * The css color darkorange
     */
    static get darkorange(): string;
    /**
     * The css color darkorchid
     */
    static get darkorchid(): string;
    /**
     * The css color darkred
     */
    static get darkred(): string;
    /**
     * The css color darksalmon
     */
    static get darksalmon(): string;
    /**
     * The css color darkseagreen
     */
    static get darkseagreen(): string;
    /**
     * The css color darkslateblue
     */
    static get darkslateblue(): string;
    /**
     * The css color darkslategray
     */
    static get darkslategray(): string;
    /**
     * The css color darkslategrey
     */
    static get darkslategrey(): string;
    /**
     * The css color darkturquoise
     */
    static get darkturquoise(): string;
    /**
     * The css color darkviolet
     */
    static get darkviolet(): string;
    /**
     * The css color deeppink
     */
    static get deeppink(): string;
    /**
     * The css color deepskyblue
     */
    static get deepskyblue(): string;
    /**
     * The css color dimgray
     */
    static get dimgray(): string;
    /**
     * The css color dimgrey
     */
    static get dimgrey(): string;
    /**
     * The css color dodgerblue
     */
    static get dodgerblue(): string;
    /**
     * The css color firebrick
     */
    static get firebrick(): string;
    /**
     * The css color floralwhite
     */
    static get floralwhite(): string;
    /**
     * The css color forestgreen
     */
    static get forestgreen(): string;
    /**
     * The css color gainsboro
     */
    static get gainsboro(): string;
    /**
     * The css color ghostwhite
     */
    static get ghostwhite(): string;
    /**
     * The css color gold
     */
    static get gold(): string;
    /**
     * The css color goldenrod
     */
    static get goldenrod(): string;
    /**
     * The css color greenyellow
     */
    static get greenyellow(): string;
    /**
     * The css color grey
     */
    static get grey(): string;
    /**
     * The css color honeydew
     */
    static get honeydew(): string;
    /**
     * The css color hotpink
     */
    static get hotpink(): string;
    /**
     * The css color indianred
     */
    static get indianred(): string;
    /**
     * The css color indigo
     */
    static get indigo(): string;
    /**
     * The css color ivory
     */
    static get ivory(): string;
    /**
     * The css color khaki
     */
    static get khaki(): string;
    /**
     * The css color lavender
     */
    static get lavender(): string;
    /**
     * The css color lavenderblush
     */
    static get lavenderblush(): string;
    /**
     * The css color lawngreen
     */
    static get lawngreen(): string;
    /**
     * The css color lemonchiffon
     */
    static get lemonchiffon(): string;
    /**
     * The css color lightblue
     */
    static get lightblue(): string;
    /**
     * The css color lightcoral
     */
    static get lightcoral(): string;
    /**
     * The css color lightcyan
     */
    static get lightcyan(): string;
    /**
     * The css color lightgoldenrodyellow
     */
    static get lightgoldenrodyellow(): string;
    /**
     * The css color lightgray
     */
    static get lightgray(): string;
    /**
     * The css color lightgreen
     */
    static get lightgreen(): string;
    /**
     * The css color lightgrey
     */
    static get lightgrey(): string;
    /**
     * The css color lightpink
     */
    static get lightpink(): string;
    /**
     * The css color lightsalmon
     */
    static get lightsalmon(): string;
    /**
     * The css color lightseagreen
     */
    static get lightseagreen(): string;
    /**
     * The css color lightskyblue
     */
    static get lightskyblue(): string;
    /**
     * The css color lightslategray
     */
    static get lightslategray(): string;
    /**
     * The css color lightslategrey
     */
    static get lightslategrey(): string;
    /**
     * The css color lightsteelblue
     */
    static get lightsteelblue(): string;
    /**
     * The css color lightyellow
     */
    static get lightyellow(): string;
    /**
     * The css color limegreen
     */
    static get limegreen(): string;
    /**
     * The css color linen
     */
    static get linen(): string;
    /**
     * The css color magenta
     */
    static get magenta(): string;
    /**
     * The css color mediumaquamarine
     */
    static get mediumaquamarine(): string;
    /**
     * The css color mediumblue
     */
    static get mediumblue(): string;
    /**
     * The css color mediumorchid
     */
    static get mediumorchid(): string;
    /**
     * The css color mediumpurple
     */
    static get mediumpurple(): string;
    /**
     * The css color mediumseagreen
     */
    static get mediumseagreen(): string;
    /**
     * The css color mediumslateblue
     */
    static get mediumslateblue(): string;
    /**
     * The css color mediumspringgreen
     */
    static get mediumspringgreen(): string;
    /**
     * The css color mediumturquoise
     */
    static get mediumturquoise(): string;
    /**
     * The css color mediumvioletred
     */
    static get mediumvioletred(): string;
    /**
     * The css color midnightblue
     */
    static get midnightblue(): string;
    /**
     * The css color mintcream
     */
    static get mintcream(): string;
    /**
     * The css color mistyrose
     */
    static get mistyrose(): string;
    /**
     * The css color moccasin
     */
    static get moccasin(): string;
    /**
     * The css color navajowhite
     */
    static get navajowhite(): string;
    /**
     * The css color oldlace
     */
    static get oldlace(): string;
    /**
     * The css color olivedrab
     */
    static get olivedrab(): string;
    /**
     * The css color orangered
     */
    static get orangered(): string;
    /**
     * The css color orchid
     */
    static get orchid(): string;
    /**
     * The css color palegoldenrod
     */
    static get palegoldenrod(): string;
    /**
     * The css color palegreen
     */
    static get palegreen(): string;
    /**
     * The css color paleturquoise
     */
    static get paleturquoise(): string;
    /**
     * The css color palevioletred
     */
    static get palevioletred(): string;
    /**
     * The css color papayawhip
     */
    static get papayawhip(): string;
    /**
     * The css color peachpuff
     */
    static get peachpuff(): string;
    /**
     * The css color peru
     */
    static get peru(): string;
    /**
     * The css color pink
     */
    static get pink(): string;
    /**
     * The css color plum
     */
    static get plum(): string;
    /**
     * The css color powderblue
     */
    static get powderblue(): string;
    /**
     * The css color rosybrown
     */
    static get rosybrown(): string;
    /**
     * The css color royalblue
     */
    static get royalblue(): string;
    /**
     * The css color saddlebrown
     */
    static get saddlebrown(): string;
    /**
     * The css color salmon
     */
    static get salmon(): string;
    /**
     * The css color sandybrown
     */
    static get sandybrown(): string;
    /**
     * The css color seagreen
     */
    static get seagreen(): string;
    /**
     * The css color seashell
     */
    static get seashell(): string;
    /**
     * The css color sienna
     */
    static get sienna(): string;
    /**
     * The css color skyblue
     */
    static get skyblue(): string;
    /**
     * The css color slateblue
     */
    static get slateblue(): string;
    /**
     * The css color slategray
     */
    static get slategray(): string;
    /**
     * The css color slategrey
     */
    static get slategrey(): string;
    /**
     * The css color snow
     */
    static get snow(): string;
    /**
     * The css color springgreen
     */
    static get springgreen(): string;
    /**
     * The css color steelblue
     */
    static get steelblue(): string;
    /**
     * The css color tan
     */
    static get tan(): string;
    /**
     * The css color thistle
     */
    static get thistle(): string;
    /**
     * The css color tomato
     */
    static get tomato(): string;
    /**
     * The css color turquoise
     */
    static get turquoise(): string;
    /**
     * The css color violet
     */
    static get violet(): string;
    /**
     * The css color wheat
     */
    static get wheat(): string;
    /**
     * The css color whitesmoke
     */
    static get whitesmoke(): string;
    /**
     * The css color yellowgreen
     */
    static get yellowgreen(): string;
    /**
     * The css color rebeccapurple
     */
    static get rebeccapurple(): string;
    /**
     * Returns a random shade of Red
     */
    static randomRed(): string;
    /**
     * Returns a random shade of Green
     */
    static randomGreen(): string;
    /**
     * Returns a random shade of Blue
     */
    static randomBlue(): string;
}
/**
 * Checks if a string is a color
 * @param color color to check
 */
export declare const checkColor: (color: string | CanvasGradient) => boolean;

/**
 * Clears the output console
 */
export declare const clearConsole: () => void;
/**
 * logs any argument passed to the console
 * @param args arguments to print
 */
export declare const println: (...args: any[]) => void;
/**
 * Returns the user's answer to the prompt as a string
 * @param message the prompt to ask the user
 */
export declare const readLine: (message: string) => string;
/**
 * Returns the user's answer to the prompt as an integer
 * @param message the prompt to ask the user
 */
export declare const readInt: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a float
 * @param message the prompt to ask the user
 */
export declare const readFloat: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a boolean
 * @param message the prompt to ask the user
 * @param y the yes string
 * @param n the no string
 */
export declare const readBoolean: (message: string, y?: string, n?: string) => boolean;
/**
 * Use this function to create your own console inputs if they are not supported by the library
 * @param message the message to display
 * @param submitHandler function to handle the submit
 * @param inputType the type of the input
 * @param submitButton whether to show a submit button or not
 * @async
 */
export declare const consoleInput: <PromiseType, EventType extends MouseEvent | KeyboardEvent>(message: string, submitHandler: (input: HTMLInputElement, e: EventType) => {
    done: boolean;
    value?: PromiseType | undefined;
    color?: string | undefined;
}, inputType: string, submitButton?: boolean | undefined) => Promise<PromiseType>;
/**
 * Ask a question in the console and return a string
 * @param message question to ask
 * @async
 */
export declare const readLineConsole: (message: string) => Promise<string>;
/**
 * Ask a question in the console and return an integer
 * @param message question to ask
 * @async
 */
export declare const readIntConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a float
 * @param message question to ask
 * @async
 */
export declare const readFloatConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a boolean value
 * @param message question to ask
 * @async
 */
export declare const readBooleanConsole: (message: string) => Promise<boolean>;
/**
 * Asks the user to enter a color in the console
 * @param message the message to ask
 * @async
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
     */
    static get ALT_LEFT(): string;
    /**
     * The key for the right Alt
     */
    static get ALT_RIGHT(): string;
    /**
     * The key for BACKSPACE
     */
    static get BACKSPACE(): string;
    /**
     * The key for CAPS LOCK
     */
    static get CAPS_LOCK(): string;
    /**
     * The key for the left CTRL
     */
    static get CTRL_LEFT(): string;
    /**
     * The key for the right CTRL
     */
    static get CTRL_RIGHT(): string;
    /**
     * The key for DOWN
     */
    static get DOWN(): string;
    /**
     * The key for ENTER
     */
    static get ENTER(): string;
    /**
     * The key for LEFT
     */
    static get LEFT(): string;
    /**
     * The key for LEFT COMMAND
     */
    static get LEFT_COMMAND(): string;
    /**
     * The key for LEFT WINDOW
     */
    static get LEFT_WINDOW(): string;
    /**
     * The key for RIGHT
     */
    static get RIGHT(): string;
    /**
     * The key for RIGHT COMMAND
     */
    static get RIGHT_COMMAND(): string;
    /**
     * The key for RIGHT WINDOW
     */
    static get RIGHT_WINDOW(): string;
    /**
     * The key for SELECT
     */
    static get SELECT(): string;
    /**
     * The key for the left SHIFT
     */
    static get SHIFT_LEFT(): string;
    /**
     * The key for the right SHIFT
     */
    static get SHIFT_RIGHT(): string;
    /**
     * The key for SPACE
     */
    static get SPACE(): string;
    /**
     * The key for TAB
     */
    static get TAB(): string;
    /**
     * The key for UP
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
    /**
     * @constructor
     * @param x1 x-coordinate for the starting point
     * @param y1 y-coordinate for the starting point
     * @param x2 x-coordinate for the ending point
     * @param y2 y-coordinate for the ending point
     */
    constructor(x1: number, y1: number, x2: number, y2: number);
    /**
     * @constructor
     * @param x1 x-coordinate for the starting point
     * @param y1 y-coordinate for the starting point
     * @param x2 x-coordinate for the ending point
     * @param y2 y-coordinate for the ending point
     * @param width the width of the line
     */
    constructor(x1: number, y1: number, x2: number, y2: number, width: number);
    /**
     * @constructor
     * @param x1 x-coordinate for the starting point
     * @param y1 y-coordinate for the starting point
     * @param x2 x-coordinate for the ending point
     * @param y2 y-coordinate for the ending point
     * @param width the width of the line
     * @param color the color of the line
     */
    constructor(x1: number, y1: number, x2: number, y2: number, width: number, color: string | CanvasGradient);
    toString(): string;
    /**
     * set the width of the line
     * @param w the new width
     */
    setLineWidth(w: number): this;
    /**
     * X-coordinate for the starting point
     */
    set x1(v: number);
    get x1(): number;
    /**
     * X-coordinate for the ending point
     */
    set x2(v: number);
    get x2(): number;
    /**
     * Y-coordinate for the starting point
     */
    set y1(v: number);
    get y1(): number;
    /**
     * Y-coordinate for the ending point
     */
    set y2(v: number);
    get y2(): number;
    /**
     * set the starting point
     * @param x the x-coordinate for the starting point
     * @param y the y-coordinate for the starting point
     */
    setStartpoint(x: number, y: number): this;
    /**
     * set the ending point
     * @param x the x-coordinate for the ending point
     * @param y the y-coordinate for the ending point
     */
    setEndpoint(x: number, y: number): this;
    /**
     * sets the Line's to the start position (`x1`, `y1`)
     * @param x1 new x-coordinate of the shape
     * @param y1 new y-coordinate of the shape
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
    /**
     * @constructor
     * @param width the width of the oval
     * @param height the height of the oval
     */
    constructor(width: number, height: number);
    /**
     * @constructor
     * @param width the width of the oval
     * @param height the height of the oval
     * @param x the x-position
     * @param y the y-position
     */
    constructor(width: number, height: number, x: number, y: number);
    /**
     * @constructor
     * @param width the width of the oval
     * @param height the height of the oval
     * @param x the x-position
     * @param y the y-position
     * @param color the color of the oval
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient);
    /**
     * The width of the oval
     */
    set width(v: number);
    get width(): number;
    /**
     * set the width of the oval
     * @param width the new width
     */
    setWidth(width: number): this;
    /**
     * The height of the oval
     */
    set height(v: number);
    get height(): number;
    /**
     * set the height of the oval
     * @param height the new height
     */
    setHeight(height: number): this;
    /**
     * set the width and height of the oval
     * @param width the new width of the oval
     * @param height the new height of the oval
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
     * @param min minimum value of the integer
     * @param max maximum value of the integer
     */
    static nextInt(min: number, max: number): number;
    /**
     * Returns true with a probability of 50% or `probability`%
     * @param probability The probability of returning true from 0 (never) to 1 (always)
     */
    static nextBoolean(probability?: number): boolean;
    /**
     * Returns a random float between `min` and `max`
     * @param min minimum value of the float
     * @param max maximum value of the float
     */
    static nextFloat(min: number, max: number): number;
    /**
     * Returns a random hexadecimal color
     */
    static nextColor(): string;
    /**
     * Returns a random hex string between min and max
     * @param min minimum value
     * @param max maximum value
     */
    static randomHex(min: number, max: number): string;
    /**
     * Returns a random value from the array
     * @param array The array to extract a value from
     */
    static randomArrayValue<ArrayType>(array: ArrayType[]): ArrayType;
}

/**
 * The rectangle shape
 */
export declare class Rectangle extends baseObj {
    private _width;
    private _height;
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     */
    constructor(width: number, height: number);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     */
    constructor(width: number, height: number, x: number, y: number);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     * @param rotation the rectangle's rotation in radians
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient, rotation: number);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     * @param rotation the rectangle's rotation in radians
     * @param outline whether to outline the rectangle
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient, rotation: number, outline: boolean);
    /**
     * @constructor
     * @param width the rectangle's width
     * @param height the rectangle's height
     * @param x the rectangle's x-position
     * @param y the rectangle's y-position
     * @param color the rectangle's color
     * @param rotation the rectangle's rotation in radians
     * @param outline whether to outline the rectangle
     * @param outlineColor the outline's color
     */
    constructor(width: number, height: number, x: number, y: number, color: string | CanvasGradient, rotation: number, outline: boolean, outlineColor: string);
    /**
     * The rectangle's width
     */
    set width(v: number);
    get width(): number;
    /**
     * Returns the width of the rectangle
     */
    getWidth(): number;
    /**
     * sets the width of the rectangle
     * @param width the new width
     */
    setWidth(width: number): this;
    /**
     * The rectangle's height
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the rectangle
     */
    getHeight(): number;
    /**
     * sets the height of the rectangle
     * @param height the new height
     */
    setHeight(height: number): this;
    /**
     * set the width and height of the rectangle
     * @param width the rectangle's new width
     * @param height the rectangle's new height
     */
    setSize(width: number, height: number): this;
    draw(): void;
    containsPoint(x: number, y: number): boolean;
}

/**
 * The canvas everything is drawn to
 */
export declare const canvas: HTMLCanvasElement;
/**
 * The console println logs to
 */
export declare const output: HTMLPreElement;
/**
 * The canvas context
 */
export declare const ctx: CanvasRenderingContext2D;
/**
 * Returns the width of the canvas
 */
export declare const getWidth: () => number;
/**
 * Returns the height of the canvas
 */
export declare const getHeight: () => number;
/**
 * Set the width and height of the canvas
 * @param width the canvas's new width
 * @param height the canvas's new height
 */
export declare const setSize: (width: number, height: number) => void;
/**
 * Set the background color of the canvas
 * @param color the new background color
 */
export declare const setBackgroundColor: (color: string) => void;
/**
 * Show the mouse over the canvas
 * @param cursor (optional) the css cursor to show
 */
export declare const showCursor: (cursor?: string | undefined) => void;
/**
 * Hide the mouse over the canvas
 */
export declare const hideCursor: () => void;

/**
 * All the shapes that have been added to the screen
 */
export declare const shapes: baseObj[];
/**
 * Set whether the canvas should update every frame
 * @param update whether to redraw each frame;
 */
export declare const setUpdate: (update: boolean) => void;
/**
 * Removes all objects from the canvas
 */
export declare const removeAll: () => void;
/**
 * Adds all shapes that are passed to the screen
 * @param args any number of shapes to add
 */
export declare const add: (...args: baseObj[]) => void;
/**
 * Removes all shapes that are passed from the screen
 * @param args shapes to remove
 */
export declare const remove: (...args: baseObj[]) => void;
/**
 * Returns the shape that is on the top at the point (`x`, `y`)
 * @param x x-coordinate to check
 * @param y y-coordinate to check
 */
export declare const getElementAt: (x: number, y: number) => baseObj | undefined;
/**
 * Returns the all the shapes that are at the point (`x`, `y`)
 * @param x the x-value to find
 * @param y the y-value to check
 */
export declare function getElementsAt(x: number, y: number): Array<baseObj>;
/**
 * Returns the all the shapes onscreen
 * @param showAll return all shapes onscreen
 */
export declare function getElementsAt(showAll: true): Array<baseObj>;

/**
 * Checks if a font matches a canvas font
 * @param font the font to check
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
    /**
     * @constructor
     * @param txt the text to display
     * @param font the font to use as \`${size}px ${fontname}\`
     */
    constructor(txt: string, font: string);
    /**
     * @constructor
     * @param txt the text to display
     * @param font the font to use as \`${size}px ${fontname}\`
     * @param x the x position of the text
     * @param y the y position of the text
     */
    constructor(txt: string, font: string, x: number, y: number);
    /**
     * A string that follows the pattern \`${size}px ${fontname}\`
     */
    set font(v: string);
    get font(): string;
    /**
     * Allows you to public set the text's font
     * @param font the new font of the Text
     */
    setFont(font: string): this;
    /**
     * The text to display
     */
    set text(v: string);
    get text(): string;
    /**
     * Returns the Text's text
     */
    getText(): string;
    /**
     * sets the text to display to `txt`
     * @param txt the string to display
     */
    setText(txt: string): this;
    /**
     * The width of the Text
     * @readonly
     */
    get width(): number;
    /**
     * Returns the Text's width
     */
    getWidth(): number;
    /**
     * The Text's height
     */
    set height(v: number);
    get height(): number;
    /**
     * Returns the height of the Text
     */
    getHeight(): number;
    /**
     * set the Height for the Text
     * @param height {number} the new height
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
 */
export declare const timers: Array<ITimer>;
declare type NotArray = number | boolean | string | object;
declare type TenTuple = [NotArray, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?];
declare type TupleParams<T> = T extends null | undefined ? () => void : (param: T) => void;
/**
 * Sets a timer with the callback `callback`
 * @param callback function for the timer to call
 * @param delay delay between the calls
 * @param params the parameters to pass to the callback, can be anything
 * @param name name of the timer
 */
export declare const setTimer: <T extends string | number | boolean | object | TenTuple>(callback: TupleParams<T>, delay: number, params?: T | undefined, name?: string | undefined) => void;
/**
 * Stops a previously set timer
 * @param stopId the timer's name or the callback the timer was set with
 */
export declare const stopTimer: (stopId: string | ((...params: any[]) => void)) => void;
/**
 * Stops all timers
 */
export declare const stopAllTimers: () => void;
export {};

/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const mouseClickMethod: (func: (e: MouseEvent) => void) => void;
/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const mouseMoveMethod: (func: (e: MouseEvent) => void) => void;
/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const keyDownMethod: (func: (e: KeyboardEvent) => void) => void;
/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @deprecated
 */
export declare const keyUpMethod: (func: (e: KeyboardEvent) => void) => void;

/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param x A numeric expression for the x coordinate.
 * @param y A numeric expression for the y coordinate.
 * @param radians A numeric expression for the number of radians it is rotated.
 */
export declare const rotatePoint: (x: number, y: number, radians: number) => {
    x: number;
    y: number;
};
/**
 * Returns the distance of a line segment starting at (`x1`, `y1`)
 * and ending at (`x2`, `y2`)
 * @param x1 x-coordinate for the starting point
 * @param y1 y-coordinate for the starting point
 * @param x2 x-coordinate for the ending point
 * @param y2 y-coordinate for the ending point
 */
export declare const lineDistance: (x1: number, y1: number, x2: number, y2: number) => number;
/**
 * Returns the greatest common factor between `a` and `b`
 * @param a numerical expression
 * @param b numerical expression
 */
export declare const gcf: (a: number, b: number) => number;
/**
 * Returns the mouse's position on the canvas
 * @param e the event to get the position from
 */
export declare const getPosition: (e: MouseEvent) => {
    x: number;
    y: number;
};
/**
 * Convert a number of degrees to radians
 * @param degrees the degrees to convert
 */
export declare const toRadians: (degrees: number) => number;
/**
 * Convert a number of radians to degrees
 * @param radians the radians to convert
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
    constructor(src: string, width: number, height: number, x: number, y: number, sx: number, sy: number, swidth: number, sheight: number);
    /**
     * The image to display
     * @readonly
     */
    get image(): HTMLImageElement;
    /**
     * sets the image to have a width of `width` while maintaining the aspect ratio
     * @param width the new width
     */
    setAspectWidth(width: number): this;
    /**
     * sets the image to have a height of `height` while maintaining the aspect ratio
     * @param height the new height
     */
    setAspectHeight(height: number): this;
    /**
     * the aspect ratio of the image
     * @readonly
     */
    get aspectRatio(): {
        w: number;
        h: number;
    };
    /**
     * sets a new portion of the image to display
     * @param sx the x-position of the clip
     * @param sy the y-position of the clip
     * @param swidth the width of the clip
     * @param sheight the height of the clip
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

