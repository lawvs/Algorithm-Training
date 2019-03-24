/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let i = 0
  let maxScore = A[i] + A[1] + i - 1
  for (let j = 2; j < A.length; j++) {
    let score = A[i] + A[j] + i - j
    const preScore = A[j] + A[j - 1] - 1
    if (preScore > score) {
      i = j - 1
      score = A[i] + A[j] + i - j
    }

    if (score > maxScore) {
      maxScore = score
    }
  }
  return maxScore
}
