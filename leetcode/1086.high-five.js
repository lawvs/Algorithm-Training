/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  const arr = new Array(1000).fill(0).map(() => new Array())
  items.forEach(([id, score]) => arr[id].push(score))
  return arr
    .map((v, i) => [
      i,
      Math.floor(
        v
          .sort((a, b) => b - a)
          .slice(0, 5)
          .reduce((a, b) => a + b, 0) / 5
      )
    ])
    .filter(a => a[1] > 0)
}
