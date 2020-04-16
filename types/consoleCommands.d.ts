/**
 * Clears the output console
 * @returns {void}
 */
export declare const clearConsole: () => void;
/**
 * logs any argument passed to the console
 * @param {...*} args arguments to print
 * @returns {void}
 * @function
 */
export declare const println: (...args: any[]) => void;
/**
 * Returns the user's answer to the prompt as a string
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {string}
 */
export declare const readLine: (message: string) => string;
/**
 * Returns the user's answer to the prompt as an integer
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {number}
 */
export declare const readInt: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a float
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {number}
 */
export declare const readFloat: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a boolean
 * @param {string} message the prompt to ask the user
 * @param {string} y the yes string
 * @param {string} n the no string
 * @function
 * @returns {boolean}
 */
export declare const readBoolean: (message: string, y?: string, n?: string) => boolean;
/**
 * Use this function to create your own console inputs if they are not supported by the library
 * @param {string} message the message to display
 * @param {function} submitHandler function to handle the submit
 * @param {string} inputType the type of the input
 * @param {boolean | undefined} submitButton whether to show a submit button or not
 * @function
 * @async
 */
export declare const consoleInput: <PromiseType, EventType extends MouseEvent | KeyboardEvent>(message: string, submitHandler: (input: HTMLInputElement, e: EventType) => {
    done: boolean;
    value?: PromiseType | undefined;
    color?: string | undefined;
}, inputType: string, submitButton?: boolean | undefined) => Promise<PromiseType>;
/**
 * Ask a question in the console and return a string
 * @param {string} message question to ask
 * @function
 * @returns {Promise<string>}
 * @async
 */
export declare const readLineConsole: (message: string) => Promise<string>;
/**
 * Ask a question in the console and return an integer
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 * @async
 */
export declare const readIntConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a float
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 * @async
 */
export declare const readFloatConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a boolean value
 * @param {string} message question to ask
 * @returns {Promise<boolean>}
 * @function
 * @async
 */
export declare const readBooleanConsole: (message: string) => Promise<boolean>;
/**
 * Asks the user to enter a color in the console
 * @param {string} message the message to ask
 * @function
 * @async
 * @returns {Promise<string>}
 */
export declare const readColorConsole: (message: string) => Promise<string>;
//# sourceMappingURL=consoleCommands.d.ts.map