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

//   /**
//    * Convert an angle to an x, y coordinate
//    * @param angle - The angle
//    * @return Object - An object containing x, y values
//    */
//   polarToCartesian (angle) {
//     const {cx, cy, r} = this.state,
//         a = (angle - 270) * Math.PI / 180.0,
//         x = cx + (r * Math.cos(a)),
//         y = cy + (r * Math.sin(a));
//
//     return {x, y}
//   }
//
//   /**
//    * Convert an x, y coordinate to an angle
//    * @param x - The x coord
//    * @param y - The y coord
//    * @return number - An angle
//    */
//   cartesianToPolar (x, y) {
//     const {cx, cy} = this.state;
//
//     // Angle in degrees
//     let angle = Math.atan( (y - cy) / (x - cx));
//
//     // Convert Radians to Degrees
//     angle /= (Math.PI / 180);
//
//     // Adjust for negative x and y values
//     if (x < cx) {
//       angle += 180;
//     }
//     else if (y < cy) {
//       angle += 360;
//     }
//
//     return Math.round(angle);
//   }