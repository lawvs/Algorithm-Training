/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const t = [...heights]
  const heightsSorted = heights.sort((a, b) => a - b)
  heights = t

  let cnt = 0
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== heightsSorted[i]) {
      cnt++
    }
  }
  return cnt
}