/**
 * Sets a timer with the callback `callback`
 * @param {function} callback function for the timer to call
 * @param {number} delay delay between the calls
 * @param {any[]} params the array of parameters to pass to the callback
 * @param {string} name name of the timer
 * @function
 * @returns {void}
 */
export declare const setTimer: (callback: (...params: any[]) => void, delay: number, params?: any[], name?: string | undefined) => void;
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
//# sourceMappingURL=Timers.d.ts.map