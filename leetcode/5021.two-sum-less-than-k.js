/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  let sum = -1
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const sumA = A[i] + A[j]
      if (sumA >= K) continue
      sum = Math.max(sum, sumA)
    }
  }
  if (sum >= K) return -1
  return sum
}
