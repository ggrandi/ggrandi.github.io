/**
 * The object that returns random values
 */
export declare class Randomizer {
    constructor();
    /**
     * Returns a random integer between `min` and `max`
     * @param min {number} minimum value of the integer
     * @param max {number} maximum value of the integer
     */
    static nextInt(min: number, max: number): number;
    /**
     * Returns true with a probability of 50% or `probability`%
     * @param probability The probability of returning true
     */
    static nextBoolean(probability?: number): boolean;
    /**
     * Returns a random float between `min` and `max`
     * @param min {number} minimum value of the float
     * @param max {number} maximum value of the float
     */
    static nextFloat(min: number, max: number): number;
    /**
     * Returns a random hexadecimal color
     */
    static nextColor(): string;
}
//# sourceMappingURL=Randomizer.d.ts.map