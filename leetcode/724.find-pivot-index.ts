function pivotIndex(nums: number[]): number {
  const sum = nums.reduce((acc, cur) => acc + cur, 0)
  let acc = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (2 * acc === sum - num) {
      return i
    }
    acc += num
  }
  return -1
}
