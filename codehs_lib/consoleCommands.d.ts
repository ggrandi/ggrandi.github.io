/**
 * logs any argument passed to the console
 * @param {any[]} args arguments to print
 * @returns {void}
 * @function
 */
export declare const println: (...args: any[]) => void;
/**
 * Returns the user's answer to the prompt as a string
 * @param {string} prompt the prompt to ask the user
 * @function
 * @returns {string}
 */
export declare const readLine: (p: string) => string;
/**
 * Returns the user's answer to the prompt as an integer
 * @param {string} prompt the prompt to ask the user
 * @function
 * @returns {number}
 */
export declare const readInt: (p: string) => number;
/**
 * Returns the user's answer to the prompt as a float
 * @param {string} prompt the prompt to ask the user
 * @function
 * @returns {number}
 */
export declare const readFloat: (p: string) => number;
/**
 * Returns the user's answer to the prompt as a boolean
 * @param {string} prompt the prompt to ask the user
 * @param {string} y the yes string
 * @param {string} n the no string
 * @function
 * @returns {boolean}
 */
export declare const readBoolean: (p: string, y?: string, n?: string) => boolean;
/**
 * Ask a question in the console and return a string
 * @param {string} message question to ask
 * @function
 * @returns {Promise<string>}
 */
export declare const readLineConsole: (message: string) => Promise<string>;
/**
 * Ask a question in the console and return an integer
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 */
export declare const readIntConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a float
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 */
export declare const readFloatConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a boolean value
 * @param {string} message question to ask
 * @param y the yes value
 * @param n the no value
 * @returns {Promise<boolean>}
 * @function
 */
export declare const readBooleanConsole: (message: string, y?: string, n?: string) => Promise<boolean>;
//# sourceMappingURL=consoleCommands.d.ts.map