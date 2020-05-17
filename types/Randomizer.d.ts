/**
 * The object that returns random values
 */
export declare class Randomizer {
    constructor();
    /**
     * Returns a random integer between `min` and `max`
     * @param min minimum value of the integer
     * @param max maximum value of the integer
     */
    static nextInt(min: number, max: number): number;
    /**
     * Returns true with a probability of 50% or `probability`%
     * @param probability The probability of returning true from 0 (never) to 1 (always)
     */
    static nextBoolean(probability?: number): boolean;
    /**
     * Returns a random float between `min` and `max`
     * @param min minimum value of the float
     * @param max maximum value of the float
     */
    static nextFloat(min: number, max: number): number;
    /**
     * Returns a random hexadecimal color
     */
    static nextColor(): string;
    /**
     * Returns a random hex string between min and max
     * @param min minimum value
     * @param max maximum value
     */
    static randomHex(min: number, max: number): string;
    /**
     * Returns a random value from the array
     * @param array The array to extract a value from
     */
    static randomArrayValue<ArrayType>(array: ArrayType[]): ArrayType;
}
