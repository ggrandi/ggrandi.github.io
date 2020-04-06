/**
 * CodeHS's Keyboard object. If possible use the built-in javascript
 * KeyboardEvent.key or KeyboardEvent.code in your handler
 * (Included for compatibilty with CodeHS)
 * @deprecated
 */
export class Keyboard {
    /**
     * Returns a letter to compare to e.keyCode
     * @param {string} key the letter you want to get
     */
    static letter(key) {
        return key;
    }
    /**
     * The key for ALT
     * @type {string}
     */
    static get ALT() {
        return "Alt";
    }
    /**
     * The key for BACKSPACE
     * @type {string}
     */
    static get BACKSPACE() {
        return "Backspace";
    }
    /**
     * The key for CAPS LOCK
     * @type {string}
     */
    static get CAPS_LOCK() {
        return "";
    }
    /**
     * The key for CTRL
     * @type {string}
     */
    static get CTRL() {
        return "Control";
    }
    /**
     * The key for DOWN
     * @type {string}
     */
    static get DOWN() {
        return "ArrowDown";
    }
    /**
     * The key for ENTER
     * @type {string}
     */
    static get ENTER() {
        return "Enter";
    }
    /**
     * The key for LEFT
     * @type {string}
     */
    static get LEFT() {
        return "ArrowLeft";
    }
    /**
     * The key for LEFT COMMAND
     * @type {string}
     */
    static get LEFT_COMMAND() {
        return "Meta";
    }
    /**
     * The key for LEFT WINDOW
     * @type {string}
     */
    static get LEFT_WINDOW() {
        return "Meta";
    }
    /**
     * The key for RIGHT
     * @type {string}
     */
    static get RIGHT() {
        return "ArrowRight";
    }
    /**
     * The key for RIGHT COMMAND
     * @type {string}
     */
    static get RIGHT_COMMAND() {
        return "Meta";
    }
    /**
     * The key for RIGHT WINDOW
     * @type {string}
     */
    static get RIGHT_WINDOW() {
        return "Meta";
    }
    /**
     * The key for SELECT
     * @type {string}
     */
    static get SELECT() {
        return "Meta";
    }
    /**
     * The key for SHIFT
     * @type {string}
     */
    static get SHIFT() {
        return "Shift";
    }
    /**
     * The key for SPACE
     * @type {string}
     */
    static get SPACE() {
        return " ";
    }
    /**
     * The key for TAB
     * @type {string}
     */
    static get TAB() {
        return "Tab";
    }
    /**
     * The key for UP
     * @type {string}
     */
    static get UP() {
        return "ArrowUp";
    }
}
//# sourceMappingURL=Keyboard.js.map