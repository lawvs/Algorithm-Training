function findMaxAverage(nums: number[], k: number): number {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let max = sum
  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k]
    sum += nums[i]
    max = Math.max(max, sum)
  }
  return max / k
}
