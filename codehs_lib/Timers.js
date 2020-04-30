/**
 * The array of active timers
 * @type {Array}
 */
export const timers = new Array();
/**
 * Sets a timer with the callback `callback`
 * @param {function} callback function for the timer to call
 * @param {number} delay delay between the calls
 * @param {any} params the parameters to pass to the callback, can be anything
 * @param {string} name name of the timer
 * @function
 * @returns {void}
 */
export const setTimer = (callback, delay, params, name) => {
    if (Math.max(delay, 50 / 3) !== delay) {
        console.warn(`Your delay of ${delay} is shorter than 1 / 60th of a second, please make sure that it is longer or equal to it`);
        delay = 50 / 3;
    }
    let boundCallback = callback.bind({}, params);
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
 * @param {string | function} stopId the timer's name or the callback the timer was set with
 * @function
 * @returns {void}
 */
export const stopTimer = (stopId) => {
    timers.forEach(t => {
        if (t.name === stopId || t.callback === stopId) {
            clearInterval(t.id);
            timers.splice(timers.indexOf(t), 1);
        }
    });
};
/**
 * Stops all timers
 * @function
 * @returns {void}
 */
export const stopAllTimers = () => {
    timers.forEach(t => clearInterval(t.id));
    timers.splice(0, timers.length);
};
//# sourceMappingURL=Timers.js.map