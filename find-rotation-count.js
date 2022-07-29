function findRotationCount(array, low = 0, high = array.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2)

    if (mid < high && array[mid + 1] < array[mid])
    return mid + 1;

    if (mid > low && array[mid] < array[mid - 1]) {
        return mid;
    }

    if (array[high] > array[mid]) {
        return findRotationCount(array, low, mid - 1);
    }

        return findRotationCount(array, mid + 1, high);
}

module.exports = findRotationCount