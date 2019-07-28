/**
 * @param {number} N
 * @return {boolean}
 */
var isArmstrong = function(N) {
  const arr = (N + '').split('')
  const n = arr.length
  return N === arr.map(v => v ** n).reduce((acc, cur) => acc + cur, 0)
}
