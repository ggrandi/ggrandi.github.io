/**
 * CodeHS's Keyboard object. If possible use the built-in javascript
 * KeyboardEvent.key or KeyboardEvent.code in your handler
 * (Included for compatibility with CodeHS, compare to e.code instead of e.keyCode)
 * @deprecated
 */
export class Keyboard {
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
