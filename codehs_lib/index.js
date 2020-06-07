/* eslint-disable */
export { canvas, ctx, output, getWidth, getHeight, hideCursor, setBackgroundColor, setSize, showCursor } from "./setup.js";
export { add, remove, removeAll, setUpdate, getElementAt, getElementsAt, shapes, isElementAdded } from "./shapes.js";
export { baseObj } from "./baseObj.js";
export {
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
export { Randomizer } from "./Randomizer.js";
export { Color, checkColor } from "./Color.js";
export { Keyboard } from "./Keyboard.js";
export { Circle } from "./Circle.js";
export { Rectangle } from "./Rectangle.js";
export { Line } from "./Line.js";
export { WebImage } from "./WebImage.js";
export { Text, checkFont } from "./Text.js";
export { Arc, ArcMode } from "./Arc.js";
export { Oval } from "./Oval.js";
export { setTimer, stopTimer, stopAllTimers, timers } from "./Timers.js";
export { keyDownMethod, mouseClickMethod, mouseMoveMethod, keyUpMethod } from "./userInteraction.js";
export { gcf, getPosition, lineDistance, rotatePoint, toDegrees, toRadians } from "./utils.js";
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
