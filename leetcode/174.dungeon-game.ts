function calculateMinimumHP(dungeon: number[][]): number {
  const dp = Array.from({ length: dungeon.length }, () =>
    Array(dungeon[0].length).fill(0)
  )
  const w = dungeon.length - 1
  const h = dungeon[0].length - 1
  dp[w][h] = Math.max(1, -dungeon[w][h] + 1)

  for (let i = w - 1; i >= 0; i--) {
    dp[i][h] = Math.max(1, dp[i + 1][h] - dungeon[i][h])
  }
  for (let j = h - 1; j >= 0; j--) {
    dp[w][j] = Math.max(1, dp[w][j + 1] - dungeon[w][j])
  }

  for (let i = w - 1; i >= 0; i--) {
    for (let j = h - 1; j >= 0; j--) {
      dp[i][j] = Math.max(
        1,
        Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]
      )
    }
  }

  // console.log(dp)
  return dp[0][0]
}
