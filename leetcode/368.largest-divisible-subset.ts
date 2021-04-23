function largestDivisibleSubset(nums: number[]): number[] {
  nums.sort((a, b) => a - b)
  const dp = Array(nums.length).fill(1)
  const thread = Array(nums.length).map((v, i) => i)

  let max = 1
  let maxIdx = 0
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        const now = dp[j] + 1
        if (now > dp[i]) {
          dp[i] = now
          thread[i] = j
        }
      }
    }
    if (dp[i] > max) {
      max = dp[i]
      maxIdx = i
    }
  }

  const ans = []
  while (true) {
    ans.push(nums[maxIdx])
    maxIdx = thread[maxIdx]
    if (thread[maxIdx] === maxIdx) break
  }

  return ans
}
