/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
  return (
    nums.reduce((acc, cur) => {
      if (cur === target) {
        return acc + 1
      }
      return acc
    }, 0) >
    nums.length / 2
  )
}
