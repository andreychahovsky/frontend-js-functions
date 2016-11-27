function sum() {
	var i = 0, ressum = 0;
	for (i = 0; i < arguments.length; i++) {
		if (typeof (arguments[i] = "number")) {
			ressum += parseFloat(arguments[i]);
		} else {

		}

	}
	return ('sum = ' + ressum);
}

function min() {
	var i = 0, min;
	for (i = 0; i < arguments.length; i++) {
		min = arguments[0];
	}
	for (i = 1; i < arguments.length; i++) {
		if (arguments[i] < min)	min = arguments[i];
	}
	return ('min = ' + min);
}

function max() {
	var i = 0, max;
	for (i = 0; i < arguments.length; i++) {
		max = arguments[0];
	}
	for (i = 1; i < arguments.length; i++) {
		if (arguments[i] > max)	max = arguments[i];
	}
	return ('max = ' + max);
}