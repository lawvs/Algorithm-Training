/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  if (n < 0) {
    return false
  }
  if (n === 1 || n === 3) {
    return true
  }
  let pow = 0
  while (3 ** pow < n) {
    pow++
  }
  if (3 ** pow === n) {
    return true
  }
  if (n - 3 ** (pow - 1) >= 3 ** (pow - 1)) {
    return false
  }
  return checkPowersOfThree(n - 3 ** (pow - 1))
}
