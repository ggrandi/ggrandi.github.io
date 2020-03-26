/**
 * The object that returns random values
 */
export class Randomizer {
	constructor() {
		console.warn('Creating a new Randomizer creates a new blank object')
	}

	/**
	 * Returns a random integer between `min` and `max`
	 * @param min {number} minimum value of the integer
	 * @param max {number} maximum value of the integer
	 */
	static nextInt (min: number, max: number): number {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	 * Returns true with a probability of 50% or `probability`%
	 * @param probability The probability of returning true
	 */
	static nextBoolean (probability: number = 0.5): boolean {
		return Math.random() < probability;
	}
	/**
	 * Returns a random float between `min` and `max`
	 * @param min {number} minimum value of the float
	 * @param max {number} maximum value of the float
	 */
	static nextFloat (min: number, max: number): number {
		return Math.random() * (max - min) + min;
	}

	/**
	 * Returns a random hexadecimal color
	 */
	static nextColor (): string {
		let c = "#";
		let a = "0123456789abcdef";
		for (let i = 0; i < 6; i++) {
			c = c.concat(a[this.nextInt(0, a.length - 1)]);
		}
		return c;
	}
};