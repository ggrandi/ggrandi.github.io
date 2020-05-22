import { output } from "./index.js";
const createColoredSpan = (inner, color) => {
	const s = document.createElement("span");
	s.innerHTML = inner;
	s.style.color = color;
	return s;
};
const addSeparator = (pre) => {
	if (pre.innerText) {
		const d = document.createElement("div");
		d.style.height = "1px";
		d.style.width = "100%";
		d.style.backgroundColor = "black";
		d.style.marginTop = "5px";
		d.style.marginBottom = "5px";
		d.className = "separator";
		pre.append(d);
	}
};
/**
 * Clears the output console
 */
export const clearConsole = () => {
	while (output.lastChild) {
		output.removeChild(output.lastChild);
	}
};
/**
 * Logs any argument passed to the console
 * @param args arguments to print
 */
export const println = (...args) => {
	addSeparator(output);
	for (let i = 0; i < args.length; i++) {
		if (args[i] === null) {
			output.append(createColoredSpan("null", "deeppink"));
		} else {
			switch (typeof args[i]) {
				case "number":
					{
						output.append(createColoredSpan(String(args[i]), "purple"));
					}
					break;
				case "object":
					{
						console.log(args[i]);
						output.append(createColoredSpan(`${args[i].toString()} => browser console`, "blue"));
					}
					break;
				case "boolean":
					{
						output.append(createColoredSpan(String(args[i]), "red"));
					}
					break;
				case "undefined":
					{
						output.append(createColoredSpan("undefined", "deeppink"));
					}
					break;
				default:
					output.append(createColoredSpan(String(args[i]), "black"));
			}
		}
		if (i !== args.length - 1) {
			output.append(new Text(`, `));
		}
	}
	output.scrollTop = output.scrollHeight;
};
/**
 * Returns the user's answer to the prompt as a string
 * @param message the prompt to ask the user
 */
export const readLine = (message) => {
	return String(prompt(message));
};
/**
 * Returns the user's answer to the prompt as an integer
 * @param message the prompt to ask the user
 */
export const readInt = (message) => {
	let ans;
	if ((ans = parseInt(prompt(message) || "", 10))) {
		return ans;
	}
	for (let i = 0; i < 100; i++) {
		if ((ans = parseInt(prompt("Please enter an Integer. " + message) || "", 10))) {
			return ans;
		}
	}
	return 0;
};
/**
 * Returns the user's answer to the prompt as a float
 * @param message the prompt to ask the user
 */
export const readFloat = (message) => {
	let ans;
	if ((ans = parseFloat(prompt(message) || ""))) {
		return ans;
	}
	for (let i = 0; i < 100; i++) {
		if ((ans = parseFloat(prompt("Please enter an Integer. " + message) || ""))) {
			return ans;
		}
	}
	return 0;
};
/**
 * Returns the user's answer to the prompt as a boolean
 * @param message the prompt to ask the user
 * @param y the yes string
 * @param n the no string
 */
export const readBoolean = (message, y = "y", n = "n") => {
	let ans;
	if ((ans = prompt(`${message} (${y}|${n})`)) === y || ans === n) {
		return ans === y;
	}
	for (let i = 0; i < 100; i++) {
		if ((ans = prompt(`Please enter ${message} (${y}|${n})`)) === y || ans === n) {
			return ans === y;
		}
	}
	return false;
};
/**
 * Use this function to create your own console inputs if they are not supported by the library
 * @param message the message to display
 * @param submitHandler function to handle the submit
 * @param inputType the type of the input
 * @param submitButton whether to show a submit button or not
 * @async
 */
export const consoleInput = async (message, submitHandler, inputType, submitButton) => {
	addSeparator(output);
	output.append(new Text(`${message}: `));
	const i = document.createElement("input");
	i.className = "consoleInput";
	i.type = inputType;
	i.value = "";
	output.append(i);
	let submit;
	if (submitButton) {
		submit = document.createElement("input");
		submit.style.marginLeft = "10px";
		submit.className = "consoleInput";
		submit.type = "button";
		submit.value = "Submit";
		output.append(submit);
	}
	const p = new Promise((resolve) => {
		if (submitButton) {
			i.addEventListener("change", () => {
				submit.value = `Submit: ${i.value}`;
			});
			submit.addEventListener(
				"click",
				function (e) {
					if (!(e.metaKey || e.ctrlKey)) {
						const { value, done, color } = submitHandler(i, e);
						if (done) {
							i.before(createColoredSpan(String(value), String(color)));
							output.removeChild(i);
							output.removeChild(submit);
							resolve(value);
						}
					}
				},
				false
			);
		} else {
			i.addEventListener(
				"keydown",
				function (e) {
					if (!(e.metaKey || e.ctrlKey)) {
						const { value, done, color } = submitHandler(i, e);
						if (done) {
							i.before(createColoredSpan(String(value), String(color)));
							output.removeChild(i);
							resolve(value);
						}
					}
				},
				false
			);
		}
	});
	i.focus();
	output.scrollTop = output.scrollHeight;
	return await p;
};
/**
 * Ask a question in the console and return a string
 * @param message question to ask
 * @async
 */
export const readLineConsole = async (message) => {
	return await consoleInput(
		message,
		function (input, e) {
			if (e.key === "Enter") {
				return {
					done: true,
					value: input.value,
					color: "black",
				};
			}
			return { done: false };
		},
		"text"
	);
};
const readNumberConsole = async (message, validation, checks) => {
	return await consoleInput(
		message,
		function (input, e) {
			if (e.key === "Enter" && !isNaN(validation(input.value))) {
				return {
					done: true,
					value: validation(input.value),
					color: "purple",
				};
			}
			if (e.key === "-" && input.value.length > 0) {
				e.preventDefault();
			}
			if (checks && !checks(input.value, e)) {
				return { done: false };
			}
			if (((isNaN(+e.key) && e.key.length < 2) || e.key === " ") && !(e.key === "-")) {
				e.preventDefault();
			}
			return { done: false };
		},
		"number"
	);
};
/**
 * Ask a question in the console and return an integer
 * @param message question to ask
 * @async
 */
export const readIntConsole = async (message) => {
	return await readNumberConsole(message, (str) => parseInt(str, 10));
};
/**
 * Ask a question in the console and return a float
 * @param message question to ask
 * @async
 */
export const readFloatConsole = async (message) => {
	return await readNumberConsole(
		message,
		(str) => parseFloat(str),
		(value, e) => !(e.key === "." && value.split(".").length <= 1)
	);
};
/**
 * Ask a question in the console and return a boolean value
 * @param message question to ask
 * @async
 */
export const readBooleanConsole = async (message) => {
	return await consoleInput(
		message,
		function (input) {
			return { done: true, color: "red", value: input.checked };
		},
		"checkbox",
		true
	);
};
/**
 * Asks the user to enter a color in the console
 * @param message the message to ask
 * @async
 */
export const readColorConsole = async (message) => {
	return await consoleInput(
		message,
		function (input) {
			return { done: true, color: input.value, value: input.value };
		},
		"color",
		true
	);
};
