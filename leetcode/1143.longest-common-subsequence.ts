function longestCommonSubsequence(text1: string, text2: string): number {
  text1 = ' ' + text1
  text2 = ' ' + text2
  const dp = Array(text1.length)
    .fill(0)
    .map(() => Array(text2.length).fill(0))

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1]
}
