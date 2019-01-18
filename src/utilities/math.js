/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 */
export function clamp(min, max) {
    return Math.min(Math.max(this, min), max);
}

/**
 * Convert an angle in radians to degrees
 * @param {Number} angle 
 */
export function toDegrees(angle) {
    return angle / (Math.PI / 180);
}

/**
 * Convert an angle in degrees to radians
 * @param {Number} angle 
 */
export function toRadians(angle) {
    return angle * (Math.PI / 180);
}