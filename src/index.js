function sum() {
	var array = [];
	var i = 0, ressum = 0;
	for (i = 0; i < arguments.length; i++) {
		array[i] = arguments[i];
		ressum += parseFloat(array[i]);
	}
	alert("sum: " + ressum);
}