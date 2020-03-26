var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { output } from './index.js';
const createColoredSpan = (inner, color) => {
    let s = document.createElement("span");
    s.innerHTML = inner;
    s.style.color = color;
    return s;
};
/**
 * logs any argument passed to the console
 * @param args {any[]} arguments to print
 */
export const println = (...args) => {
    for (let i = 0; i < args.length; i++) {
        if (args[i] === null) {
            output.append(createColoredSpan('null', "deeppink"));
        }
        else {
            switch (typeof (args[i])) {
                case "number":
                    {
                        output.append(createColoredSpan(args[i], "purple"));
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
                        output.append(createColoredSpan(args[i] ? 'true' : 'false', "red"));
                    }
                    break;
                case "undefined":
                    {
                        output.append(createColoredSpan('undefined', "deeppink"));
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
    output.append(new Text(`\n---------------------------------------\n`));
    output.scrollTop = output.scrollHeight;
};
/**
 * Returns the user's answer to the prompt as a string
 * @param prompt {string} prompt
 * @function
 */
export const readLine = (p) => {
    return String(prompt(p));
};
/**
 * Returns the user's answer to the prompt as an integer
 * @param prompt {string} prompt
 * @function
 */
export const readInt = (p) => {
    let ans;
    if (ans = parseInt(prompt(p) || "")) {
        return ans;
    }
    for (let i = 0; i < 100; i++) {
        if (ans = parseInt(prompt("Please enter an Integer. " + p) || "")) {
            return ans;
        }
    }
    return 0;
};
/**
 * Returns the user's answer to the prompt as a float
 * @param prompt {string} prompt
 * @function
 */
export const readFloat = (p) => {
    let ans;
    if (ans = parseFloat(prompt(p) || "")) {
        return ans;
    }
    for (let i = 0; i < 100; i++) {
        if (ans = parseFloat(prompt("Please enter an Integer. " + p) || "")) {
            return ans;
        }
    }
    return 0;
};
/**
 * Returns the user's answer to the prompt as a boolean
 * @param prompt {string} prompt
 * @param y {string} the yes string
 * @param n {string} the no string
 * @function
 */
export const readBoolean = (p, y = "y", n = "n") => {
    let ans;
    if ((ans = prompt(`${p} (${y}|${n})`)) === y || ans === n) {
        return ans === y;
    }
    for (let i = 0; i < 100; i++) {
        if ((ans = prompt(`Please enter ${p} (${y}|${n})`)) === y || ans === n) {
            return ans === y;
        }
    }
    return false;
};
const consoleInput = (message, keydownHandler) => __awaiter(void 0, void 0, void 0, function* () {
    output.append(new Text(`${message}: `));
    let i = document.createElement('input');
    output.append(i);
    output.append(new Text(`\n---------------------------------------\n`));
    let p = new Promise((resolve, reject) => {
        i.addEventListener("keydown", function (e) {
            if (!(e.metaKey || e.ctrlKey)) {
                const { value, done } = keydownHandler(e, i);
                if (done) {
                    resolve(value);
                }
            }
        }, false);
    });
    i.focus();
    return yield p;
});
/**
 * Ask a question in the console and return a string
 * @param message {string} question to ask
 * @function
 */
export const readLineConsole = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield consoleInput(message, function (e, input) {
        if (e.key === "Enter") {
            input.before(new Text(input.value));
            output.removeChild(input);
            return {
                done: true,
                value: input.value,
            };
        }
        return { done: false };
    });
});
/**
 * Ask a question in the console and return an integer
 * @param message {string} question to ask
 * @function
 */
export const readIntConsole = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield consoleInput(message, function (e, input) {
        if (e.key === "Enter") {
            input.before(new Text(input.value));
            output.removeChild(input);
            return {
                done: true,
                value: parseInt(input.value),
            };
        }
        if (e.key === "-" && input.value.length > 0) {
            e.preventDefault();
        }
        if ((isNaN(+e.key) && e.key.length < 2 || e.key == " ") && !(e.key == "-")) {
            e.preventDefault();
        }
        return { done: false };
    });
});
/**
 * Ask a question in the console and return a float
 * @param message {string} question to ask
 * @function
 */
export const readFloatConsole = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield consoleInput(message, function (e, input) {
        if (e.key === "Enter") {
            input.before(new Text(input.value));
            output.removeChild(input);
            return {
                done: true,
                value: parseFloat(input.value),
            };
        }
        if (e.key === "." && input.value.split('.').length <= 1) {
            return { done: false };
        }
        if (e.key === "-" && input.value.length > 0) {
            e.preventDefault();
        }
        if ((isNaN(+e.key) && e.key.length < 2 || e.key == " ") && !(e.key == "-")) {
            e.preventDefault();
        }
        return { done: false };
    });
});
/**
 * Ask a question in the console and return a boolean value
 * @param message {string} question to ask
 * @param y the yes value
 * @param n the no value
 * @function
 */
export const readBooleanConsole = (message, y = "y", n = "n") => __awaiter(void 0, void 0, void 0, function* () {
    y = y[0];
    n = n[0];
    return yield consoleInput(`${message} (${y}|${n})`, function (e, input) {
        if (e.key === "Enter") {
            input.before(new Text(input.value));
            output.removeChild(input);
            return {
                done: true,
                value: y === input.value,
            };
        }
        println(input.value.length);
        if (e.key.length <= 1 && e.key !== y && e.key !== n) {
            e.preventDefault();
        }
        return { done: false };
    });
});
//# sourceMappingURL=consoleCommands.js.map