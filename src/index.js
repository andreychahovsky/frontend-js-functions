// funstion sum

function sum() {
	var i = 0, result = 0;
	for (i = 0; i < arguments.length; i++) {
		if (typeof(arguments[i]) !== "number") {
			continue;
		}
		result += arguments[i];
	}
	return result;
}


// function min

function min(arr) {
	if (!arguments.length) {
		return;
	}
	var i = arguments.length, result;
	while (i > 0) {
		if (typeof(arr[i]) === "number") {
			result = arr[i];
		}
		i--;
	}
	
	for (i = 0; i < arr.length; i++) {
		// if (!typeof(arr[i])) {
		if (typeof(arr[i] === "number")) {
			if (arr[i] < result)	{
				result = arr[i];
			}
		}
	}
	return result;
}

// funstion max

function max(arr) {
	if (!arguments.length) {
		return;
	}
	var i = 0, max, result;
	for (i = 0; i < arr.length; i++) {
		if (!typeof(arr[i])) {
			continue;
		}
		max = arr[i];
	}
	for (i = 0; i < arr.length; i++) {
		if (!typeof(arr[i])) {
			continue;
		}
		if (arr[i] > max)	{
			max = arr[i];
		}
	}
	result = max;
	return result;
}