// service functions
function isNumber(value) {
	return typeof(value) === "number";
}
// end service functions

// function sum
function sum() {
	var i, result = 0;
	for (i = 0; i < arguments.length; i++) {
		if (isNumber(arguments[i])) {
			result += arguments[i];
		}
	}
	return result;
}
// end function sum

// function min
function min(arr) {
	var i, result;

	if (!arguments.length) {
		return;
	}

	arr = arr.filter(isNumber);

	result = arr[0];
	for (i = 0; i < arr.length; i++) {
			if (arr[i] < result)	{
				result = arr[i];
			}
	}

	return result;
}
// end function min

// function max
function max(arr) {
	var i, result;

	if (!arguments.length) {
		return;
	}

	arr = arr.filter(isNumber);

	result = arr[0];
	for (i = 0; i < arr.length; i++) {
			if (arr[i] > result)	{
				result = arr[i];
			}
	}

	return result;
}
// end function max