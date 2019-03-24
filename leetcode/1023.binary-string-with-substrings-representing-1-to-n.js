/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  for (let i = 1; i <= N; i++) {
    if (S.indexOf(i.toString(2)) === -1) {
      return false
    }
  }
  return true
}
