/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
  const dp = Array(obstacles.length)
    .fill(0)
    .map(() => Array(3))
  dp[0][0] = 1
  dp[0][1] = 0
  dp[0][2] = 1
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = dp[i - 1][0]
    dp[i][1] = dp[i - 1][1]
    dp[i][2] = dp[i - 1][2]
    if (obstacles[i]) {
      dp[i][obstacles[i] - 1] = Infinity
    }
    dp[i][0] = Math.min(dp[i][0], dp[i][1] + 1, dp[i][2] + 1)
    dp[i][1] = Math.min(dp[i][1], dp[i][0] + 1, dp[i][2] + 1)
    dp[i][2] = Math.min(dp[i][2], dp[i][0] + 1, dp[i][1] + 1)
    if (obstacles[i]) {
      dp[i][obstacles[i] - 1] = Infinity
    }
  }
  return Math.min(
    dp[dp.length - 1][0],
    dp[dp.length - 1][1],
    dp[dp.length - 1][2]
  )
}
