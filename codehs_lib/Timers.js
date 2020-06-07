/* eslint-disable */
/**
 * The array of active timers
 */
export const timers = [];
/**
 * Sets a timer with the callback `callback`
 * @param callback function for the timer to call
 * @param delay delay between the calls
 * @param params the parameters to pass to the callback, can be anything
 * @param name name of the timer
 */
export const setTimer = (callback, delay, params, name) => {
	if (Math.max(delay, 50 / 3) !== delay) {
		console.warn(
			`Your delay of ${delay} is shorter than 1 / 60th of a second, please make sure that it is longer or equal to it`
		);
		delay = 50 / 3;
	}
	const id = window.setInterval(callback, delay, params);
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
 * @param stopId the timer's name or the callback the timer was set with
 */
export const stopTimer = (stopId) => {
	timers.forEach((t) => {
		if (t.name === stopId || t.callback === stopId) {
			clearInterval(t.id);
			timers.splice(timers.indexOf(t), 1);
		}
	});
};
/**
 * Stops all timers
 */
export const stopAllTimers = () => {
	timers.forEach((t) => clearInterval(t.id));
	timers.splice(0, timers.length);
};
