/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let sum = 0;
  let count = 0;
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    sum += nums[r];
    r++;
    while (sum * (r - l) >= k) {
      sum -= nums[l];
      l++;
    }
    count += r - l;
  }
  return count;
};
