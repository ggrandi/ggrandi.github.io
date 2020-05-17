/**
 * Clears the output console
 */
export declare const clearConsole: () => void;
/**
 * logs any argument passed to the console
 * @param args arguments to print
 */
export declare const println: (...args: any[]) => void;
/**
 * Returns the user's answer to the prompt as a string
 * @param message the prompt to ask the user
 */
export declare const readLine: (message: string) => string;
/**
 * Returns the user's answer to the prompt as an integer
 * @param message the prompt to ask the user
 */
export declare const readInt: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a float
 * @param message the prompt to ask the user
 */
export declare const readFloat: (message: string) => number;
/**
 * Returns the user's answer to the prompt as a boolean
 * @param message the prompt to ask the user
 * @param y the yes string
 * @param n the no string
 */
export declare const readBoolean: (message: string, y?: string, n?: string) => boolean;
/**
 * Use this function to create your own console inputs if they are not supported by the library
 * @param message the message to display
 * @param submitHandler function to handle the submit
 * @param inputType the type of the input
 * @param submitButton whether to show a submit button or not
 * @async
 */
export declare const consoleInput: <PromiseType, EventType extends MouseEvent | KeyboardEvent>(message: string, submitHandler: (input: HTMLInputElement, e: EventType) => {
    done: boolean;
    value?: PromiseType | undefined;
    color?: string | undefined;
}, inputType: string, submitButton?: boolean | undefined) => Promise<PromiseType>;
/**
 * Ask a question in the console and return a string
 * @param message question to ask
 * @async
 */
export declare const readLineConsole: (message: string) => Promise<string>;
/**
 * Ask a question in the console and return an integer
 * @param message question to ask
 * @async
 */
export declare const readIntConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a float
 * @param message question to ask
 * @async
 */
export declare const readFloatConsole: (message: string) => Promise<number>;
/**
 * Ask a question in the console and return a boolean value
 * @param message question to ask
 * @async
 */
export declare const readBooleanConsole: (message: string) => Promise<boolean>;
/**
 * Asks the user to enter a color in the console
 * @param message the message to ask
 * @async
 */
export declare const readColorConsole: (message: string) => Promise<string>;
