"use strict";

/**
 * @module extendedMath
 */
var extendedMath = { };

function isInvalidNumber(value) {
	return typeof value !== "number" || isNaN(value) || value === -Infinity || value === Infinity;
}

/**
 * A static constant number representing 1/2 of PI.
 *
 * @constant {number} HalfPI=1.57079632679489661923
 * @since 1.0.0
 * @memberOf module:extendedMath
 */
Object.defineProperty(extendedMath, "HalfPI", {
	value: 1.57079632679489661923,
	enumerable: true
});

/**
 * A static constant number representing 1/4 of PI.
 *
 * @constant {number} QuarterPI=0.78539816339744830962
 * @since 1.0.0
 * @memberOf module:extendedMath
 */
Object.defineProperty(extendedMath, "QuarterPI", {
	value: 0.78539816339744830962,
	enumerable: true
});

/**
 * A static constant number representing 2x PI.
 *
 * @constant {number} TwoPI=6.28318530717958647693
 * @since 1.0.0
 * @memberOf module:extendedMath
 */
Object.defineProperty(extendedMath, "TwoPI", {
	value: 6.28318530717958647693,
	enumerable: true
});

/**
 * Clamps a number between a minimum and maximum value.
 * +/- Infinity are not valid minimum / maximum values.
 *
 * @function clamp
 * @param {number} value - The number to clamp.
 * @param {number} min - The minimum number to clamp to.
 * @param {number} max - The maximum number to clamp to.
 * @returns {number} A value which is inclusively adjusted between the specified mimum and maximum values, or NaN if any arguments are not valid numbers.
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.clamp(3.141592654, -1, 3)); // 3
 * console.log(extendedMath.clamp(-1.337, -4.2, 6.9)); // -1.337
 * console.log(extendedMath.clamp(-800, -2.8, 1)); // -2.8
 * console.log(extendedMath.clamp(1, 2, Infinity)); // NaN
 * console.log(extendedMath.clamp(1, -Infinity, 4)); // NaN
 * console.log(extendedMath.clamp(Infinity, 0, 1)); // NaN
 */
extendedMath.clamp = function clamp(value, min, max) {
	return isInvalidNumber(value) || isInvalidNumber(min) || isInvalidNumber(max) ? NaN : value < min ? min : value > max ? max : value;
};

/**
 * Calculates the positive difference between two numbers.
 * Values must be valid finite numbers.
 *
 * @function difference
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} A positive value representing the difference between two numbers, or NaN if either argument is not a valid number.
 * @since 1.0.8
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.difference(3, 9)); // 6
 * console.log(extendedMath.difference(4, -4)); // 8
 * console.log(extendedMath.difference(Infinity, 4)); // NaN
 * console.log(extendedMath.difference(NaN, 8080)); // NaN
 */
extendedMath.difference = function difference(a, b) {
	return isInvalidNumber(a) || isInvalidNumber(b) ? NaN : Math.abs(b - a);
};

/**
 * Calculates the positive distance between two numbers.
 *
 * @function distance
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} A positive value representing the distance between two numbers, or NaN if either argument is not a valid number.
 * @deprecated Renamed to difference so the unit context of the values is not assumed.
 * @see {@link module:extendedMath.difference|difference}
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.distance(3, 9)); // 6
 * console.log(extendedMath.distance(4, -4)); // 8
 * console.log(extendedMath.distance(Infinity, 4)); // NaN
 * console.log(extendedMath.distance(NaN, 8080)); // NaN
 */
extendedMath.distance = extendedMath.difference;

/**
 * Converts an angle value in radians to degrees.
 *
 * @function radiansToDegrees
 * @param {number} value - An angle value represented in radians.
 * @returns {number} A value representing the angle in degrees instead of radians, or NaN if the argument is not a valid number.
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.radiansToDegrees(Math.PI * 2)); // 360
 * console.log(extendedMath.radiansToDegrees(Math.PI / 2)); // 90
 * console.log(extendedMath.radiansToDegrees(-Infinity)); // NaN
 * console.log(extendedMath.radiansToDegrees(NaN)); // NaN
 */
extendedMath.radiansToDegrees = function radiansToDegrees(value) {
	return isInvalidNumber(value) ? NaN : value * (180 / Math.PI);
};

/**
 * Converts an angle value in degrees to radians.
 *
 * @function degreesToRadians
 * @param {number} value - An angle value represented in degrees.
 * @returns {number} A value representing the angle in radians instead of degrees, or NaN if the argument is not a valid number.
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.degreesToRadians(360)); // 6.283185307179586
 * console.log(extendedMath.degreesToRadians(180)); // 3.141592653589793
 * console.log(extendedMath.degreesToRadians(Infinity)); // NaN
 * console.log(extendedMath.degreesToRadians(NaN)); // NaN
 */
extendedMath.degreesToRadians = function degreesToRadians(value) {
	return isInvalidNumber(value) ? NaN : value * (Math.PI / 180);
};

/**
 * Performs a comparison on two angles represented in degrees.
 * If an angle is less than 0 or greater than 360, it is transformed so that it is within this scale before comparing.
 *
 * @function compareAnglesDegrees
 * @param {a} value - An angle value represented in degrees.
 * @param {b} value - Another angle value represented in degrees to compare against.
 * @returns {number} A value of 0 if the .angles are equal, 1 if the first angle is to the left of the second angle, or -1 if the first angle is to the right of the second angle. If any arguments are not valid numbers, then NaN is returned instead.
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.compareAnglesDegrees(0, 360)); // 0
 * console.log(extendedMath.compareAnglesDegrees(-90, 90)); // 1
 * console.log(extendedMath.compareAnglesDegrees(120, 30)); // -1
 * console.log(extendedMath.compareAnglesDegrees(-Infinity, 1)); // NaN
 * console.log(extendedMath.compareAnglesDegrees(-2, NaN)); // NaN
 */
extendedMath.compareAnglesDegrees = function compareAnglesDegrees(a, b) {
	if(isInvalidNumber(a) || isInvalidNumber(b)) {
		return NaN;
	}

	if(a === b) {
		return 0;
	}

	var c = a % 360;
	var d = b % 360;

	if(c < 0) {
		c += 360;
	}

	if(d < 0) {
		d += 360;
	}

	if(c === d) {
		return 0;
	}

	return Math.cos(extendedMath.degreesToRadians(a - b) + (Math.PI / 2)) < 0 ? -1 : 1;
};

/**
 * Performs a comparison on two angles represented in radians.
 * If an angle is less than 0 or greater than 360, it is transformed so that it is within this scale before comparing.
 *
 * @function compareAnglesRadians
 * @param {a} value - An angle value represented in radians.
 * @param {b} value - Another angle value represented in radians to compare against.
 * @returns {number} A value of 0 if the .angles are equal, 1 if the first angle is to the left of the second angle, or -1 if the first angle is to the right of the second angle. If any arguments are not valid numbers, then NaN is returned instead.
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.compareAnglesRadians(0, Math.PI * 2)); // 0
 * console.log(extendedMath.compareAnglesRadians(-(Math.PI / 2), Math.PI / 2)); // 1
 * console.log(extendedMath.compareAnglesRadians(2 * (Math.PI / 3), (Math.PI / 3))); // -1
 * console.log(extendedMath.compareAnglesRadians(-Infinity, 1)); // NaN
 * console.log(extendedMath.compareAnglesRadians(-2, NaN)); // NaN
 */
extendedMath.compareAnglesRadians = function compareAnglesRadians(a, b) {
	return isInvalidNumber(a) || isInvalidNumber(b) ? NaN : extendedMath.compareAnglesDegrees(extendedMath.radiansToDegrees(a), extendedMath.radiansToDegrees(b));
};

/**
 * Linerarly interpolates between two numbers relative to a multiplier value.
 *
 * @function lerp
 * @param {number} a - The low end of the interpolation scale.
 * @param {number} b - The high end of the interpolation scale.
 * @param {number} amount - The multiplier number to interpolate by.
 * @returns {number} A number interpolated relative to the low and high end numbers, or NaN if any of the arguments are not valid numbers.
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.lerp(0, 1.5, 2)); // 3
 * console.log(extendedMath.lerp(-4, 8, 0.5)); // 2
 * console.log(extendedMath.lerp(0.5, 1.5, 0.75)); // 1.25
 * console.log(extendedMath.lerp(0, 1, Infinity)); // NaN
 * console.log(extendedMath.lerp(NaN, 320, 240)); // NaN
 */
extendedMath.lerp = function lerp(a, b, amount) {
	if(isInvalidNumber(a) || isInvalidNumber(b) || isInvalidNumber(amount)) {
		return NaN;
	}

	if(amount === 0) {
		return a;
	}
	else if(amount === 1) {
		return b;
	}

	return a + ((b - a) * amount);
};

/**
 * Normalizes a number based on a min and max value.
 *
 * @function normalize
 * @param {number} value - The number to normalize.
 * @param {number} min - The low end number to normalize relative to.
 * @param {number} max - The high end number to normalize relative to.
 * @returns {number} A number normalized relative to the low and high end values, or NaN if any of the arguments are not valid numbers.
 * @since 1.0.0
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.normalize(1, 0, 2)); // 0.5
 * console.log(extendedMath.normalize(4, 1, 5)); // 0.75
 * console.log(extendedMath.normalize(-3, -4, 0)); // 0.25
 * console.log(extendedMath.normalize(16, 0, 4)); // 4
 * console.log(extendedMath.normalize(NaN, 0, 1)); // NaN
 * console.log(extendedMath.normalize(1, -Infinity, 2)); // NaN
 */
extendedMath.normalize = function normalize(value, min, max) {
	return isInvalidNumber(value) || isInvalidNumber(min) || isInvalidNumber(max) ? NaN : (value - min) / (max - min);
};

/**
 * Converts a number from degrees to radians.
 * @function degreesToRadians
 * @param {number} degrees - The number to convert from degrees to radians.
 * @returns {number} A number converted from degrees to radians, or NaN if the argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.degreesToRadians(0)); // 0
 * console.log(extendedMath.degreesToRadians(180)); // Math.PI
 * console.log(extendedMath.degreesToRadians(360)); // Math.PI * 2
 * console.log(extendedMath.degreesToRadians(NaN)); // NaN
 * console.log(extendedMath.degreesToRadians(Infinity)); // Infinity
 * console.log(extendedMath.degreesToRadians(-Infinity)); // -Infinity
 * console.log(extendedMath.degreesToRadians('foo')); // NaN
 * 
 */
extendedMath.deg2rad = function normalize(degrees) {
	return degrees * Math.PI / 180;
};

/**
 * Converts a number from radians to degrees.
 * @function radiansToDegrees
 * @param {number} radians - The number to convert from radians to degrees.
 * @returns {number} A number converted from radians to degrees, or NaN if the argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.radiansToDegrees(0)); // 0
 * console.log(extendedMath.radiansToDegrees(Math.PI)); // 180
 * console.log(extendedMath.radiansToDegrees(Math.PI * 2)); // 360
 * console.log(extendedMath.radiansToDegrees(NaN)); // NaN
 * console.log(extendedMath.radiansToDegrees(Infinity)); // Infinity
 * console.log(extendedMath.radiansToDegrees(-Infinity)); // -Infinity
 * console.log(extendedMath.radiansToDegrees('foo')); // NaN
 * 
 */
extendedMath.rad2deg = function normalize(radians) {
	return radians * 180 / Math.PI;
};

/**
 * Rounds a number to a specified precision.
 * @function around
 * @param {number} value - The number to round.
 * @param {number} [precision=0] - The number of decimal places to round to.
 * @returns {number} A number rounded to the specified precision, or NaN if the argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.around(1.2345)); // 1
 * console.log(extendedMath.around(1.2345, 1)); // 1.2
 * console.log(extendedMath.around(1.2345, 2)); // 1.23
 * console.log(extendedMath.around(1.2345, 3)); // 1.235
 * console.log(extendedMath.around(1.2345, 4)); // 1.2345
 * console.log(extendedMath.around(NaN)); // NaN
 * console.log(extendedMath.around(Infinity)); // Infinity
 * console.log(extendedMath.around(-Infinity)); // -Infinity
 * console.log(extendedMath.around('foo')); // NaN
 * 
 */
extendedMath.around = function around(value, precision = 0) {
	return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
};

/**
 * Rounds a number up to a integer.
 * @function rint
 * @param {number} value - The number to round.
 * @returns {number} A number rounded up to an integer, or NaN if the argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.rint(1.2345)); // 1
 * console.log(extendedMath.rint(1)); // 1
 * console.log(extendedMath.rint(0)); // 0
 * console.log(extendedMath.rint(NaN)); // NaN
 * console.log(extendedMath.rint(Infinity)); // Infinity
 * console.log(extendedMath.rint(-Infinity)); // -Infinity
 * console.log(extendedMath.rint('foo')); // NaN
 * 
 */
extendedMath.rint = function rint(value) {
	return Math.round(value);
}

/**
 * Calculates the Modified Bessel Function of the first kind of order 0.
 * @function i0
 * @param {number} x - The number to calculate the Modified Bessel Function of the first kind of order 0.
 * @returns {number} The Modified Bessel Function of the first kind of order 0, or NaN if the argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.i0(0)); // 1
 * console.log(extendedMath.i0(1)); // 1.2660658480342601
 * console.log(extendedMath.i0(2)); // 2.279585307296026
 * console.log(extendedMath.i0(3)); // 4.880792565033293
 * console.log(extendedMath.i0(NaN)); // NaN
 * console.log(extendedMath.i0(Infinity)); // Infinity
 * console.log(extendedMath.i0(-Infinity)); // Infinity
 * console.log(extendedMath.i0('foo')); // NaN
 * 
 */
extendedMath.i0 = function i0(x) {
	var y = Math.abs(x);
	var ans;
	if (y <= 3.75) {
		y = x / 3.75;
		y *= y;
		ans = 1.0 + y * (3.5156229 + y * (3.0899424 + y * (1.2067492 + y * (0.2659732 + y * (0.360768e-1 + y * 0.45813e-2)))));
	} else {
		y = 3.75 / y;
		ans = (Math.exp(y) / Math.sqrt(y)) * (0.39894228 + y * (0.1328592e-1 + y * (0.225319e-2 + y * (-0.157565e-2 + y * (0.916281e-2 + y * (-0.2057706e-1 + y * (0.2635537e-1 + y * (-0.1647633e-1 + y * 0.392377e-2))))))));
	}
	return ans;
};

/**
 * 	
 * @function sinc
 * @param {number} x - The number to calculate the sinc of.
 * @returns {number} The sinc of the number, or NaN if the argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * @example
 * console.log(extendedMath.sinc(0)); // 1
 * console.log(extendedMath.sinc(1)); // 0.8414709848078965
 * console.log(extendedMath.sinc(2)); // 0.45464871341284085
 * console.log(extendedMath.sinc(3)); // 0.0470400026866224
 * console.log(extendedMath.sinc(NaN)); // NaN
 * console.log(extendedMath.sinc(Infinity)); // NaN
 * console.log(extendedMath.sinc(-Infinity)); // NaN
 * console.log(extendedMath.sinc('foo')); // NaN
 */
extendedMath.sinc = function sinc(x) {
	return x === 0 ? 1 : Math.sin(x) / x;
};

/**
 * Calculates the least common multiple of two numbers.
 * @function lcm
 * @param {number} x - The first number.
 * @param {number} y - The second number.
 * @returns {number} The least common multiple of the two numbers, or NaN if either argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * 
 */
extendedMath.lcm = function lcm(x, y) {
	return (!x || !y) ? 0 : Math.abs((x * y) / extendedMath.gcd(x, y));
};

/**
 * Calculates the greatest common divisor of two numbers.
 * @function gcd
 * @param {number} x - The first number.
 * @param {number} y - The second number.
 * @returns {number} The greatest common divisor of the two numbers, or NaN if either argument is not a valid number.
 * @since 1.0.9
 * @memberOf module:extendedMath
 * 
 */
extendedMath.gcd = function gcd(x, y) {
	x = Math.abs(x);
	y = Math.abs(y);
	while (y) {
		var t = y;
		y = x % y;
		x = t;
	}
	return x;
};

console.log(extendedMath.gcd(2324,3234342));

module.exports = extendedMath;
