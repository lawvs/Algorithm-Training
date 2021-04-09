function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  let min = nums[0]
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    min = Math.min(min, nums[left], nums[mid], nums[right])
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++
      right--
      continue
    }
    if (nums[left] <= nums[mid]) {
      left = mid + 1
      continue
    } else if (nums[mid] <= nums[right]) {
      right = mid
      continue
    }
    console.log(nums, left, mid, right)
    throw new Error('Unreachable')
  }
  min = Math.min(min, nums[left], nums[right])
  return min
}
