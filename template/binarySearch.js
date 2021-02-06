/**
 * BinarySearch
 * @param {number[]} array
 * @param {number} target
 */
const binarySearch = (array, target) => {
  let low = 0
  let high = array.length
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (array[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}
