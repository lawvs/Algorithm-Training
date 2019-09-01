/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
  if (k > calories.length) {
    return 0
  }
  let sum = 0
  for (let i = 0; i < k; i++) {
    const v = calories[i]
    sum += v
  }
  let score = 0
  for (let i = k; i < calories.length; i++) {
    if (sum > upper) {
      score++
    } else if (sum < lower) {
      score--
    }
    const v = calories[i]
    sum += v
    sum -= calories[i - k]
  }
  if (sum > upper) {
    score++
  } else if (sum < lower) {
    score--
  }
  return score
}
