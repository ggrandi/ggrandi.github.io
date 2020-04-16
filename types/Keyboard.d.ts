/**
 * CodeHS's Keyboard object. If possible use the built-in javascript
 * KeyboardEvent.key or KeyboardEvent.code in your handler
 * (Included for compatibility with CodeHS, compare to e.code instead of e.keyCode)
 * @deprecated
 */
export declare class Keyboard {
    /**
     * Returns a letter to compare to e.keyCode
     * @param {string} key the letter you want to get
     */
    static letter(key: string): string;
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
//# sourceMappingURL=Keyboard.d.ts.map