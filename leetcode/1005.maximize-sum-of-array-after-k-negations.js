/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A = A.sort((a, b) => a - b)
  for (let i = 0; i < A.length && K > 0 && A[i] < 0; i++) {
    A[i] = -A[i]
    K--
  }
  A = A.sort((a, b) => a - b)
  if (K % 2) {
    A[0] = -A[0]
  }
  const sum = A.reduce((acc, cur) => acc + cur)
  return sum
}
