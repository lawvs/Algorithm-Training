/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  const dp = Array.from({ length: A.length }, () => new Array(B.length).fill(0))
  for (let i = 0; i < A.length; i++) {
    dp[i][B.length - 1] = A[i] === B[B.length - 1] ? 1 : 0
  }
  for (let j = 0; j < A.length; j++) {
    dp[A.length - 1][j] = A[A.length - 1] === B[j] ? 1 : 0
  }

  let ans = 0
  for (let i = A.length - 2; i >= 0; i--) {
    for (let j = B.length - 2; j >= 0; j--) {
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : 0
      ans = Math.max(ans, dp[i][j])
    }
  }
  return ans
}
