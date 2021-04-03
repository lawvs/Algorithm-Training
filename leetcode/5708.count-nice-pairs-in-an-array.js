const rev = (num) => +String(num).split('').reverse().join('')

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const MAGIC = 1e9 + 7
  const revNums = nums.map(rev)
  // nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
  // nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i] - revNums[i]
    map[n] = (map[n] || 0) + 1
  }

  let ans = 0
  for (const l of Object.values(map)) {
    // 1 0
    // 2 1
    // 3 3
    // 4 6
    // 5 10
    // 6 15
    // Triangular number
    // See https://en.wikipedia.org/wiki/Triangular_number
    const cnt = (l * (l - 1)) / 2
    ans = (ans + cnt) % MAGIC
  }
  return ans
}
