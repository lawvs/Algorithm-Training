function videoStitching(clips: number[][], T: number): number {
  let cnt = 1
  const dp = new Array<number>(T).fill(0)
  for (const [start, end] of clips) {
    dp[start] = Math.max(dp[start], end)
  }

  // console.log(dp)
  let max = dp[0]
  let pre = dp[0]
  for (let i = 0; i < T; i++) {
    max = Math.max(max, dp[i])
    if (i === pre) {
      cnt++
      pre = max
    }
    if (i === max) {
      return -1
    }
  }
  return cnt
}
