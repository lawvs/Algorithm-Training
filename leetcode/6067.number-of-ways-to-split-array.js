/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let cnt = 0;
  const sum = nums.reduce((a, b) => a + b);
  let prefix = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    prefix += nums[i];
    if (prefix >= sum - prefix) cnt++;
  }
  return cnt;
};
