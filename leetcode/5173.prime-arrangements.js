const MAGIC = 1e9 + 7

const set = new Set([
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97
])

/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  let dp = 1
  let cnt = 0
  for (let i = 2; i <= n; i++) {
    if (set.has(i)) {
      cnt++
      dp *= cnt
    } else {
      dp *= i - cnt
    }
    dp = dp % MAGIC
  }
  return dp
}
