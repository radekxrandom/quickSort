function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        var newArr = [];
        var right = [];
        var left = [];
        var pivot = arr.shift();

        var length = arr.length;

        for (i = 0; i < length; i++) {
            if (arr[i] > pivot) {
                right.push(arr[i]);
            } else {
                left.push(arr[i]);
            }
        }
        return newArr.concat(quickSort(left) + pivot + quickSort(right));
    }
}


var arr = [3, 1, 5, 10, 2, 4];
console.log("Original array: " + arr);
var posortowane = quickSort(arr);
console.log("Sorted array: " + posortowane);
