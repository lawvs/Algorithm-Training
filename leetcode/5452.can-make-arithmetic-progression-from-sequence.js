/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length <= 1) {
    return true
  }
  const sa = arr.sort((a, b) => a - b)
  const n = sa[1] - sa[0]
  for (let i = 1; i < sa.length; i++) {
    if (sa[i] - sa[i - 1] !== n) {
      return false
    }
  }
  return true
}
