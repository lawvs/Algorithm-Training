const canShip = (w, weights, D) => {
  let d = 0
  weights.reduce((sum, cur) => {
    if (sum + cur <= w) {
      return sum + cur
    }
    d++
    if (cur > w) {
      d = Number.MAX_SAFE_INTEGER
    }
    return cur
  }, 0)
  console.log(d, D)
  return d < D
}

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let start = 0
  let end = weights.reduce((a, b) => {
    return a + b
  })
  while (start <= end) {
    const mid = parseInt((start + end) / 2)
    if (!canShip(mid, weights, D)) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}
