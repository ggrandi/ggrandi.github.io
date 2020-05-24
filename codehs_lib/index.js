import { canvas, ctx, output, getWidth, getHeight, hideCursor, setBackgroundColor, setSize, showCursor } from "./setup.js";
import { add, remove, removeAll, setUpdate, getElementAt, getElementsAt, shapes, isElementAdded } from "./shapes.js";
import { baseObj } from "./baseObj.js";
import {
	clearConsole,
	println,
	readBoolean,
	readFloat,
	readInt,
	readLine,
	consoleInput,
	readLineConsole,
	readIntConsole,
	readFloatConsole,
	readBooleanConsole,
	readColorConsole,
} from "./consoleCommands.js";
import { Randomizer } from "./Randomizer.js";
import { Color, checkColor } from "./Color.js";
import { Keyboard } from "./Keyboard.js";
import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";
import { Line } from "./Line.js";
import { WebImage } from "./WebImage.js";
import { Text, checkFont } from "./Text.js";
import { Arc, ArcMode } from "./Arc.js";
import { Oval } from "./Oval.js";
import { setTimer, stopTimer, stopAllTimers, timers } from "./Timers.js";
import { keyDownMethod, mouseClickMethod, mouseMoveMethod, keyUpMethod } from "./userInteraction.js";
import { gcf, getPosition, lineDistance, rotatePoint, toDegrees, toRadians } from "./utils.js";
console.log(
	`%c
   OIIIII              II        II    II   OIIIII    II         II      
  OI                   II        II    II  OI         II      () II      
 OI        OIIO    OIIOII  OOOO  IIIIIIII   OIIIO     II         IIOIO   
  OI      OI  IO  OI  IOI OI===O II    II       IO    II      II II  IO  
   OIIIII  OIIO    OIIOII  Oooo  II    II  IIIIIO     IIIIIII II IIOIO   
                                                                         
 has loaded                                                              
                                                                         
 read the docs: %chttps://pythonkiwi123.github.io/documentation/
`,
	"font-family: monospace; color: lightgreen; background-color: black;",
	"background-color: black"
);
export {
	canvas,
	ctx,
	output,
	setUpdate,
	getWidth,
	getHeight,
	hideCursor,
	setBackgroundColor,
	setSize,
	showCursor,
	add,
	remove,
	removeAll,
	getElementAt,
	getElementsAt,
	isElementAdded,
	clearConsole,
	println,
	readBoolean,
	readFloat,
	readInt,
	readLine,
	consoleInput,
	readLineConsole,
	readIntConsole,
	readFloatConsole,
	readBooleanConsole,
	readColorConsole,
	Randomizer,
	Color,
	checkColor,
	Keyboard,
	baseObj,
	Circle,
	Rectangle,
	Line,
	WebImage,
	Text,
	checkFont,
	Arc,
	ArcMode,
	Oval,
	setTimer,
	stopTimer,
	stopAllTimers,
	mouseClickMethod,
	mouseMoveMethod,
	keyUpMethod,
	keyDownMethod,
	gcf,
	getPosition,
	lineDistance,
	rotatePoint,
	toDegrees,
	toRadians,
	shapes,
	timers,
};
