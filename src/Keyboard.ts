/**
 * CodeHS's Keyboard object. If possible use the built-in javascript 
 * KeyboardEvent.key or KeyboardEvent.code in your handler
 * (Included for compatibility with CodeHS, compare to e.code instead of e.keyCode)
 * @deprecated
 */
export class Keyboard {
  /**
   * The key for the Left Alt
   * @type {string}
   */
  static get ALT_LEFT(): string {
    return "AltLeft";
  }

  /**
   * The key for the right Alt
   * @type {string}
   */
  static get ALT_RIGHT(): string {
    return "AltRight";
  }

  /**
   * The key for BACKSPACE
   * @type {string}
   */
  static get BACKSPACE(): string {
    return "Backspace";
  }

  /**
   * The key for CAPS LOCK
   * @type {string}
   */
  static get CAPS_LOCK(): string {
    return "CapsLock";
  }

  /**
   * The key for the left CTRL
   * @type {string}
   */
  static get CTRL_LEFT(): string {
    return "ControlLeft";
  }

  /**
   * The key for the right CTRL
   * @type {string}
   */
  static get CTRL_RIGHT(): string {
    return "ControlRight";
  }

  /**
   * The key for DOWN
   * @type {string}
   */
  static get DOWN(): string {
    return "ArrowDown";
  }

  /**
   * The key for ENTER
   * @type {string}
   */
  static get ENTER(): string {
    return "Enter";
  }

  /**
   * The key for LEFT
   * @type {string}
   */
  static get LEFT(): string {
    return "ArrowLeft";
  }

  /**
   * The key for LEFT COMMAND
   * @type {string}
   */
  static get LEFT_COMMAND(): string {
    return "OSLeft";
  }

  /**
   * The key for LEFT WINDOW
   * @type {string}
   */
  static get LEFT_WINDOW(): string {
    return "OSLeft";
  }

  /**
   * The key for RIGHT
   * @type {string}
   */
  static get RIGHT(): string {
    return "ArrowRight";
  }

  /**
   * The key for RIGHT COMMAND
   * @type {string}
   */
  static get RIGHT_COMMAND(): string {
    return "OSRight";
  }

  /**
   * The key for RIGHT WINDOW
   * @type {string}
   */
  static get RIGHT_WINDOW(): string {
    return "OSRight";
  }

  /**
   * The key for SELECT
   * @type {string}
   */
  static get SELECT(): string {
    return "OSLeft";
  }

  /**
   * The key for the left SHIFT
   * @type {string}
   */
  static get SHIFT_LEFT(): string {
    return "ShiftLeft";
  }

  /**
   * The key for the right SHIFT
   * @type {string}
   */
  static get SHIFT_RIGHT(): string {
    return "ShiftLeft";
  }

  /**
   * The key for SPACE
   * @type {string}
   */
  static get SPACE(): string {
    return "Space";
  }

  /**
   * The key for TAB
   * @type {string}
   */
  static get TAB(): string {
    return "Tab";
  }

  /**
   * The key for UP
   * @type {string}
   */
  static get UP(): string {
    return "ArrowUp";
  }
}
