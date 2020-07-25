/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const MAGIC = 1e9 + 7
  const dp = [1, 0]
  let sum = 0
  let cnt = 0
  for (const n of arr) {
    sum += n
    cnt += dp[1 - (sum % 2)]
    dp[sum % 2] += 1
    cnt %= MAGIC
  }
  return cnt
}
