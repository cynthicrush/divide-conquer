function findRotatedIndex(array, number) {
    var pivot = findPivot(array)
    if (pivot > 0 && number >= array[0] && number <= array[pivot - 1]) {
            return binarySearch(array, number, 0, pivot - 1);
    } else {
        return binarySearch(array, number, pivot, array.length - 1);
    }
}

function binarySearch(array, number, start, end) {
  if (array.length === 0) return -1;
  if (number < array[start] || number > array[end]) return -1;

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (array[mid] === number) {
            return mid;
        } else if (number < array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1; 
}

function findPivot(array) {
    if (array.length === 1 || array[0] < array[array.length - 1]) return 0;
    var start = 0
    var end = array.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (array[mid] > array[mid + 1]) return mid + 1
        else if (array[start] <= array[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}
module.exports = findRotatedIndex;