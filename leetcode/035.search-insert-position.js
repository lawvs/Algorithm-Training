/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const i = nums.findIndex(i => i >= target)
  return i === -1 ? nums.length : i
}
