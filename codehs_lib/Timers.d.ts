interface ITimer {
    callback: (...params: any[]) => void;
    delay: number;
    params: any;
    name: string;
    id: number;
}
/**
 * The Array that stores all of the timers
 * (Has to be imported from 'src/debug.js')*/
export declare const timers: ITimer[];
/**
 * Sets a timer with the callback `callback`
 * @param callback {function} function for the timer to call
 * @param delay {number} delay between the calls
 * @param params {array} the array of parameters to pass to the callback
 * @param name {string} name of the timer
 * @function
 */
export declare const setTimer: (callback: (...params: any[]) => void, delay: number, params?: any[], name?: string | undefined) => void;
/**
 * Stops a previously set timer
 * @param stopId {string | function} the timer's name or the callback the timer was set with
 * @function
 */
export declare const stopTimer: (stopId: string | ((...params: any[]) => void)) => void;
/**
 * Stops all timers
 * @function
 */
export declare const stopAllTimers: () => void;
export {};
//# sourceMappingURL=Timers.d.ts.map