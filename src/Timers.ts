interface ITimer {
  callback: (...params: any[]) => void,
  delay: number,
  params: any,
  name: string,
  id: number
}

const timers = new Array<ITimer>();

/**
 * Sets a timer with the callback `callback`
 * @param {function} callback function for the timer to call
 * @param {number} delay delay between the calls
 * @param {any[]} params the array of parameters to pass to the callback
 * @param {string} name name of the timer
 * @function
 * @returns {void}
 */
export const setTimer = (callback: (...params: any[]) => void, delay: number, params: any[] = [], name?: string): void => {
  delay = delay >= 50 / 3 ? delay : 50 / 3;
  let boundCallback = callback.bind({}, ...params)
  let id: number = setInterval(boundCallback, delay);
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
export const stopTimer = (stopId: string | ((...params: any[]) => void)): void => {
  timers.forEach(t => {
    if (t.name === stopId || t.callback === stopId) {
      clearInterval(t.id);
      timers.splice(timers.indexOf(t), 1);
    }
  });
}

/**
 * Stops all timers
 * @function
 * @returns {void}
 */
export const stopAllTimers = (): void => {
  timers.forEach(t => clearInterval(t.id));
  timers.splice(0, timers.length);
}