/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  left = left.sort((a, b) => b - a)
  right = right.sort((a, b) => a - b)
  const l = left.length > 0 ? left[0] : -Infinity
  const r = right.length > 0 ? n - right[0] : -Infinity
  return Math.max(l, r)
}
