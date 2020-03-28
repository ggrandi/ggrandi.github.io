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
const addSeparator = (pre) => {
    if (pre.innerText) {
        let d = document.createElement('div');
        d.style.height = '1px';
        d.style.width = '100%';
        d.style.backgroundColor = 'black';
        d.style.marginTop = '5px';
        d.style.marginBottom = '5px';
        d.className = 'separator';
        pre.append(d);
    }
};
/**
 * logs any argument passed to the console
 * @param args {any[]} arguments to print
 */
export const println = (...args) => {
    addSeparator(output);
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
                        output.append(createColoredSpan(String(args[i]), "red"));
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
    addSeparator(output);
    output.append(new Text(`${message}: `));
    let i = document.createElement('input');
    i.className = 'consoleInput';
    output.append(i);
    let p = new Promise((resolve, reject) => {
        i.addEventListener("keydown", function (e) {
            if (!(e.metaKey || e.ctrlKey)) {
                const { value, done, color } = keydownHandler(e, i);
                if (done && !isNaN(value)) {
                    i.before(createColoredSpan(value, String(color)));
                    output.removeChild(i);
                    resolve(value);
                }
            }
        }, false);
    });
    i.focus();
    output.scrollTop = output.scrollHeight;
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
            return {
                done: true,
                value: input.value,
                color: "black",
            };
        }
        return { done: false };
    });
});
const readNumberConsole = (message, validation, checks) => __awaiter(void 0, void 0, void 0, function* () {
    return yield consoleInput(message, function (e, input) {
        if (e.key === "Enter") {
            return {
                done: true,
                value: validation(input.value),
                color: "purple",
            };
        }
        if (e.key === "-" && input.value.length > 0) {
            e.preventDefault();
        }
        if ((isNaN(+e.key) && e.key.length < 2 || e.key == " ") && !(e.key == "-")) {
            e.preventDefault();
        }
        checks && checks(e, input.value);
        return { done: false };
    });
});
/**
 * Ask a question in the console and return an integer
 * @param message {string} question to ask
 * @function
 */
export const readIntConsole = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield readNumberConsole(message, (str) => parseInt(str));
});
/**
 * Ask a question in the console and return a float
 * @param message {string} question to ask
 * @function
 */
export const readFloatConsole = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield readNumberConsole(message, (str) => parseFloat(str), (e, value) => {
        if (e.key === "." && value.split('.').length <= 1) {
            return { done: false };
        }
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
            return {
                done: true,
                value: y === input.value,
                color: 'red',
            };
        }
        if (e.key.length <= 1 && (!(e.key === y || e.key === n) || input.value.length !== 0)) {
            e.preventDefault();
        }
        return { done: false };
    });
});
//# sourceMappingURL=consoleCommands.js.map