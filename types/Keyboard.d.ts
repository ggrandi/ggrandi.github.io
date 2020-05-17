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
