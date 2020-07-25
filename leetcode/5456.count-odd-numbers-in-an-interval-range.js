/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let ext = 0
  if (low % 2 === 1 && high % 2 === 1) {
    ext++
  }
  return ((high - low + 1) >> 1) + ext
}
