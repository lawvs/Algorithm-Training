function isMatch(s: string, p: string): boolean {
  const dp = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(false)
  )

  dp[0][0] = true
  for (let j = 1; j < dp[0].length; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = true
    } else break
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1]
}
