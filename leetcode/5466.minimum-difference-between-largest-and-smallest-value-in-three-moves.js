/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) {
    return 0
  }
  nums = nums.sort((a, b) => a - b)
  const l = nums.length - 1
  return Math.min(
    Math.max(0, nums[l - 3] - nums[0]),
    Math.max(0, nums[l - 2] - nums[1]),
    Math.max(0, nums[l - 1] - nums[2]),
    Math.max(0, nums[l] - nums[3])
  )
}
