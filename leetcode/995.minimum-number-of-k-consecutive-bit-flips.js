/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
  let cnt = 0
  for (let i = 0; i <= A.length - K; i++) {
    if (A[i] === 0) {
      cnt++
      for (let j = i; j < i + K; j++) {
        A[j] = A[j] ^ 1
      }
      // console.log(A)
    }
  }
  for (let i = A.length - K; i < A.length; i++) {
    if (A[i] === 0) {
      return -1
    }
  }
  return cnt
}
