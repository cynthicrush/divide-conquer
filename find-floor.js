function findFloor(array, number, low = 0, high = array.length - 1) {
    if (low > high) return -1;
    if (number >= array[high]) return array[high];
  
    let mid = Math.floor((low + high) / 2)
  
    if (array[mid] === number) return array[mid];
  
    if (mid > 0 && array[mid - 1] <= number && number < array[mid]) {
      return array[mid - 1];
    }
  
    if (number < array[mid]) {
      return findFloor(array, number, low, mid - 1);
    }
  
    return findFloor(array, number, mid + 1, high)
}

module.exports = findFloor