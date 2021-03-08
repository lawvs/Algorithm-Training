function minCut(s: string): number {
  const palindromeMap = Array(s.length)
    .fill(0)
    .map(() => Array(s.length).fill(true))
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      palindromeMap[i][j] = s[i] == s[j] && palindromeMap[i + 1][j - 1]
    }
  }

  if (palindromeMap[0][s.length - 1]) {
    return 0
  }

  const dp = Array(s.length).fill(Infinity)

  for (let i = 0; i < s.length; i++) {
    if (palindromeMap[0][i]) {
      dp[i] = 0
      continue
    }
    for (let j = 0; j < i; j++) {
      if (palindromeMap[j + 1][i]) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[dp.length - 1]
}
