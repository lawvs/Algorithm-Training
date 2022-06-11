/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions = potions.sort((a, b) => b - a);
  const ret = Array(spells.length);

  for (let i = 0; i < spells.length; i++) {
    const cnt = binarySearch(potions, (mid) => mid * spells[i] >= success);
    ret[i] = cnt;
  }

  return ret;
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
