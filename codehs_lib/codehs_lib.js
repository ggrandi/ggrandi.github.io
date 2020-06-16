/* eslint-disable */
/* prettier-ignore */
window.codehs_lib = 
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Arc.ts":
/*!********************!*\
  !*** ./src/Arc.ts ***!
  \********************/
/*! exports provided: ArcMode, Arc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcMode", function() { return ArcMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The enum to set the arc's mode
 * @enum {number}
 * @readonly
 */
var ArcMode;
(function (ArcMode) {
    /** The value for degrees */
    ArcMode[ArcMode["DEGREES"] = 0] = "DEGREES";
    /** The value for radians */
    ArcMode[ArcMode["RADIANS"] = 1] = "RADIANS";
})(ArcMode || (ArcMode = {}));
/**
 * The Arc shape
 */
class Arc extends _index__WEBPACK_IMPORTED_MODULE_0__["baseObj"] {
    constructor(radius, startingAngle, endingAngle, mode, x, y, counterClockwise) {
        super();
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this._radius = radius;
        this._sa = mode === ArcMode.DEGREES ? (startingAngle * Math.PI) / 180 : startingAngle;
        this._ea = mode === ArcMode.DEGREES ? (endingAngle * Math.PI) / 180 : endingAngle;
        this._cc = counterClockwise !== null && counterClockwise !== void 0 ? counterClockwise : false;
        this.type = "Arc";
    }
    /**
     * The radius of the arc
     */
    set radius(v) {
        this._radius = v;
    }
    get radius() {
        return this._radius;
    }
    /**
     * The starting angle of the arc
     */
    set startingAngle(v) {
        this._sa = v;
    }
    get startingAngle() {
        return this._sa;
    }
    /**
     * Set the new startingAngle
     * @param angle the new starting angle
     */
    setStartingAngle(angle) {
        this._sa = angle;
        return this;
    }
    /**
     * The ending angle of the arc
     */
    set endingAngle(v) {
        this._ea = v;
    }
    get endingAngle() {
        return this._ea;
    }
    /**
     * Whether or not the arc is counterclockwise
     */
    set counterClockwise(cc) {
        this._cc = cc;
    }
    get counterClockwise() {
        return this._cc;
    }
    /**
     * Set the ending angle of the arc
     * @param angle The new ending angle
     */
    setEndingAngle(angle) {
        this._sa = angle;
        return this;
    }
    /**
     * Set the starting and ending angle of the arc
     * @param startingAngle the new starting angle
     * @param endingAngle the new ending angle
     */
    setAngle(startingAngle, endingAngle) {
        this._sa = startingAngle;
        this._ea = endingAngle;
        return this;
    }
    /**
     * Returns the angle of the arc
     */
    getAngle() {
        return {
            startingAngle: this._sa,
            endingAngle: this._ea,
        };
    }
    draw() {
        const cx = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x;
        const cy = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(this.x - cx, this.y - cy);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(this.rotation);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].arc(0, 0, this._radius, this._sa, this._ea, this._cc);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineTo(0, 0);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
        if (this.outline) {
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = this.outlineColor;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = this.outlineWidth;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
    }
    onScreen() {
        return (this.x + this.radius >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x &&
            this.x - this.radius <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].width &&
            this.y + this.radius >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y &&
            this.y - this.radius <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    }
    containsPoint(x, y) {
        x -= this.x;
        y -= this.y;
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        const R = Object(_index__WEBPACK_IMPORTED_MODULE_0__["lineDistance"])(0, 0, x, y);
        if (R >= this._radius + oW) {
            return false;
        }
        if (this.rotation !== 0) {
            const point = Object(_index__WEBPACK_IMPORTED_MODULE_0__["rotatePoint"])(x, y, this.rotation);
            x = point.x;
            y = point.y;
        }
        let A = Math.atan2(y, x);
        if (A < 0) {
            A += 2 * Math.PI;
        }
        return this._cc !== (this._sa < this._ea ? this._sa < A && A < this._ea : A > this._sa || A < this._ea);
    }
}


/***/ }),

/***/ "./src/Circle.ts":
/*!***********************!*\
  !*** ./src/Circle.ts ***!
  \***********************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The Circle shape
 */
class Circle extends _index__WEBPACK_IMPORTED_MODULE_0__["baseObj"] {
    constructor(radius, x, y, color, outline, outlineColor) {
        super();
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.color = color !== null && color !== void 0 ? color : "black";
        if (color && !Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(color)) {
            console.warn(`The color ${color} is not a valid color`);
            this.color = "black";
        }
        this.outline = outline || false;
        this.outlineColor = outlineColor || "black";
        if (outlineColor && !Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(outlineColor)) {
            console.warn(`The outline color ${outlineColor} is not a valid color`);
            this.outlineColor = "black";
        }
        this._radius = radius;
        this.type = "Circle";
    }
    /**
     * The circle's radius
     */
    set radius(v) {
        this._radius = Math.abs(v);
    }
    get radius() {
        return this._radius;
    }
    /**
     * The circle's diameter
     */
    set diameter(v) {
        this._radius = Math.abs(2 * v);
    }
    get diameter() {
        return 2 * this._radius;
    }
    /**
     * Returns the Circle's diameter
     */
    getDiameter() {
        return 2 * this._radius;
    }
    /**
     * Sets the Circle's diameter to `diameter`
     * @param diameter the new diameter
     */
    setDiameter(diameter) {
        this._radius = Math.abs(2 * diameter);
        return this;
    }
    /**
     * Returns the Circle's radius
     */
    getRadius() {
        return this._radius;
    }
    /**
     * Sets the Circle's radius to `radius`
     * @param radius the new radius
     */
    setRadius(radius) {
        this._radius = Math.abs(radius);
        return this;
    }
    draw() {
        const cx = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x;
        const cy = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].arc(this.x - cx, this.y - cy, this._radius, 0, Math.PI * 2);
        if (this.outline) {
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = this.outlineColor;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = this.outlineWidth;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
    }
    onScreen() {
        return (this.x + this.radius >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x &&
            this.x - this.radius <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].width &&
            this.y + this.radius >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y &&
            this.y - this.radius <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    }
    containsPoint(x, y) {
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        return Object(_index__WEBPACK_IMPORTED_MODULE_0__["lineDistance"])(this.x, this.y, x, y) < this.radius + oW;
    }
}


/***/ }),

/***/ "./src/Color.ts":
/*!**********************!*\
  !*** ./src/Color.ts ***!
  \**********************/
/*! exports provided: Color, checkColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColor", function() { return checkColor; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The object that contains all the colors
 */
class Color extends String {
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
        return `#${_index__WEBPACK_IMPORTED_MODULE_0__["Randomizer"].randomHex(32, 255)}1010`;
    }
    /** Returns a random shade of Green */
    static randomGreen() {
        return `#10${_index__WEBPACK_IMPORTED_MODULE_0__["Randomizer"].randomHex(32, 255)}10`;
    }
    /** Returns a random shade of Blue */
    static randomBlue() {
        return `#1010${_index__WEBPACK_IMPORTED_MODULE_0__["Randomizer"].randomHex(32, 255)}`;
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
const checkColor = (color) => {
    const hexColor = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;
    // eslint-disable-next-line max-len
    const rgbColor = /^rgb(\((([01]?\d?\d|2([0-4]\d|5[0-5])), ?){2}([01]?\d?\d|2([0-4]\d|5[0-5]))|a\((([01]?\d?\d|2([0-4]\d|5[0-5])), ?){3}(1|0?(.\d+)?))\)$/;
    // eslint-disable-next-line max-len
    const hslColor = /^hsl(\((3([0-5]\d|60)|[0-2]?(\d)?\d)(, ?((100|\d?\d)%)){2}|a\((3([0-5]\d|60)|[0-2]?(\d)?\d)(, ?((100|\d?\d)%)){2}, ?(1|0(.\d+)?))\)$/;
    return (color instanceof CanvasGradient ||
        hexColor.test(color) ||
        rgbColor.test(color) ||
        hslColor.test(color) ||
        Object.prototype.hasOwnProperty.call(Color, color.toLowerCase()));
};


/***/ }),

/***/ "./src/Keyboard.ts":
/*!*************************!*\
  !*** ./src/Keyboard.ts ***!
  \*************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/**
 * CodeHS's Keyboard object. If possible use the built-in javascript
 * KeyboardEvent.key or KeyboardEvent.code in your handler
 * (Included for compatibility with CodeHS, compare to e.code instead of e.keyCode)
 * @deprecated
 */
class Keyboard {
    /**
     * The key for the Left Alt
     */
    static get ALT_LEFT() {
        return "AltLeft";
    }
    /**
     * The key for the right Alt
     */
    static get ALT_RIGHT() {
        return "AltRight";
    }
    /**
     * The key for BACKSPACE
     */
    static get BACKSPACE() {
        return "Backspace";
    }
    /**
     * The key for CAPS LOCK
     */
    static get CAPS_LOCK() {
        return "CapsLock";
    }
    /**
     * The key for the left CTRL
     */
    static get CTRL_LEFT() {
        return "ControlLeft";
    }
    /**
     * The key for the right CTRL
     */
    static get CTRL_RIGHT() {
        return "ControlRight";
    }
    /**
     * The key for DOWN
     */
    static get DOWN() {
        return "ArrowDown";
    }
    /**
     * The key for ENTER
     */
    static get ENTER() {
        return "Enter";
    }
    /**
     * The key for LEFT
     */
    static get LEFT() {
        return "ArrowLeft";
    }
    /**
     * The key for LEFT COMMAND
     */
    static get LEFT_COMMAND() {
        return "OSLeft";
    }
    /**
     * The key for LEFT WINDOW
     */
    static get LEFT_WINDOW() {
        return "OSLeft";
    }
    /**
     * The key for RIGHT
     */
    static get RIGHT() {
        return "ArrowRight";
    }
    /**
     * The key for RIGHT COMMAND
     */
    static get RIGHT_COMMAND() {
        return "OSRight";
    }
    /**
     * The key for RIGHT WINDOW
     */
    static get RIGHT_WINDOW() {
        return "OSRight";
    }
    /**
     * The key for SELECT
     */
    static get SELECT() {
        return "OSLeft";
    }
    /**
     * The key for the left SHIFT
     */
    static get SHIFT_LEFT() {
        return "ShiftLeft";
    }
    /**
     * The key for the right SHIFT
     */
    static get SHIFT_RIGHT() {
        return "ShiftLeft";
    }
    /**
     * The key for SPACE
     */
    static get SPACE() {
        return "Space";
    }
    /**
     * The key for TAB
     */
    static get TAB() {
        return "Tab";
    }
    /**
     * The key for UP
     */
    static get UP() {
        return "ArrowUp";
    }
}


/***/ }),

/***/ "./src/Line.ts":
/*!*********************!*\
  !*** ./src/Line.ts ***!
  \*********************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The Line shape
 */
class Line extends _index__WEBPACK_IMPORTED_MODULE_0__["baseObj"] {
    constructor(x1, y1, x2, y2, width, color) {
        super();
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this.color = color || "black";
        if (color && !Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(color)) {
            console.warn(`Your color of ${color} is not a valid color`);
            this.color = "black";
        }
        this._width = width || 2;
        this.type = "Line";
    }
    toString() {
        return `${this.type} from (${this.x1}, ${this.y1}) to (${this.x2}, ${this.y2})`;
    }
    /**
     * Set the width of the line
     * @param w the new width
     */
    setLineWidth(w) {
        this._width = w;
        return this;
    }
    /**
     * X-coordinate for the starting point
     */
    set x1(v) {
        this._x1 = v;
    }
    get x1() {
        return this._x1;
    }
    /**
     * Returns the starting x of the line
     */
    getStartX() {
        return this._x1;
    }
    /**
     * X-coordinate for the ending point
     */
    set x2(v) {
        this._x2 = v;
    }
    get x2() {
        return this._x2;
    }
    /**
     * Returns the ending x of the line
     */
    getEndX() {
        return this._x1;
    }
    /**
     * Y-coordinate for the starting point
     */
    set y1(v) {
        this._y1 = v;
    }
    get y1() {
        return this._y1;
    }
    /**
     * Returns the starting y of the line
     */
    getStartY() {
        return this._x1;
    }
    /**
     * Y-coordinate for the ending point
     */
    set y2(v) {
        this._y2 = v;
    }
    get y2() {
        return this._y2;
    }
    /**
     * Returns the starting y of the line
     */
    getEndY() {
        return this._x1;
    }
    setStartpoint(x, y) {
        if (typeof x === "number") {
            this._x1 = x;
            this._y1 = y;
        }
        else {
            this._x1 = x.x;
            this._y1 = x.y;
        }
        return this;
    }
    setEndpoint(x, y) {
        if (typeof x === "number") {
            this._x2 = x;
            this._y2 = y;
        }
        else {
            this._x2 = x.x;
            this._y2 = x.y;
        }
        return this;
        return this;
    }
    setPosition(x1, y1) {
        return this.setStartpoint(x1, y1);
    }
    draw() {
        const cx = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x;
        const cy = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y;
        const x1 = this._x1 - cx;
        const y1 = this._y1 - cy;
        const x2 = this._x2 - cx;
        const y2 = this._y2 - cy;
        if (this.outline) {
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
            const w = this._width + 2 * this.outlineWidth;
            const h = Object(_index__WEBPACK_IMPORTED_MODULE_0__["lineDistance"])(this.x1, this.y1, this.x2, this.y2) + 2 * this.outlineWidth;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(Math.min(x1, x2) + Math.abs(x1 - x2) / 2, Math.min(y1, y2) + Math.abs(y1 - y2) / 2);
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(Math.atan2(-(this.x2 - this.x1), this.y2 - this.y1));
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.outlineColor;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].rect(-w / 2, -h / 2, w, h);
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = this._width;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = this.color;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].moveTo(x1, y1);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineTo(x2, y2);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
    }
    onScreen() {
        return (Math.max(this.x1, this.x2) >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x &&
            Math.min(this.x1, this.x2) <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].width &&
            Math.max(this.y1, this.y2) >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y &&
            Math.min(this.y1, this.y2) <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    }
    containsPoint(x, y) {
        const r = Math.atan2(-(this.x2 - this.x1), this.y2 - this.y1);
        const point = Object(_index__WEBPACK_IMPORTED_MODULE_0__["rotatePoint"])(x - this.x1, y - this.y1, r);
        x = point.x;
        y = point.y;
        const length = Object(_index__WEBPACK_IMPORTED_MODULE_0__["lineDistance"])(this.x1, this.y1, this.x2, this.y2);
        const oW = this.outline ? this.outlineWidth : 0;
        return -this._width / 2 - oW < x && x < this._width / 2 + oW && -oW < y && y < length + oW;
    }
}


/***/ }),

/***/ "./src/Oval.ts":
/*!*********************!*\
  !*** ./src/Oval.ts ***!
  \*********************/
/*! exports provided: Oval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oval", function() { return Oval; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The oval shape
 */
class Oval extends _index__WEBPACK_IMPORTED_MODULE_0__["baseObj"] {
    constructor(width, height, x, y, color) {
        super();
        this._width = width;
        this._height = height;
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.color = color || "black";
        if (color && !Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(color)) {
            console.warn(`Your color of ${color} is not a valid color`);
            this.color = "black";
        }
    }
    /**
     * The width of the oval
     */
    set width(v) {
        this._width = v;
    }
    get width() {
        return this._width;
    }
    /**
     * Set the width of the oval
     * @param width the new width
     */
    setWidth(width) {
        this._width = width;
        return this;
    }
    /**
     * The height of the oval
     */
    set height(v) {
        this._height = v;
    }
    get height() {
        return this._height;
    }
    /**
     * Set the height of the oval
     * @param height the new height
     */
    setHeight(height) {
        this._height = height;
        return this;
    }
    /**
     * Set the width and height of the oval
     * @param width the new width of the oval
     * @param height the new height of the oval
     */
    setSize(width, height) {
        this._width = width;
        this._height = height;
        return this;
    }
    draw() {
        const cx = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x;
        const cy = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].ellipse(this.x - cx, this.y - cy, this._width / 2, this._height / 2, this.rotation, 0, 2 * Math.PI);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        if (this.outline) {
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = this.outlineColor;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = this.outlineWidth;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
    }
    onScreen() {
        return (this.x + this.width >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x &&
            this.x <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].width &&
            this.y + this.height >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y &&
            this.y <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    }
    containsPoint(x, y) {
        x -= this.x;
        y -= this.y;
        if (this.rotation !== 0) {
            const point = Object(_index__WEBPACK_IMPORTED_MODULE_0__["rotatePoint"])(x, y, this.rotation);
            x = point.x;
            y = point.y;
        }
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        return x ** 2 / (this._width / 2 + oW) ** 2 + y ** 2 / (this._height / 2 + oW) ** 2 <= 1;
    }
}


/***/ }),

/***/ "./src/Randomizer.ts":
/*!***************************!*\
  !*** ./src/Randomizer.ts ***!
  \***************************/
/*! exports provided: Randomizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Randomizer", function() { return Randomizer; });
/**
 * The object that returns random values
 */
class Randomizer {
    constructor() {
        console.warn("Creating a new Randomizer creates a new blank object");
    }
    /**
     * Returns a random integer between `min` and `max`
     * @param min minimum value of the integer
     * @param max maximum value of the integer
     */
    static nextInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * Returns true with a probability of 50% or `probability`%
     * @param probability The probability of returning true from 0 (never) to 1 (always)
     */
    static nextBoolean(probability = 0.5) {
        if (probability < 0 || probability > 1) {
            console.warn(`The value of ${probability} is not between 1 and 0. Please pick a valid value`);
            probability = 0.5;
        }
        return Math.random() < probability;
    }
    /**
     * Returns a random float between `min` and `max`
     * @param min minimum value of the float
     * @param max maximum value of the float
     */
    static nextFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    /**
     * Returns a random hexadecimal color
     */
    static nextColor() {
        return `#${this.randomHex(0, 255)}${this.randomHex(0, 255)}${this.randomHex(0, 255)}`;
    }
    /**
     * Returns a random hex string between min and max
     * @param min minimum value
     * @param max maximum value
     */
    static randomHex(min, max) {
        const c = this.nextInt(min, max).toString(16);
        const length = max.toString(16).length;
        return c.length > length ? c : c.padStart(length, "0");
    }
    /**
     * Returns a random value from the array
     * @param array The array to extract a value from
     */
    static randomArrayValue(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}


/***/ }),

/***/ "./src/Rectangle.ts":
/*!**************************!*\
  !*** ./src/Rectangle.ts ***!
  \**************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The rectangle shape
 */
class Rectangle extends _index__WEBPACK_IMPORTED_MODULE_0__["baseObj"] {
    constructor(width, height, x, y, color, rotation, outline, outlineColor) {
        super();
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.color = color || "black";
        if (color && !Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(color)) {
            console.warn(`Your color of ${color} is not a valid color`);
            this.color = "black";
        }
        this.rotation = rotation || 0;
        this._width = width;
        this._height = height;
        this.outline = outline || false;
        this.outlineColor = outlineColor || "black";
        if (outlineColor && !Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(outlineColor)) {
            console.warn(`Your outline color of ${outlineColor} is not a valid color`);
            this.outlineColor = "black";
        }
        this.type = "Rectangle";
    }
    /**
     * The rectangle's width
     */
    set width(v) {
        this._width = v;
    }
    get width() {
        return this._width;
    }
    /**
     * Returns the width of the rectangle
     */
    getWidth() {
        return this.width;
    }
    /**
     * Sets the width of the rectangle
     * @param width the new width
     */
    setWidth(width) {
        this.width = width;
        return this;
    }
    /**
     * The rectangle's height
     */
    set height(v) {
        this._height = v;
    }
    get height() {
        return this._height;
    }
    /**
     * Returns the height of the rectangle
     */
    getHeight() {
        return this.height;
    }
    /**
     * Sets the height of the rectangle
     * @param height the new height
     */
    setHeight(height) {
        this.height = height;
        return this;
    }
    /**
     * Set the width and height of the rectangle
     * @param width the rectangle's new width
     * @param height the rectangle's new height
     */
    setSize(width, height) {
        this._width = width;
        this._height = height;
        return this;
    }
    draw() {
        const cx = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x;
        const cy = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(this.x + this._width / 2 - cx, this.y + this._height / 2 - cy);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(this.rotation);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].rect(-this._width / 2, -this._height / 2, this._width, this._height);
        if (this.outline) {
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = this.outlineColor;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = this.outlineWidth;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
    }
    onScreen() {
        return (this.x + this.width >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x &&
            this.x <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].width &&
            this.y + this.height >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y &&
            this.y <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    }
    containsPoint(x, y) {
        x -= this.x + this._width / 2;
        y -= this.y + this._height / 2;
        if (this.rotation !== 0) {
            const point = Object(_index__WEBPACK_IMPORTED_MODULE_0__["rotatePoint"])(x, y, this.rotation);
            x = point.x;
            y = point.y;
        }
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        return -this._width / 2 - oW < x && x < this._width / 2 + oW && -this._height / 2 - oW < y && y < this._height / 2 + oW;
    }
}


/***/ }),

/***/ "./src/Text.ts":
/*!*********************!*\
  !*** ./src/Text.ts ***!
  \*********************/
/*! exports provided: checkFont, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFont", function() { return checkFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

// eslint-disable-next-line max-len
const fontRegExp = /^((normal|italic|oblique) )?((normal|small-caps) )?((normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900) )?(\d+)(px|pt) [\w]+$/;
/**
 * Checks if a font matches a canvas font
 * @param font the font to check
 */
const checkFont = (font) => {
    return fontRegExp.test(font);
};
/**
 * The Text shape
 */
class Text extends _index__WEBPACK_IMPORTED_MODULE_0__["baseObj"] {
    constructor(txt, font, x, y) {
        super();
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this._txt = txt;
        if (!checkFont(font)) {
            console.warn(`Please pass a valid font to Text. Your font "${font}" should match \`\${size}px \${fontname}\``);
            font = "20px Arial";
        }
        this._font = font.replace("pt", "px");
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = this._font;
        this._w = _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(txt).width;
        this._h = Number(fontRegExp.exec(font)[7]);
        this.type = "Text";
    }
    /**
     * A string that follows the pattern \`${size}px ${fontname}\`
     */
    set font(v) {
        this._font = v;
        v = v.replace(/pt/i, "px");
        this._font = checkFont(v) ? v : "20px Arial";
        if (!checkFont(v)) {
            console.warn(`Please pass a valid font to Text. Your font \`${v}\` should match \`\${size}px \${fontname}\``);
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = this._font;
        this._w = _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(this._txt).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
    }
    get font() {
        return this._font;
    }
    /**
     * Allows you to public set the text's font
     * @param font the new font of the Text
     */
    setFont(font) {
        font = font.replace(/pt/i, "px");
        this._font = checkFont(font) ? font : "20px Arial";
        if (!checkFont(font)) {
            console.warn(`Please pass a valid font to Text. Your font \`${font}\` should match \`\${size}px \${fontname}\``);
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = this._font;
        this._w = _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(this._txt).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [20])[0]);
        return this;
    }
    /**
     * The text to display
     */
    set text(v) {
        this._txt = v;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = this._font;
        this._w = _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(v).width;
        this._h = Number((/(\d)+/g.exec(this._font) || [0])[0]);
    }
    get text() {
        return this._txt;
    }
    /**
     * Returns the Text's text
     */
    getText() {
        return this.text;
    }
    /**
     * Sets the text to display to `txt`
     * @param txt the string to display
     */
    setText(txt) {
        this.text = txt;
        return this;
    }
    /**
     * The width of the Text
     * @readonly
     */
    get width() {
        return this._w;
    }
    /**
     * Returns the Text's width
     */
    getWidth() {
        return this._w;
    }
    /**
     * The Text's height
     */
    set height(v) {
        this.font = `${v}px ${this._font.split("px ")[1]}`;
    }
    get height() {
        return this._h;
    }
    /**
     * Returns the height of the Text
     */
    getHeight() {
        return this.height;
    }
    /**
     * Set the Height for the Text
     * @param height {number} the new height
     */
    setHeight(height) {
        this.font = this.font.replace(/\d+/g, String(height));
        return this;
    }
    draw() {
        const cx = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x;
        const cy = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(this.x + this._w / 2 - cx, this.y - this._h / 2 - cy);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(this.rotation);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = this._font;
        if (this.outline) {
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = this.outlineColor;
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeText(this._txt, -this._w / 2, this._h / 2);
        }
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(this._txt, -this._w / 2, this._h / 2);
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
    }
    onScreen() {
        return (this.x + this.width >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x &&
            this.x <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].width &&
            this.y + this.height >= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y &&
            this.y <= _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y + _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    }
    containsPoint(x, y) {
        x -= this.x + this._w / 2;
        y -= this.y - this._h / 2;
        if (this.rotation !== 0) {
            const point = Object(_index__WEBPACK_IMPORTED_MODULE_0__["rotatePoint"])(x, y, this.rotation);
            x = point.x;
            y = point.y;
        }
        return -this._w / 2 < x && x < this._w / 2 && -this._h / 2 < y && y < this._h / 2;
    }
}


/***/ }),

/***/ "./src/Timers.ts":
/*!***********************!*\
  !*** ./src/Timers.ts ***!
  \***********************/
/*! exports provided: timers, setTimer, stopTimer, stopAllTimers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timers", function() { return timers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimer", function() { return setTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTimer", function() { return stopTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAllTimers", function() { return stopAllTimers; });
/**
 * The array of active timers
 */
const timers = [];
/**
 * Sets a timer with the callback `callback`
 * @param callback function for the timer to call
 * @param delay delay between the calls
 * @param params the parameters to pass to the callback, can be anything
 * @param name name of the timer
 */
const setTimer = (callback, delay, params, name) => {
    if (Math.max(delay, 50 / 3) !== delay) {
        console.warn(`Your delay of ${delay} is shorter than 1 / 60th of a second, please make sure that it is longer or equal to it`);
        delay = 50 / 3;
    }
    const id = window.setInterval(callback, delay, params);
    timers.push({
        callback,
        delay,
        params,
        name: name || callback.name,
        id,
    });
};
/**
 * Stops a previously set timer
 * @param stopId the timer's name or the callback the timer was set with
 */
const stopTimer = (stopId) => {
    timers.forEach((t) => {
        if (t.name === stopId || t.callback === stopId) {
            clearInterval(t.id);
            timers.splice(timers.indexOf(t), 1);
        }
    });
};
/**
 * Stops all timers
 */
const stopAllTimers = () => {
    timers.forEach((t) => clearInterval(t.id));
    timers.splice(0, timers.length);
};


/***/ }),

/***/ "./src/WebImage.ts":
/*!*************************!*\
  !*** ./src/WebImage.ts ***!
  \*************************/
/*! exports provided: WebImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebImage", function() { return WebImage; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The Image from the web shape
 */
class WebImage extends _index__WEBPACK_IMPORTED_MODULE_0__["Rectangle"] {
    constructor(src, width, height, x, y, sx, sy, swidth, sheight) {
        super(width, height, x !== null && x !== void 0 ? x : 0, y !== null && y !== void 0 ? y : 0, "#00000000");
        this._hasLoaded = false;
        this._img = new Image();
        this._img.src = src;
        this._img.onload = (e) => {
            const { naturalHeight, naturalWidth } = e.target;
            this._hasLoaded = true;
            if (this.width === 0) {
                this.width = naturalWidth;
                this.height = naturalHeight;
            }
            if (this._sw === 1) {
                this._sw = naturalWidth;
                this._sh = naturalHeight;
            }
            this.draw();
        };
        this._img.onerror = (err) => {
            console.error(`Image with an src of "${src}" failed to load because of the following reason:`, err);
        };
        this.type = "Image";
        this._sx = sx !== null && sx !== void 0 ? sx : 0;
        this._sy = sy !== null && sy !== void 0 ? sy : 0;
        this._sw = swidth !== null && swidth !== void 0 ? swidth : 1;
        this._sh = sheight !== null && sheight !== void 0 ? sheight : 1;
    }
    /**
     * The image to display
     * @readonly
     */
    get image() {
        return this._img;
    }
    /**
     * Sets the image to have a width of `width` while maintaining the aspect ratio
     * @param width the new width
     */
    setAspectWidth(width) {
        const { w, h } = this.aspectRatio;
        this.width = width;
        this.height = (h / w) * width;
        return this;
    }
    /**
     * Sets the image to have a height of `height` while maintaining the aspect ratio
     * @param height the new height
     */
    setAspectHeight(height) {
        const { w, h } = this.aspectRatio;
        this.height = height;
        this.width = (w / h) * height;
        return this;
    }
    /**
     * The aspect ratio of the image
     * @readonly
     */
    get aspectRatio() {
        const { naturalWidth, naturalHeight } = this._img;
        const f = Object(_index__WEBPACK_IMPORTED_MODULE_0__["gcf"])(naturalWidth, naturalHeight);
        return {
            w: naturalWidth / f,
            h: naturalHeight / f,
        };
    }
    /**
     * Sets a new portion of the image to display
     * @param sx the x-position of the clip
     * @param sy the y-position of the clip
     * @param swidth the width of the clip
     * @param sheight the height of the clip
     */
    setClip(sx, sy, swidth, sheight) {
        this._sx = sx;
        this._sy = sy;
        this._sw = swidth;
        this._sh = sheight;
        return this;
    }
    /**
     * Returns the clip of the image
     * @returns {Object<{ sx: number, sy: number, swidth: number, sheight: number }>}
     */
    getClip() {
        return { sx: this._sx, sy: this._sy, swidth: this._sw, sheight: this._sh };
    }
    draw() {
        const cx = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x;
        const cy = this.still ? 0 : _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y;
        super.draw();
        if (this._hasLoaded) {
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(this.x + this.width / 2 - cx, this.y + this.height / 2 - cy);
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(this.rotation);
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(this._img, this._sx, this._sy, this._sw, this._sh, -this.width / 2, -this.height / 2, this.width, this.height);
            _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
        }
    }
}


/***/ }),

/***/ "./src/baseObj.ts":
/*!************************!*\
  !*** ./src/baseObj.ts ***!
  \************************/
/*! exports provided: baseObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseObj", function() { return baseObj; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * The base shape that all other shapes inherit from
 */
class baseObj {
    /**
     * @constructor
     */
    constructor() {
        /**
         * Whether or not the Shape moves with the camera.
         * Still shapes are drawn on top of other shapes.
         */
        this.still = false;
        this._x = 0;
        this._y = 0;
        this._color = "black";
        this._type = "Thing";
        this._rot = 0;
        this._outline = false;
        this._outlineColor = "black";
        this._outlineWidth = 1;
    }
    toString() {
        return `${this.type} at (${this._x}, ${this._y})`;
    }
    /**
     * The type of the shape
     */
    set type(v) {
        this._type = v;
    }
    get type() {
        return this._type;
    }
    /**
     * Returns the type of the Shape
     */
    getType() {
        return this._type;
    }
    setPosition(x, y) {
        if (typeof x === "number") {
            this._x = x;
            this._y = y;
        }
        else {
            this._x = x.x;
            this._y = x.y;
        }
        return this;
    }
    /**
     * Sets the color of the shape to `color`
     * @param color css color, hexadecimal string, or rgba() string
     */
    setColor(color) {
        if (!Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(color)) {
            console.warn(`Your color of ${color} is not a valid color`);
        }
        this.color = Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(color) ? color : "black";
        return this;
    }
    setOutline(show, color, width) {
        this.outline = show;
        this.outlineColor = color || this.outlineColor;
        this.outlineWidth = width || this.outlineWidth;
        return this;
    }
    setBorder(show, color, width) {
        this.outline = show;
        this.outlineColor = color || this.outlineColor;
        this.outlineWidth = width || this.outlineWidth;
        return this;
    }
    /**
     * Sets the color of the shape's outline to `color`
     * @param color css color, hexadecimal string, or rgba() string
     */
    setOutlineColor(color) {
        this.outlineColor = color;
        return this;
    }
    /**
     * Sets the color of the shape's outline to `color` (same as setOutlineColor)
     * @param color css color, hexadecimal string, or rgba() string
     */
    setBorderColor(color) {
        this.outlineColor = color;
        return this;
    }
    /**
     * Sets the width of the shape's outline to `width`
     * @param width the new widthoo of the outline
     */
    setOutlineWidth(width) {
        this.outlineWidth = width;
        return this;
    }
    /**
     * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
     * @param width the new width of the outline
     */
    setBorderWidth(width) {
        this.outlineWidth = width;
        return this;
    }
    /**
     * Whether or not to draw outline
     */
    set outline(v) {
        this._outline = v;
    }
    get outline() {
        return this._outline;
    }
    /**
     * Whether or not to draw outline (same as borderWidth)
     */
    set borderWidth(v) {
        this.outlineWidth = v;
    }
    get borderWidth() {
        return this.outlineWidth;
    }
    /**
     * Whether or not to draw outline
     */
    set outlineWidth(v) {
        if (v < 0) {
            console.warn(`The outline width should be positive, please fix your outline width of ${v}`);
            v = Math.abs(v);
        }
        this._outlineWidth = v;
    }
    get outlineWidth() {
        return this._outlineWidth;
    }
    /**
     * Whether or not to draw outline (same as outline)
     */
    set border(v) {
        this._outline = v;
    }
    get border() {
        return this._outline;
    }
    /**
     * The outline's color
     */
    set outlineColor(v) {
        if (!Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(v)) {
            console.warn(`Your color of ${v} is not a valid color`);
        }
        this._outlineColor = Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(v) ? v : "black";
    }
    get outlineColor() {
        return this._outlineColor;
    }
    /**
     * The outline's color (same as outlineColor)
     */
    set borderColor(v) {
        this.outlineColor = v;
    }
    get borderColor() {
        return this._outlineColor;
    }
    /**
     * The shape's x-position
     */
    set x(v) {
        this._x = v;
    }
    get x() {
        return this._x;
    }
    /**
     * Method to return the shapes x-position
     */
    getX() {
        return this._x;
    }
    /**
     * The shape's y-position
     */
    set y(v) {
        this._y = v;
    }
    get y() {
        return this._y;
    }
    /**
     * Method to return the shapes y-position
     */
    getY() {
        return this._y;
    }
    /**
     * Move a shape `dx` pixels right and `dy` pixels left
     * @param dx pixels to move along the x-axis
     * @param dy pixels to move along the y-axis
     */
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    }
    /**
     * The shape's rotation in degrees
     */
    set rotationDegrees(r) {
        this._rot = (r * Math.PI) / 180;
    }
    get rotationDegrees() {
        return (this._rot * 180) / Math.PI;
    }
    /**
     * Rotate the shape by `degrees` degrees
     * @param degrees number of degrees to rotate it by
     */
    rotateDegrees(degrees) {
        this._rot += (degrees * Math.PI) / 180;
        return this;
    }
    /**
     * The shape's rotation in radians
     */
    set rotation(r) {
        this._rot = r;
    }
    get rotation() {
        return this._rot;
    }
    /**
     * Rotate the shape by `radians` radians
     * @param radians number of degrees to rotate it by
     */
    rotate(radians) {
        this._rot += radians;
        return this;
    }
    /**
     * Returns the shapes rotation in radians
     */
    getRotation() {
        return this._rot;
    }
    /**
     * Returns the shapes rotation in degrees
     */
    getRotationDegrees() {
        return (this._rot * 180) / Math.PI;
    }
    /**
     * The shape's color
     */
    set color(v) {
        if (!Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(v)) {
            console.warn(`Your color of ${v} is not a valid color`);
        }
        this._color = Object(_index__WEBPACK_IMPORTED_MODULE_0__["checkColor"])(v) ? v : "black";
    }
    get color() {
        return this._color;
    }
    /**
     * Returns the shape's color
     */
    getColor() {
        return this.color;
    }
    /**
     * Adds the shape to the canvas
     */
    add() {
        Object(_index__WEBPACK_IMPORTED_MODULE_0__["add"])(this);
        return this;
    }
    /**
     * Removes the shape from the canvas
     */
    remove() {
        Object(_index__WEBPACK_IMPORTED_MODULE_0__["remove"])(this);
        return this;
    }
    /**
     * The shape's y-position
     */
    get added() {
        return Object(_index__WEBPACK_IMPORTED_MODULE_0__["isElementAdded"])(this);
    }
    /**
     * Checks if this element has been added
     */
    isAdded() {
        return Object(_index__WEBPACK_IMPORTED_MODULE_0__["isElementAdded"])(this);
    }
    /**
     * Sets whether to move the shape with the camera.
     * Still shapes are drawn on top of other shapes
     * @param still whether to move the shape with the camera
     */
    setStill(still) {
        this.still = still;
        return this;
    }
    /**
     * Method called to draw the shape on the screen
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    draw() { }
    /** Returns whether a shape is on screen */
    onScreen() {
        return false;
    }
    /**
     * Returns a boolean to check if the shape contains the point (`x`, `y`)
     * @param x x-position of point
     * @param y y-position of point
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    containsPoint(x, y) {
        return false;
    }
}


/***/ }),

/***/ "./src/consoleCommands.ts":
/*!********************************!*\
  !*** ./src/consoleCommands.ts ***!
  \********************************/
/*! exports provided: clearConsole, println, readLine, readInt, readFloat, readBoolean, consoleInput, readLineConsole, readIntConsole, readFloatConsole, readBooleanConsole, readColorConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearConsole", function() { return clearConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "println", function() { return println; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readLine", function() { return readLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInt", function() { return readInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFloat", function() { return readFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBoolean", function() { return readBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleInput", function() { return consoleInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readLineConsole", function() { return readLineConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readIntConsole", function() { return readIntConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFloatConsole", function() { return readFloatConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBooleanConsole", function() { return readBooleanConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readColorConsole", function() { return readColorConsole; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

const createColoredSpan = (inner, color) => {
    const s = document.createElement("span");
    s.innerHTML = inner;
    s.style.color = color;
    return s;
};
const addSeparator = (pre) => {
    if (pre.innerText) {
        const d = document.createElement("div");
        d.style.height = "1px";
        d.style.width = "100%";
        d.style.backgroundColor = "black";
        d.style.marginTop = "5px";
        d.style.marginBottom = "5px";
        d.className = "separator";
        pre.append(d);
    }
};
/**
 * Clears the output console
 */
const clearConsole = () => {
    while (_index__WEBPACK_IMPORTED_MODULE_0__["output"].lastChild) {
        _index__WEBPACK_IMPORTED_MODULE_0__["output"].removeChild(_index__WEBPACK_IMPORTED_MODULE_0__["output"].lastChild);
    }
};
/**
 * Logs any argument passed to the console
 * @param args arguments to print
 */
const println = (...args) => {
    addSeparator(_index__WEBPACK_IMPORTED_MODULE_0__["output"]);
    for (let i = 0; i < args.length; i++) {
        if (args[i] === null) {
            _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(createColoredSpan("null", "deeppink"));
        }
        else {
            switch (typeof args[i]) {
                case "number":
                    {
                        _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(createColoredSpan(String(args[i]), "purple"));
                    }
                    break;
                case "object":
                    {
                        // eslint-disable-next-line no-console
                        console.log(args[i]);
                        _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(createColoredSpan(`${args[i].toString()} => browser console`, "blue"));
                    }
                    break;
                case "boolean":
                    {
                        _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(createColoredSpan(String(args[i]), "red"));
                    }
                    break;
                case "undefined":
                    {
                        _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(createColoredSpan("undefined", "deeppink"));
                    }
                    break;
                default:
                    _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(createColoredSpan(String(args[i]), "black"));
            }
        }
        if (i !== args.length - 1) {
            _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(new Text(`, `));
        }
    }
    _index__WEBPACK_IMPORTED_MODULE_0__["output"].scrollTop = _index__WEBPACK_IMPORTED_MODULE_0__["output"].scrollHeight;
};
/**
 * Returns the user's answer to the prompt as a string
 * @param message the prompt to ask the user
 */
const readLine = (message) => {
    return String(prompt(message));
};
/**
 * Returns the user's answer to the prompt as an integer
 * @param message the prompt to ask the user
 */
const readInt = (message) => {
    let ans;
    if ((ans = parseInt(prompt(message) || "", 10))) {
        return ans;
    }
    for (let i = 0; i < 100; i++) {
        if ((ans = parseInt(prompt("Please enter an Integer. " + message) || "", 10))) {
            return ans;
        }
    }
    return 0;
};
/**
 * Returns the user's answer to the prompt as a float
 * @param message the prompt to ask the user
 */
const readFloat = (message) => {
    let ans;
    if ((ans = parseFloat(prompt(message) || ""))) {
        return ans;
    }
    for (let i = 0; i < 100; i++) {
        if ((ans = parseFloat(prompt("Please enter an Integer. " + message) || ""))) {
            return ans;
        }
    }
    return 0;
};
/**
 * Returns the user's answer to the prompt as a boolean
 * @param message the prompt to ask the user
 * @param y the yes string
 * @param n the no string
 */
const readBoolean = (message, y = "y", n = "n") => {
    let ans;
    if ((ans = prompt(`${message} (${y}|${n})`)) === y || ans === n) {
        return ans === y;
    }
    for (let i = 0; i < 100; i++) {
        if ((ans = prompt(`Please enter ${message} (${y}|${n})`)) === y || ans === n) {
            return ans === y;
        }
    }
    return false;
};
/**
 * Use this function to create your own console inputs if they are not supported by the library
 * @param message the message to display
 * @param submitHandler function to handle the submit
 * @param inputType the type of the input
 * @param submitButton whether to show a submit button or not
 * @async
 */
const consoleInput = async (message, submitHandler, inputType, submitButton) => {
    addSeparator(_index__WEBPACK_IMPORTED_MODULE_0__["output"]);
    _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(new Text(`${message}: `));
    const i = document.createElement("input");
    i.className = "consoleInput";
    i.type = inputType;
    i.value = "";
    _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(i);
    let submit;
    if (submitButton) {
        submit = document.createElement("input");
        submit.style.marginLeft = "10px";
        submit.className = "consoleInput";
        submit.type = "button";
        submit.value = "Submit";
        _index__WEBPACK_IMPORTED_MODULE_0__["output"].append(submit);
    }
    const p = new Promise((resolve) => {
        if (submitButton) {
            i.addEventListener("change", () => {
                submit.value = `Submit: ${i.value}`;
            });
            submit.addEventListener("click", function (e) {
                if (!(e.metaKey || e.ctrlKey)) {
                    const { value, done, color } = submitHandler(i, e);
                    if (done) {
                        i.before(createColoredSpan(String(value), String(color)));
                        _index__WEBPACK_IMPORTED_MODULE_0__["output"].removeChild(i);
                        _index__WEBPACK_IMPORTED_MODULE_0__["output"].removeChild(submit);
                        resolve(value);
                    }
                }
            }, false);
        }
        else {
            i.addEventListener("keydown", function (e) {
                if (!(e.metaKey || e.ctrlKey)) {
                    const { value, done, color } = submitHandler(i, e);
                    if (done) {
                        i.before(createColoredSpan(String(value), String(color)));
                        _index__WEBPACK_IMPORTED_MODULE_0__["output"].removeChild(i);
                        resolve(value);
                    }
                }
            }, false);
        }
    });
    i.focus();
    _index__WEBPACK_IMPORTED_MODULE_0__["output"].scrollTop = _index__WEBPACK_IMPORTED_MODULE_0__["output"].scrollHeight;
    return await p;
};
/**
 * Ask a question in the console and return a string
 * @param message question to ask
 * @async
 */
const readLineConsole = async (message) => {
    return await consoleInput(message, function (input, e) {
        if (e.key === "Enter") {
            return {
                done: true,
                value: input.value,
                color: "black",
            };
        }
        return { done: false };
    }, "text");
};
const readNumberConsole = async (message, validation, checks) => {
    return await consoleInput(message, function (input, e) {
        if (e.key === "Enter" && !isNaN(validation(input.value))) {
            return {
                done: true,
                value: validation(input.value),
                color: "purple",
            };
        }
        if (e.key === "-" && input.value.length > 0) {
            e.preventDefault();
        }
        if (checks && !checks(input.value, e)) {
            return { done: false };
        }
        if (((isNaN(+e.key) && e.key.length < 2) || e.key === " ") && !(e.key === "-")) {
            e.preventDefault();
        }
        return { done: false };
    }, "number");
};
/**
 * Ask a question in the console and return an integer
 * @param message question to ask
 * @async
 */
const readIntConsole = async (message) => {
    return await readNumberConsole(message, (str) => parseInt(str, 10));
};
/**
 * Ask a question in the console and return a float
 * @param message question to ask
 * @async
 */
const readFloatConsole = async (message) => {
    return await readNumberConsole(message, (str) => parseFloat(str), (value, e) => !(e.key === "." && value.split(".").length <= 1));
};
/**
 * Ask a question in the console and return a boolean value
 * @param message question to ask
 * @async
 */
const readBooleanConsole = async (message) => {
    return await consoleInput(message, function (input) {
        return { done: true, color: "red", value: input.checked };
    }, "checkbox", true);
};
/**
 * Asks the user to enter a color in the console
 * @param message the message to ask
 * @async
 */
const readColorConsole = async (message) => {
    return await consoleInput(message, function (input) {
        return { done: true, color: input.value, value: input.value };
    }, "color", true);
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: canvas, ctx, output, getWidth, getHeight, hideCursor, setBackgroundColor, setSize, showCursor, getPosition, add, remove, removeAll, setUpdate, getElementAt, getElementsAt, shapes, isElementAdded, camera, moveHorizontal, moveVertical, baseObj, clearConsole, println, readBoolean, readFloat, readInt, readLine, consoleInput, readLineConsole, readIntConsole, readFloatConsole, readBooleanConsole, readColorConsole, Randomizer, Color, checkColor, Keyboard, Circle, Rectangle, Line, WebImage, Text, checkFont, Arc, ArcMode, Oval, setTimer, stopTimer, stopAllTimers, timers, keyDownMethod, mouseClickMethod, mouseMoveMethod, keyUpMethod, gcf, lineDistance, rotatePoint, toDegrees, toRadians */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["ctx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "output", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["getWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHeight", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["getHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideCursor", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["hideCursor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSize", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["setSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showCursor", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["showCursor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return _setup__WEBPACK_IMPORTED_MODULE_0__["getPosition"]; });

/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes */ "./src/shapes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAll", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["removeAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUpdate", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["setUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementAt", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["getElementAt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementsAt", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["getElementsAt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shapes", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["shapes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementAdded", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["isElementAdded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camera", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveHorizontal", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["moveHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveVertical", function() { return _shapes__WEBPACK_IMPORTED_MODULE_1__["moveVertical"]; });

/* harmony import */ var _baseObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseObj */ "./src/baseObj.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseObj", function() { return _baseObj__WEBPACK_IMPORTED_MODULE_2__["baseObj"]; });

/* harmony import */ var _consoleCommands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consoleCommands */ "./src/consoleCommands.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearConsole", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["clearConsole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "println", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["println"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBoolean", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readFloat", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readInt", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readLine", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consoleInput", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["consoleInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readLineConsole", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readLineConsole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readIntConsole", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readIntConsole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readFloatConsole", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readFloatConsole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBooleanConsole", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readBooleanConsole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readColorConsole", function() { return _consoleCommands__WEBPACK_IMPORTED_MODULE_3__["readColorConsole"]; });

/* harmony import */ var _Randomizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Randomizer */ "./src/Randomizer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Randomizer", function() { return _Randomizer__WEBPACK_IMPORTED_MODULE_4__["Randomizer"]; });

/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ "./src/Color.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _Color__WEBPACK_IMPORTED_MODULE_5__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkColor", function() { return _Color__WEBPACK_IMPORTED_MODULE_5__["checkColor"]; });

/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Keyboard */ "./src/Keyboard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _Keyboard__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Circle */ "./src/Circle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_7__["Circle"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rectangle */ "./src/Rectangle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_8__["Rectangle"]; });

/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Line */ "./src/Line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line__WEBPACK_IMPORTED_MODULE_9__["Line"]; });

/* harmony import */ var _WebImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WebImage */ "./src/WebImage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebImage", function() { return _WebImage__WEBPACK_IMPORTED_MODULE_10__["WebImage"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Text */ "./src/Text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_11__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFont", function() { return _Text__WEBPACK_IMPORTED_MODULE_11__["checkFont"]; });

/* harmony import */ var _Arc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Arc */ "./src/Arc.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return _Arc__WEBPACK_IMPORTED_MODULE_12__["Arc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcMode", function() { return _Arc__WEBPACK_IMPORTED_MODULE_12__["ArcMode"]; });

/* harmony import */ var _Oval__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Oval */ "./src/Oval.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Oval", function() { return _Oval__WEBPACK_IMPORTED_MODULE_13__["Oval"]; });

/* harmony import */ var _Timers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Timers */ "./src/Timers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTimer", function() { return _Timers__WEBPACK_IMPORTED_MODULE_14__["setTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopTimer", function() { return _Timers__WEBPACK_IMPORTED_MODULE_14__["stopTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAllTimers", function() { return _Timers__WEBPACK_IMPORTED_MODULE_14__["stopAllTimers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timers", function() { return _Timers__WEBPACK_IMPORTED_MODULE_14__["timers"]; });

/* harmony import */ var _userInteraction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userInteraction */ "./src/userInteraction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyDownMethod", function() { return _userInteraction__WEBPACK_IMPORTED_MODULE_15__["keyDownMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouseClickMethod", function() { return _userInteraction__WEBPACK_IMPORTED_MODULE_15__["mouseClickMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouseMoveMethod", function() { return _userInteraction__WEBPACK_IMPORTED_MODULE_15__["mouseMoveMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyUpMethod", function() { return _userInteraction__WEBPACK_IMPORTED_MODULE_15__["keyUpMethod"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gcf", function() { return _utils__WEBPACK_IMPORTED_MODULE_16__["gcf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineDistance", function() { return _utils__WEBPACK_IMPORTED_MODULE_16__["lineDistance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotatePoint", function() { return _utils__WEBPACK_IMPORTED_MODULE_16__["rotatePoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return _utils__WEBPACK_IMPORTED_MODULE_16__["toDegrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return _utils__WEBPACK_IMPORTED_MODULE_16__["toRadians"]; });


















// eslint-disable-next-line no-console
console.log(`%c
   OIIIII              II        II    II   OIIIII    II         II      
  OI                   II        II    II  OI         II      () II      
 OI        OIIO    OIIOII  OOOO  IIIIIIII   OIIIO     II         IIOIO   
  OI      OI  IO  OI  IOI OI===O II    II       IO    II      II II  IO  
   OIIIII  OIIO    OIIOII  Oooo  II    II  IIIIIO     IIIIIII II IIOIO   
                                                                         
 has loaded                                                              
                                                                         
 read the docs: %chttps://pythonkiwi123.github.io/documentation/
`, "font-family: monospace; color: lightgreen; background-color: black;", "background-color: black");


/***/ }),

/***/ "./src/setup.ts":
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/*! exports provided: canvas, output, ctx, getWidth, getHeight, setSize, setBackgroundColor, showCursor, hideCursor, getPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output", function() { return output; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeight", function() { return getHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSize", function() { return setSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCursor", function() { return showCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideCursor", function() { return hideCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

const outputDiv = "output";
/**
 * The canvas everything is drawn to
 */
const canvas = createCanvas(outputDiv);
/**
 * The console println logs to
 */
const output = createConsole(outputDiv);
/**
 * The canvas context
 */
const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Error creating canvas context. Check that the canvas is loading correctly.");
}
function createCanvas(divId) {
    const div = document.getElementById(divId);
    if (!div) {
        throw new Error(`Cannot find any element with the id of "${divId}". Please create that div in your html file.`);
    }
    const c = document.createElement("canvas");
    c.height = 480;
    c.width = 400;
    c.id = "game";
    div.append(c);
    return c;
}
function createConsole(divId) {
    const div = document.getElementById(divId);
    if (!div) {
        throw new Error(`Cannot find any element with the id of "${divId}". Please create that div in your html file.`);
    }
    const p = document.createElement("pre");
    p.id = "console";
    div.append(p);
    return p;
}
/**
 * Returns the width of the canvas
 */
const getWidth = () => canvas.width;
/**
 * Returns the height of the canvas
 */
const getHeight = () => canvas.height;
/**
 * Set the width and height of the canvas
 * @param width the canvas's new width
 * @param height the canvas's new height
 */
const setSize = (width, height) => {
    canvas.width = width;
    canvas.height = height;
};
/**
 * Set the background color of the canvas
 * @param color the new background color
 */
const setBackgroundColor = (color) => {
    canvas.style.backgroundColor = color;
};
/**
 * Show the mouse over the canvas
 * @param cursor (optional) the css cursor to show
 */
const showCursor = (cursor) => {
    canvas.style.cursor = cursor || "default";
};
/**
 * Hide the mouse over the canvas
 */
const hideCursor = () => {
    canvas.style.cursor = "none";
};
function getPosition(e, still) {
    const { left, top } = canvas.getBoundingClientRect();
    if (still) {
        return {
            x: e.clientX - left,
            y: e.clientY - top,
        };
    }
    return {
        x: e.clientX - left + _index__WEBPACK_IMPORTED_MODULE_0__["camera"].x,
        y: e.clientY - top + _index__WEBPACK_IMPORTED_MODULE_0__["camera"].y,
    };
}


/***/ }),

/***/ "./src/shapes.ts":
/*!***********************!*\
  !*** ./src/shapes.ts ***!
  \***********************/
/*! exports provided: shapes, setUpdate, removeAll, add, remove, getElementAt, getElementsAt, isElementAdded, camera, moveHorizontal, moveVertical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapes", function() { return shapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdate", function() { return setUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAll", function() { return removeAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementAt", function() { return getElementAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementsAt", function() { return getElementsAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementAdded", function() { return isElementAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camera", function() { return camera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveHorizontal", function() { return moveHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveVertical", function() { return moveVertical; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * All the shapes that have been added to the screen
 */
const shapes = [];
/** @ignore */
let up = true;
/**
 * Set whether the canvas should update every frame
 * @param update whether to redraw each frame;
 */
const setUpdate = (update) => {
    up = update;
};
/**
 * Removes all objects from the canvas
 */
const removeAll = () => {
    shapes.splice(0, shapes.length);
};
/**
 * Adds all shapes that are passed to the screen
 * @param args any number of shapes to add
 */
const add = (...args) => {
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
const remove = (...args) => {
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
const getElementAt = (x, y) => {
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
function getElementsAt(x, y) {
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
function isElementAdded(e) {
    return shapes.includes(e);
}
/** The location of the screen, useful for screen scrolling */
const camera = {
    x: 0,
    y: 0,
    setPosition(x, y) {
        if (typeof x === "number") {
            this.x = x;
            this.y = y;
        }
        else {
            this.x = x.x;
            this.y = x.y;
        }
    },
};
/** Moves the camera horizontally */
function moveHorizontal(dx) {
    camera.x += dx;
}
/** Moves the camera vertically */
function moveVertical(dx) {
    camera.x += dx;
}
const main = () => {
    if (up) {
        _index__WEBPACK_IMPORTED_MODULE_0__["ctx"].clearRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
        shapes
            .filter((s) => s.still || s.onScreen())
            .sort((s) => (s.still ? 1 : 0))
            .forEach((s) => s.draw());
    }
    requestAnimationFrame(main);
};
main();


/***/ }),

/***/ "./src/userInteraction.ts":
/*!********************************!*\
  !*** ./src/userInteraction.ts ***!
  \********************************/
/*! exports provided: mouseClickMethod, mouseMoveMethod, keyDownMethod, keyUpMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseClickMethod", function() { return mouseClickMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseMoveMethod", function() { return mouseMoveMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDownMethod", function() { return keyDownMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyUpMethod", function() { return keyUpMethod; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");

/**
 * Set the canvas onclick method, use canvas.onclick instead (included for compatibility with CodeHS)
 * @deprecated
 */
const mouseClickMethod = (func) => {
    _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].onclick = func;
};
/**
 * Set the canvas mousemove method, use canvas.onmousemove instead (included for compatibility with CodeHS)
 * @deprecated
 */
const mouseMoveMethod = (func) => {
    _index__WEBPACK_IMPORTED_MODULE_0__["canvas"].onmousemove = func;
};
/**
 * Set the document's keydown method, use window.onkeydown instead (included for compatibility with CodeHS)
 * @deprecated
 */
const keyDownMethod = (func) => {
    window.onkeydown = func;
};
/**
 * Set the document's keyup method, use window.onkeyup instead (included for compatibility with CodeHS)
 * @deprecated
 */
const keyUpMethod = (func) => {
    window.onkeyup = func;
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: rotatePoint, lineDistance, gcf, toRadians, toDegrees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotatePoint", function() { return rotatePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineDistance", function() { return lineDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gcf", function() { return gcf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return toRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return toDegrees; });
/**
 * Returns point (`x`, `y`) if it where rotated around (0, 0) by `radians` radians
 * @param x A numeric expression for the x coordinate.
 * @param y A numeric expression for the y coordinate.
 * @param radians A numeric expression for the number of radians it is rotated.
 */
const rotatePoint = (x, y, radians) => {
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
const lineDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};
/**
 * Returns the greatest common factor between `a` and `b`
 * @param a numerical expression
 * @param b numerical expression
 */
const gcf = (a, b) => {
    a = Math.max(Math.abs(a), Math.abs(b));
    b = Math.min(Math.abs(a), Math.abs(b));
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (b === 0) {
            return a;
        }
        a %= b;
        if (a === 0) {
            return b;
        }
        b %= a;
    }
};
/**
 * Convert a number of degrees to radians
 * @param degrees the degrees to convert
 */
const toRadians = (degrees) => {
    return (degrees * Math.PI) / 2;
};
/**
 * Convert a number of radians to degrees
 * @param radians the radians to convert
 */
const toDegrees = (radians) => {
    return (radians * 2) / Math.PI;
};


/***/ })

/******/ });
//# sourceMappingURL=codehs_lib.js.map
