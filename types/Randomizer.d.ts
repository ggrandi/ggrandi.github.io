/**
 * The object that returns random values
 */
export declare class Randomizer {
    constructor();
    /**
     * Returns a random integer between `min` and `max`
     * @param min {number} minimum value of the integer
     * @param max {number} maximum value of the integer
   * @returns {number}
     */
    static nextInt(min: number, max: number): number;
    /**
     * Returns true with a probability of 50% or `probability`%
     * @param {number | undefined} probability The probability of returning true from 0 (never) to 1 (always)
   * @returns {boolean}
     */
    static nextBoolean(probability?: number): boolean;
    /**
     * Returns a random float between `min` and `max`
     * @param min {number} minimum value of the float
     * @param max {number} maximum value of the float
   * @returns {float}
     */
    static nextFloat(min: number, max: number): number;
    /**
     * Returns a random hexadecimal color
   * @returns {string}
     */
    static nextColor(): string;
    /**
     * Returns a random hex string between min and max
     * @param min {number} minimum value
     * @param max {number} maximum value
     * @returns {string}
     */
    static randomHex(min: number, max: number): string;
    /**
     * Returns a random value from the array
     * @param {Array<ArrayType>} array The array to extract a value from
     * @returns {ArrayType}
     */
    static randomArrayValue<ArrayType>(array: ArrayType[]): ArrayType;
}
//# sourceMappingURL=Randomizer.d.ts.map