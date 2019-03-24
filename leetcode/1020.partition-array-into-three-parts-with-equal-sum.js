/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let reducer = A[0]
  for (let i = 1; i < A.length; i++) {
    A[i] = reducer + A[i]
    reducer = A[i]
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const sum1 = A[i]
      const sum2 = A[j] - A[i]
      const sum3 = A[A.length - 1] - A[j]
      if (sum1 === sum2 && sum2 === sum3) {
        return true
      }
    }
  }
  return false
}
