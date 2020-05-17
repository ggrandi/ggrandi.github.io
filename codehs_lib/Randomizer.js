/**
 * The object that returns random values
 */
export class Randomizer {
    constructor() {
        console.warn("Creating a new Randomizer creates a new blank object");
    }
    /**
     * Returns a random integer between `min` and `max`
     * @param min minimum value of the integer
     * @param max maximum value of the integer
     */
    static nextInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * Returns true with a probability of 50% or `probability`%
     * @param probability The probability of returning true from 0 (never) to 1 (always)
     */
    static nextBoolean(probability = 0.5) {
        if (probability < 0 || probability > 1) {
            console.warn(`The value of ${probability} is not between 1 and 0. Please pick a valid value`);
            probability = 0.5;
        }
        return Math.random() < probability;
    }
    /**
     * Returns a random float between `min` and `max`
     * @param min minimum value of the float
     * @param max maximum value of the float
     */
    static nextFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    /**
     * Returns a random hexadecimal color
     */
    static nextColor() {
        return `#${this.randomHex(0, 255)}${this.randomHex(0, 255)}${this.randomHex(0, 255)}`;
    }
    /**
     * Returns a random hex string between min and max
     * @param min minimum value
     * @param max maximum value
     */
    static randomHex(min, max) {
        const c = this.nextInt(min, max).toString(16);
        const length = max.toString(16).length;
        return c.length > length ? c : c.padStart(length, "0");
    }
    /**
     * Returns a random value from the array
     * @param array The array to extract a value from
     */
    static randomArrayValue(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
//# sourceMappingURL=Randomizer.js.map