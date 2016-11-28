// funstion sum

//function sum() {
//	var i = 0, result = 0;
//	var arr = [];
//
//	for (i = 0; i < arguments.length; i++) {
//		arr[i] = parseFloat(arguments[i]);
//	}	
//	
//	arr.reduce(function(previousValue, currentItem) {
//		result = previousValue + currentItem;
//		return result;
//	}, 0);
//	return result;
//}

//function sum() {
//	var i = 0, result = 0;
//	var arr = [];
//
//	for (i = 0; i < arguments.length; i++) {
//		arr[i] = arguments[i];
//	}	
//	
//	arr.reduce(function(previousValue, currentItem) {
//		if (typeof(currentItem) == "number") {
//			result = previousValue + currentItem;
//			return result;
//		}
//	}, 0);
//	return result;
//}

function sum() {
	var i = 0, result = 0;
	for (i = 0; i < arguments.length; i++) {
		if (typeof(arguments[i]) !== "number") continue;
		result += arguments[i];
	}
	return result;
}


// function min

//function min() {
//	var i = 0, result;
//	var arr = [];
//
//	console.log(arguments);
////	if arguments.length = 0 console.log('empty') return;
//	
//	for (i = 0; i < arguments.length; i++) {
//		arr[i] = parseFloat(arguments[i]);
//	}	
//	
//	result = arr[0];
//	
//	arr.reduce(function(previousValue, currentItem) {
//		if (currentItem <= previousValue)	previousValue = currentItem;
//		result = previousValue;
//		return result;
//	});
//	return result;
//}

function min(arr) {
	var i = 0, min, result;
	for (i = 0; i < arr.length; i++) {
		min = arr[0];
	}
	for (i = 1; i < arr.length; i++) {
		if (arr[i] < min)	min = arr[i];
	}
	result = min;
	return result;
}

// funstion max

//function max() {
//	var i = 0, max, result;
//	for (i = 0; i < arguments.length; i++) {
//		max = arguments[0];
//	}
//	for (i = 1; i < arguments.length; i++) {
//		if (arguments[i] > max)	max = arguments[i];
//	}
//	result = max;
//	return result;
//}

function max(arr) {
	var i = 0, max, result;
	for (i = 0; i < arr.length; i++) {
		max = arr[0];
	}
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > max)	max = arr[i];
	}
	result = max;
	return result;
}