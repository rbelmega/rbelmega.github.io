function merge(left, right) {
	var result = [];
	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return result.concat(left).concat(right);

}

function mergeSort(arr) {

	if (arr.length <= 1) {
		return arr;
	}

	var middle = Math.floor(arr.length / 2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));

}



function bubbleSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	for (var i = arr.length - 1; i > 0; i--) {
		for (var j = i - 1; j >= 0; j--) {
			if (arr[j] < arr[j - 1]) {
				var tmp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = tmp;
			}
		}
	}

	return arr;
}

function selectSort(arr) {
	var min, tmp;
	for (var i = 0; i < arr.length; i++) {
		min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min != i) {
			tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}

	return arr;
}

function insertSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var tmp = arr[i],
			j = i;
		while (arr[j - 1] > tmp) {
			arr[j] = arr[j - 1];
			--j;
		}
		arr[j] = tmp;
	}

	return arr;
}
var quickSort = (function() {

	function partition(array, left, right) {
		var cmp = array[right - 1],
			minEnd = left,
			maxEnd;
		for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
			if (array[maxEnd] <= cmp) {
				swap(array, maxEnd, minEnd);
				minEnd += 1;
			}
		}
		swap(array, minEnd, right - 1);
		return minEnd;
	}

	function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		return array;
	}

	function quickSort(array, left, right) {
		if (left < right) {
			var p = partition(array, left, right);
			quickSort(array, left, p);
			quickSort(array, p + 1, right);
		}
		return array;
	}

	return function(array) {
		return quickSort(array, 0, array.length);
	};
}());

var count = 100000;
var i = 0;
var arr = [];
for (i; i < count; i++) {
	arr.push(Math.random());
}

function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 5; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}

var t0;
var t1;
var testArr;
var j;

function perform(func, arr, alg) {
	var results = [];
	var min;
	var max;
	var average;
	var sum;
	var arrCopy;

	for (j = 0; j < 5; j++) {
		t0 = performance.now();
		arrCopy = arr.slice();
		func(arrCopy);
		t1 = performance.now();
		results.push((t1 - t0));
	}

	min = Math.min.apply(null, results);
	max = Math.max.apply(null, results);
	sum = results.reduce(function(pv, cv) { return pv + cv; }, 0);
	average = sum / 5 ;


	console.log(alg + ": " + average.toFixed(2) + " ms.");

	return arrCopy;
}




var results = [];
var min;
var max;
var average;
var sum;

for (j = 0; j < 5; j++) {
	t0 = performance.now();
	testArr = arr.slice();
	testArr.sort(function (a, b) {
		return a - b;
	});
	t1 = performance.now();
	results.push((t1 - t0));
}

min = Math.min.apply(null, results);
max = Math.max.apply(null, results);
sum = results.reduce(function(pv, cv) { return pv + cv; }, 0);
average = sum / 5 ;
console.log("Native: " + average.toFixed(2) + " ms.");


perform(insertSort, arr, "InsertSort");
perform(selectSort, arr, "selectSort");
//perform(bubbleSort, arr, "bubbleSort");
var test2 = perform(quickSort, arr, "quickSort");
perform(mergeSort, arr, "mergeSort");

for (var j = 0 ; j< testArr.length; j++) {
	if (testArr[j] !== test2[j]) {
		console.log("incorect");
	}
}