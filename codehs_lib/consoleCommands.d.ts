/**
 * logs any argument passed to the console
 * @param args {any[]} arguments to print
 */
export declare const println: (...args: any[]) => void;
/**
 * Returns the user's answer to the prompt as a string
 * @param prompt {string} prompt
 * @function
 */
export declare const readLine: (p: string) => string;
/**
 * Returns the user's answer to the prompt as an integer
 * @param prompt {string} prompt
 * @function
 */
export declare const readInt: (p: string) => number;
/**
 * Returns the user's answer to the prompt as a float
 * @param prompt {string} prompt
 * @function
 */
export declare const readFloat: (p: string) => number;
/**
 * Returns the user's answer to the prompt as a boolean
 * @param prompt {string} prompt
 * @param y {string} the yes string
 * @param n {string} the no string
 * @function
 */
export declare const readBoolean: (p: string, y?: string, n?: string) => boolean;
/**
 * Ask a question in the console and return a string
 * @param message {string} question to ask
 * @function
 */
export declare const readLineConsole: (message: string) => Promise<string>;
/**
 * Ask a question in the console and return an integer
 * @param message {string} question to ask
 * @function
 */
export declare const readIntConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a float
 * @param message {string} question to ask
 * @function
 */
export declare const readFloatConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a boolean value
 * @param message {string} question to ask
 * @param y the yes value
 * @param n the no value
 * @function
 */
export declare const readBooleanConsole: (message: string, y?: string, n?: string) => Promise<boolean>;
//# sourceMappingURL=consoleCommands.d.ts.map