/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  if (K % 2 === 0) {
    return -1
  }
  if (K % 5 === 0) {
    return -1
  }
  let ret = 0
  let v = 0
  for (let i = 1; i <= K; i++) {
    v = (v * 10 + 1) % K
    ret++
    if (v % K === 0) {
      return ret
    }
  }
  return -1
}
