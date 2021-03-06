/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let minD = Infinity
  let idx = -1
  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i]
    if (a === x || b === y) {
      const dis = Math.abs(a - x) + Math.abs(b - y)
      if (dis < minD) {
        minD = dis
        idx = i
      }
    }
  }
  return idx
}
