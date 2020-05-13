import { output } from "./index.js";

const createColoredSpan = (inner: string, color: string): HTMLSpanElement => {
	let s = document.createElement("span");
	s.innerHTML = inner;
	s.style.color = color;
	return s;
};

const addSeparator = (pre: HTMLPreElement): void => {
	if (pre.innerText) {
		let d = document.createElement("div");
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
 * @returns {void}
 */
export const clearConsole = (): void => {
	while (output.lastChild) {
		output.removeChild(output.lastChild);
	}
};

/**
 * logs any argument passed to the console
 * @param {...*} args arguments to print
 * @returns {void}
 * @function
 */
export const println = (...args: Array<any>): void => {
	addSeparator(output);

	for (let i = 0; i < args.length; i++) {
		if (args[i] === null) {
			output.append(createColoredSpan("null", "deeppink"));
		} else {
			switch (typeof args[i]) {
				case "number":
					{
						output.append(createColoredSpan(args[i], "purple"));
					}
					break;
				case "object":
					{
						console.log(args[i]);
						output.append(
							createColoredSpan(
								`${args[i].toString()} => browser console`,
								"blue"
							)
						);
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
					output.append(createColoredSpan(args[i], "black"));
			}
		}

		if (i != args.length - 1) {
			output.append(new Text(`, `));
		}
	}

	output.scrollTop = output.scrollHeight;
};

/**
 * Returns the user's answer to the prompt as a string
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {string}
 */
export const readLine = (message: string): string => {
	return String(prompt(message));
};

/**
 * Returns the user's answer to the prompt as an integer
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {number}
 */
export const readInt = (message: string): number => {
	let ans: number;
	if (Boolean((ans = parseInt(prompt(message) || "", 10)))) {
		return ans;
	}
	for (let i = 0; i < 100; i++) {
		if (
			Boolean(
				(ans = parseInt(
					prompt("Please enter an Integer. " + message) || "",
					10
				))
			)
		) {
			return ans;
		}
	}
	return 0;
};

/**
 * Returns the user's answer to the prompt as a float
 * @param {string} message the prompt to ask the user
 * @function
 * @returns {number}
 */
export const readFloat = (message: string): number => {
	let ans: number;
	if (Boolean((ans = parseFloat(prompt(message) || "")))) {
		return ans;
	}
	for (let i = 0; i < 100; i++) {
		if (
			Boolean(
				(ans = parseFloat(prompt("Please enter an Integer. " + message) || ""))
			)
		) {
			return ans;
		}
	}
	return 0;
};

/**
 * Returns the user's answer to the prompt as a boolean
 * @param {string} message the prompt to ask the user
 * @param {string} y the yes string
 * @param {string} n the no string
 * @function
 * @returns {boolean}
 */
export const readBoolean = (message: string, y = "y", n = "n"): boolean => {
	let ans: string | null;
	if ((ans = prompt(`${message} (${y}|${n})`)) === y || ans === n) {
		return ans === y;
	}
	for (let i = 0; i < 100; i++) {
		if (
			(ans = prompt(`Please enter ${message} (${y}|${n})`)) === y ||
			ans === n
		) {
			return ans === y;
		}
	}
	return false;
};

/**
 * Use this function to create your own console inputs if they are not supported by the library
 * @param {string} message the message to display
 * @param {function} submitHandler function to handle the submit
 * @param {string} inputType the type of the input
 * @param {boolean | undefined} submitButton whether to show a submit button or not
 * @function
 * @async
 */
export const consoleInput = async <
	PromiseType,
	EventType extends KeyboardEvent | MouseEvent
>(
	message: string,
	submitHandler: (
		input: HTMLInputElement,
		e: EventType
	) => { done: boolean; value?: PromiseType; color?: string },
	inputType: string,
	submitButton?: boolean
): Promise<PromiseType> => {
	addSeparator(output);

	output.append(new Text(`${message}: `));

	let i = document.createElement("input");
	i.className = "consoleInput";
	i.type = inputType;
	i.value = "";
	output.append(i);

	let submit: HTMLInputElement;
	if (submitButton) {
		submit = document.createElement("input");
		submit.style.marginLeft = "10px";
		submit.className = "consoleInput";
		submit.type = "button";
		submit.value = "Submit";
		output.append(submit);
	}

	let p = new Promise<PromiseType>((resolve) => {
		if (submitButton) {
			i.addEventListener("change", () => {
				submit.value = `Submit: ${i.value}`;
			});

			submit.addEventListener(
				"click",
				function (e) {
					if (!(e.metaKey || e.ctrlKey)) {
						const { value, done, color } = submitHandler(i, e as EventType);
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
						const { value, done, color } = submitHandler(i, e as EventType);
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
 * @param {string} message question to ask
 * @function
 * @returns {Promise<string>}
 * @async
 */
export const readLineConsole = async (message: string): Promise<string> => {
	return await consoleInput<string, KeyboardEvent>(
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

const readNumberConsole = async (
	message: string,
	validation: (str: string) => number,
	checks?: (value: string, e: KeyboardEvent) => boolean
): Promise<number> => {
	return await consoleInput<number, KeyboardEvent>(
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

			if (checks && !checks(input.value, e as KeyboardEvent)) {
				return { done: false };
			}

			if (
				((isNaN(+e.key) && e.key.length < 2) || e.key === " ") &&
				!(e.key === "-")
			) {
				e.preventDefault();
			}
			return { done: false };
		},
		"number"
	);
};

/**
 * Ask a question in the console and return an integer
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 * @async
 */
export const readIntConsole = async (message: string): Promise<number> => {
	return await readNumberConsole(message, (str) => parseInt(str, 10));
};

/**
 * Ask a question in the console and return a float
 * @param {string} message question to ask
 * @function
 * @returns {Promise<number>}
 * @async
 */
export const readFloatConsole = async (message: string): Promise<number> => {
	return await readNumberConsole(
		message,
		(str) => parseFloat(str),
		(value, e) => !(e.key === "." && value.split(".").length <= 1)
	);
};

/**
 * Ask a question in the console and return a boolean value
 * @param {string} message question to ask
 * @returns {Promise<boolean>}
 * @function
 * @async
 */
export const readBooleanConsole = async (message: string): Promise<boolean> => {
	return await consoleInput<boolean, MouseEvent>(
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
 * @param {string} message the message to ask
 * @function
 * @async
 * @returns {Promise<string>}
 */
export const readColorConsole = async (message: string): Promise<string> => {
	return await consoleInput<string, MouseEvent>(
		message,
		function (input) {
			return { done: true, color: input.value, value: input.value };
		},
		"color",
		true
	);
};
