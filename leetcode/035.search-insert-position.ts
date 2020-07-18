function searchInsert(nums: number[], target: number): number {
  let idx = 0
  while (idx < nums.length) {
    if (nums[idx] >= target) {
      break
    }
    idx++
  }
  return idx
}
