/**
 * The Array that stores all of the timers
 * (Has to be imported from 'src/debug.js')*/
export const timers = new Array();
/**
 * Sets a timer with the callback `callback`
 * @param callback {function} function for the timer to call
 * @param delay {number} delay between the calls
 * @param params {array} the array of parameters to pass to the callback
 * @param name {string} name of the timer
 * @function
 */
export const setTimer = (callback, delay, params = [], name) => {
    delay = delay >= 50 / 3 ? delay : 50 / 3;
    let boundCallback = callback.bind({}, ...params);
    let id = setInterval(boundCallback, delay);
    timers.push({
        callback,
        delay,
        params,
        name: name || callback.name,
        id,
    });
};
/**
 * Stops a previously set timer
 * @param stopId {string | function} the timer's name or the callback the timer was set with
 * @function
 */
export const stopTimer = (stopId) => {
    timers.forEach(t => {
        if (t.name === stopId || t.callback === stopId) {
            clearInterval(t.id);
            timers.splice(timers.indexOf(t), 1);
        }
    });
};
//# sourceMappingURL=Timers.js.map