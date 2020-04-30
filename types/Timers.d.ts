interface ITimer {
    callback: TupleParams<any>;
    delay: number;
    params: any;
    name: string;
    id: number;
}
/**
 * The array of active timers
 * @type {Array}
 */
export declare const timers: Array<ITimer>;
declare type NotArray = number | boolean | string | object;
declare type TenTuple = [NotArray, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?];
declare type TupleParams<T> = T extends null | undefined ? () => void : (param: T) => void;
/**
 * Sets a timer with the callback `callback`
 * @param {function} callback function for the timer to call
 * @param {number} delay delay between the calls
 * @param {any} params the parameters to pass to the callback, can be anything
 * @param {string} name name of the timer
 * @function
 * @returns {void}
 */
export declare const setTimer: <T extends string | number | boolean | object | TenTuple>(callback: TupleParams<T>, delay: number, params?: T | undefined, name?: string | undefined) => void;
/**
 * Stops a previously set timer
 * @param {string | function} stopId the timer's name or the callback the timer was set with
 * @function
 * @returns {void}
 */
export declare const stopTimer: (stopId: string | ((...params: any[]) => void)) => void;
/**
 * Stops all timers
 * @function
 * @returns {void}
 */
export declare const stopAllTimers: () => void;
export {};
//# sourceMappingURL=Timers.d.ts.map