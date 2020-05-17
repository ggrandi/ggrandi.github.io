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
	static get ALT_LEFT(): string {
		return "AltLeft";
	}

	/**
	 * The key for the right Alt
	 */
	static get ALT_RIGHT(): string {
		return "AltRight";
	}

	/**
	 * The key for BACKSPACE
	 */
	static get BACKSPACE(): string {
		return "Backspace";
	}

	/**
	 * The key for CAPS LOCK
	 */
	static get CAPS_LOCK(): string {
		return "CapsLock";
	}

	/**
	 * The key for the left CTRL
	 */
	static get CTRL_LEFT(): string {
		return "ControlLeft";
	}

	/**
	 * The key for the right CTRL
	 */
	static get CTRL_RIGHT(): string {
		return "ControlRight";
	}

	/**
	 * The key for DOWN
	 */
	static get DOWN(): string {
		return "ArrowDown";
	}

	/**
	 * The key for ENTER
	 */
	static get ENTER(): string {
		return "Enter";
	}

	/**
	 * The key for LEFT
	 */
	static get LEFT(): string {
		return "ArrowLeft";
	}

	/**
	 * The key for LEFT COMMAND
	 */
	static get LEFT_COMMAND(): string {
		return "OSLeft";
	}

	/**
	 * The key for LEFT WINDOW
	 */
	static get LEFT_WINDOW(): string {
		return "OSLeft";
	}

	/**
	 * The key for RIGHT
	 */
	static get RIGHT(): string {
		return "ArrowRight";
	}

	/**
	 * The key for RIGHT COMMAND
	 */
	static get RIGHT_COMMAND(): string {
		return "OSRight";
	}

	/**
	 * The key for RIGHT WINDOW
	 */
	static get RIGHT_WINDOW(): string {
		return "OSRight";
	}

	/**
	 * The key for SELECT
	 */
	static get SELECT(): string {
		return "OSLeft";
	}

	/**
	 * The key for the left SHIFT
	 */
	static get SHIFT_LEFT(): string {
		return "ShiftLeft";
	}

	/**
	 * The key for the right SHIFT
	 */
	static get SHIFT_RIGHT(): string {
		return "ShiftLeft";
	}

	/**
	 * The key for SPACE
	 */
	static get SPACE(): string {
		return "Space";
	}

	/**
	 * The key for TAB
	 */
	static get TAB(): string {
		return "Tab";
	}

	/**
	 * The key for UP
	 */
	static get UP(): string {
		return "ArrowUp";
	}
}
