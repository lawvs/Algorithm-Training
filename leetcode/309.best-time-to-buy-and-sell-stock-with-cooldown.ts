function maxProfit(prices: number[]): number {
  if (prices.length <= 1) {
    return 0
  }
  const dp: number[][] = Array.from({ length: prices.length }, () =>
    Array(3).fill(0)
  )
  dp[0][0] = -prices[0]
  // cool down
  dp[0][1] = 0
  dp[0][2] = 0

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
    dp[i][1] = prices[i] + dp[i - 1][0]
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
  }

  // console.log(dp)
  return Math.max(...dp[prices.length - 1])
}
