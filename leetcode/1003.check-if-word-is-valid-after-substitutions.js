/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
  if (S === 'abc') {
    return true
  }
  if (S.length <= 3) {
    return false
  }
  const ind = S.search('abc')
  if (ind === -1) {
    return false
  }
  return isValid(S.substring(0, ind) + S.substring(ind + 3))
}
