/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const r = obstacleGrid.length
  const c = obstacleGrid[0].length
  const dp = Array(r)
    .fill(0)
    .map(() => Array(c).fill(0))

  // init
  for (let i = 0; i < dp.length; i++) {
    if (obstacleGrid[i][0] === 1) {
      break
    }
    dp[i][0] = 1
  }
  for (let j = 0; j < dp[0].length; j++) {
    if (obstacleGrid[0][j] === 1) {
      break
    }
    dp[0][j] = 1
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        continue
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[r - 1][c - 1]
}

// uniquePathsWithObstacles([[0, 0]])
