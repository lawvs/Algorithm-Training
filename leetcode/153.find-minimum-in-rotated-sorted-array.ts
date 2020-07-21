function findMin(nums: number[]): number {
  let start = 0
  let end = nums.length - 1
  // Binary search
  while (start < end) {
    const mid = (start + end) >> 1
    // console.log(nums[start], nums[mid], nums[end])

    if (nums[start] < nums[end] && nums[mid] < nums[end]) {
      end = mid
      continue
    }
    if (nums[start] > nums[mid] && nums[start] > nums[end]) {
      end = mid
      continue
    }
    if (nums[start] < nums[mid] && nums[mid] > nums[end]) {
      start = mid + 1
      continue
    }
    if (start === mid || mid === end) {
      return Math.min(nums[start], nums[end])
    }
    throw new Error('Unreachable')
  }
  return nums[start]
}
