function getMaximumConsecutive(coins: number[]): number {
  let ans = 0
  coins = coins.sort((a, b) => a - b)
  for (const coin of coins) {
    if (coin > ans + 1) {
      break
    }
    ans += coin
  }
  return ans + 1
}
