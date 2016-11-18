var arr, mm, array;
var resmin, ressum;
var i;
var elements;

// functions

function sum() {
	ressum = 0;
	for (i = 0; i < array.length; i++) {
		ressum += parseFloat(array[i]);
	}
}

// start values

ressum = 0;
mm = [3,3,4];

// code

elements = prompt ('Please input array using separator ", ": ');
arr = elements.split(', ');
array = arr;
sum(arr);
console.log('array: ' + arr + '. sum(arr): ' + ressum);
array = mm;
sum(mm);
console.log('array: ' + mm + '. sum(mm): ' + ressum);

console.log('Fin.');