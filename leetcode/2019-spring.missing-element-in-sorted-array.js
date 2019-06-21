/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  if (nums.length === 1) {
    return nums[0] + k
  }
  if (nums[1] - nums[0] - 1 >= k) {
    return nums[0] + k
  }
  const nk = k - (nums[1] - nums[0] - 1)
  nums.shift()
  // console.log(nums, nk)
  return missingElement(nums, nk)
}
