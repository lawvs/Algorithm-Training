/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => b - a)
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      for (let k = j + 1; k < A.length; k++) {
        // if (A[i] + A[j] <= A[k]) {
        //     continue
        // }
        if (A[i] + A[k] <= A[j] || A[j] + A[k] <= A[i]) {
          break
        }
        return A[i] + A[j] + A[k]
      }
    }
  }
  return 0
}
