/**
 * BinarySearch
 * @param {number[]} array
 * @param {number} target
 */
const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

/**
 * BinarySearch
 * @param {number[]} array
 * @param {(midVal: number, midIdx: number)=> boolean} isLow
 * @returns {number} idx
 * @see https://www.youtube.com/watch?v=JuDAqNyTG4g
 */
const binarySearch = (array, isLow = () => true) => {
  let low = -1;
  let high = array.length;
  while (low + 1 !== high) {
    const mid = Math.floor((low + high) / 2);
    if (isLow(array[mid], mid)) {
      low = mid;
    } else {
      high = mid;
    }
  }
  // return low
  return high;
};
