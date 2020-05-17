interface ITimer {
    callback: TupleParams<any>;
    delay: number;
    params: any;
    name: string;
    id: number;
}
/**
 * The array of active timers
 */
export declare const timers: Array<ITimer>;
declare type NotArray = number | boolean | string | object;
declare type TenTuple = [NotArray, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?, NotArray?];
declare type TupleParams<T> = T extends null | undefined ? () => void : (param: T) => void;
/**
 * Sets a timer with the callback `callback`
 * @param callback function for the timer to call
 * @param delay delay between the calls
 * @param params the parameters to pass to the callback, can be anything
 * @param name name of the timer
 */
export declare const setTimer: <T extends string | number | boolean | object | TenTuple>(callback: TupleParams<T>, delay: number, params?: T | undefined, name?: string | undefined) => void;
/**
 * Stops a previously set timer
 * @param stopId the timer's name or the callback the timer was set with
 */
export declare const stopTimer: (stopId: string | ((...params: any[]) => void)) => void;
/**
 * Stops all timers
 */
export declare const stopAllTimers: () => void;
export {};
