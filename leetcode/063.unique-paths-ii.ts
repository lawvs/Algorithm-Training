function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0] === 1) {
    return 0
  }
  obstacleGrid[0][0] = 1

  let flag = true
  for (let i = 1; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 0 && flag) {
      obstacleGrid[i][0] = 1
    } else {
      flag = false
      obstacleGrid[i][0] = 0
    }
  }

  flag = true

  for (let j = 1; j < obstacleGrid[0].length; j++) {
    if (obstacleGrid[0][j] === 0 && flag) {
      obstacleGrid[0][j] = 1
    } else {
      flag = false
      obstacleGrid[0][j] = 0
    }
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
        continue
      }
      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
    }
  }
  // console.log(obstacleGrid)

  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
}
