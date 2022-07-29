function countZeroes(array) {
    let result = array.filter(x => x === 0).length
    return result
}

console.log(countZeroes([1,1,1,1,0,0]))

module.exports = countZeroes