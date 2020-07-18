function searchInsert(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1

  if (nums[start] > target) {
    return 0
  }
  if (nums[end] < target) {
    return nums.length
  }

  // Binary search
  while (start < end) {
    let mid = (start + end) >> 1
    // console.log(start, end, mid)

    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      start = mid + 1
      continue
    } else {
      end = mid
    }
  }
  return start
}
