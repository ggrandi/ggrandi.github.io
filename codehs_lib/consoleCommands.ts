import { output } from './index.js';

const createColoredSpan = (inner: string, color: string): HTMLSpanElement => {
  let s = document.createElement("span");
  s.innerHTML = inner;
  s.style.color = color;
  return s;
}

/**
 * logs any argument passed to the console
 * @param args {any[]} arguments to print
 */
export const println = (...args: Array<any>): void => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === null) {
      output.append(createColoredSpan('null', "deeppink"));
    } else {
      switch (typeof (args[i])) {
        case "number": {
          output.append(createColoredSpan(args[i], "purple"));
        } break;
        case "object": {
          console.log(args[i]);
          output.append(createColoredSpan(`${args[i].toString()} => browser console`, "blue"));
        } break;
        case "boolean": {
          output.append(createColoredSpan(args[i] ? 'true' : 'false', "red"));
        } break;
        case "undefined": {
          output.append(createColoredSpan('undefined', "deeppink"));
        } break;
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
export const readLine = (p: string): string => {
  return String(prompt(p));
}

/**
 * Returns the user's answer to the prompt as an integer
 * @param prompt {string} prompt
 * @function
 */
export const readInt = (p: string): number => {
  let ans: number;
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
export const readFloat = (p: string): number => {
  let ans: number;
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
export const readBoolean = (p: string, y: string = "y", n: string = "n"): boolean => {
  let ans: string | null;
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

const consoleInput = async<T>(message: string, keydownHandler: (e: KeyboardEvent, input: HTMLInputElement) => { done: boolean, value?: any }) => {
  output.append(new Text(`${message}: `));

  let i = document.createElement('input');
  output.append(i);

  output.append(new Text(`\n---------------------------------------\n`));

  let p = new Promise<T>((resolve, reject) => {
    i.addEventListener("keydown", function (e) {
      if (!(e.metaKey || e.ctrlKey)) {
        const { value, done } = keydownHandler(e, i);
        if (done) {
          resolve(value)
        }
      }
    }, false);
  });

  i.focus();

  return await p;
};

/**
 * Ask a question in the console and return a string
 * @param message {string} question to ask
 * @function
 */
export const readLineConsole = async (message: string) => {
  return await consoleInput<string>(message, function (e, input) {
    if (e.key === "Enter") {
      input.before(new Text(input.value));
      output.removeChild(input);
      return {
        done: true,
        value: input.value,
      }
    }
    return { done: false };
  });
}

/**
 * Ask a question in the console and return an integer
 * @param message {string} question to ask
 * @function
 */
export const readIntConsole = async (message: string) => {
  return await consoleInput<number>(message, function (e, input) {
    if (e.key === "Enter") {
      input.before(new Text(input.value));
      output.removeChild(input);
      return {
        done: true,
        value: parseInt(input.value),
      }
    }

    if (e.key === "-" && input.value.length > 0) {
      e.preventDefault();
    }

    if ((isNaN(+e.key) && e.key.length < 2 || e.key == " ") && !(e.key == "-")) {
      e.preventDefault();
    }

    return { done: false };
  });
}

/**
 * Ask a question in the console and return a float
 * @param message {string} question to ask
 * @function
 */
export const readFloatConsole = async (message: string) => {
  return await consoleInput<number>(message, function (e, input) {
    if (e.key === "Enter") {
      input.before(new Text(input.value));
      output.removeChild(input);
      return {
        done: true,
        value: parseFloat(input.value),
      }
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
}

/**
 * Ask a question in the console and return a boolean value
 * @param message {string} question to ask
 * @param y the yes value
 * @param n the no value
 * @function
 */
export const readBooleanConsole = async (message: string, y = "y", n = "n") => {
  y = y[0];
  n = n[0];

  return await consoleInput<boolean>(`${message} (${y}|${n})`, function (e, input) {
    if (e.key === "Enter") {
      input.before(new Text(input.value));
      output.removeChild(input);
      return {
        done: true,
        value: y === input.value,
      }
    }

    if (e.key.length <= 1 && e.key !== y && e.key !== n) {
      e.preventDefault()
    }

    return { done: false };
  });
}
