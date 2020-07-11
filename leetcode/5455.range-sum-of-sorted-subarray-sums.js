/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      arr.push(sum)
    }
  }
  arr = arr.sort((a, b) => a - b)
  // console.log(arr)

  let sum = 0
  for (let i = left - 1; i < right; i++) {
    sum += arr[i]
    sum %= 1e9 + 7
  }

  return sum
}
