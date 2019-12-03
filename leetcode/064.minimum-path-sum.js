/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp = Array(grid[0].length)

  dp[0] = grid[0][0]
  for (let j = 1; j < dp.length; j++) {
    dp[j] = dp[j - 1] + grid[0][j]
  }

  for (let i = 1; i < grid.length; i++) {
    dp[0] = dp[0] + grid[i][0]
    for (let j = 1; j < dp.length; j++) {
      dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1])
    }
  }
  return dp[dp.length - 1]
}
