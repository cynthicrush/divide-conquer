function sortedFrequency(array, number) {
    let firstIdx = findFirst(array, number);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(array, number);
    return lastIdx - firstIdx + 1;
}

function findFirst(array, number, low = 0, high = array.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === 0 || number > array[mid - 1]) && array[mid] === number) {
      return mid;
    } else if (number > array[mid]) {
      return findFirst(array, number, mid + 1, high)
    } else {
      return findFirst(array, number, low, mid - 1)
    }
  }
  return -1
}

function findLast(array, number, low = 0, high = array.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === array.length - 1 || number < array[mid + 1]) && array[mid] === number) {
      return mid;
    } else if (number < array[mid]) {
      return findLast(array, number, low, mid - 1)
    } else {
      return findLast(array, number, mid + 1, high)
    }
  }
  return -1
}

module.exports = sortedFrequency