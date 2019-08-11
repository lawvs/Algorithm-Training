/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  if (target < d || target > d * f) {
    return 0
  }
  const magic = 1e9 + 7
  const dp = new Array(d + 1).fill(0).map(() => new Array(target + 1).fill(0))
  for (let i = 1; i <= Math.min(f, target); i++) {
    dp[1][i] = 1
  }
  for (let i = 2; i <= d; i++) {
    for (let j = i; j <= target; j++) {
      let sum = 0
      for (let k = 1; j - k > 0 && k <= f; k++) {
        sum = (sum + dp[i - 1][j - k]) % magic
      }
      dp[i][j] = sum
    }
  }
  // console.log(dp)
  return dp[d][target]
}
