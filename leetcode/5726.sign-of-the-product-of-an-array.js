/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  return Math.sign(nums.reduce((acc, cur) => acc * cur))
}
