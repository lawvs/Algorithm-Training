/**
 * @param {number[][]} p1
 * @param {number[][]} p2
 * @returns {number} line length ** 2
 */
const distance = function(p1, p2) {
  return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1])
}

const isSameStraightLine = function(a, b, c) {
  // 三点共线判断 面积判断
  // area(ABC) == 0
  return (a[0] - c[0]) * (b[1] - c[1]) === (b[0] - c[0]) * (a[1] - c[1])
}

/**
 * @param {number[][]} points
 * @returns {number} rectangle area
 */
const rectangleArea = function(points) {
  if (points.length !== 4) {
    return 0
  }

  const s = new Set()
  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; j++) {
      const d = distance(points[i], points[j])
      s.add(d)
    }
  }
  if (!s.has(0) && s.size === 2) {
    // square
    return Math.min(...Array.from(s)) ** 2
  }
  if (s.size !== 3) {
    return 0
  }
  if (
    isSameStraightLine(points[0], points[1], points[2]) ||
    isSameStraightLine(points[0], points[1], points[3]) ||
    isSameStraightLine(points[0], points[2], points[3]) ||
    isSameStraightLine(points[1], points[2], points[3])
  ) {
    return 0
  }
  const arr = Array.from(s).sort((a, b) => a - b)
  if (arr[0] + arr[1] === arr[2]) {
    // 勾股定理
    return arr[0] * arr[1]
  }
  return 0
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
  if (points.length < 4) {
    return 0
  }
  let minArea = Number.MAX_VALUE
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i]
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j]
      for (let k = j + 1; k < points.length; k++) {
        const p3 = points[k]
        for (let l = k + 1; l < points.length; l++) {
          const p4 = points[l]
          const pArr = [p1, p2, p3, p4]
          let area = rectangleArea(pArr)
          if (!area) {
            continue
          }
          minArea = Math.min(minArea, area)
        }
      }
    }
  }
  if (minArea === Number.MAX_VALUE) {
    return 0
  }
  return Math.sqrt(minArea)
}

points = [[1, 2], [2, 1], [1, 0], [0, 1]]
ret = minAreaFreeRect(points)
ans = 2
console.assert(ret === ans, ret, ans)

points = [[0, 1], [2, 1], [1, 1], [1, 0], [2, 0]]
ret = minAreaFreeRect(points)
ans = 1
console.assert(ret === ans, ret, ans)

points = [[0, 3], [1, 2], [3, 1], [1, 3], [2, 1]]
ret = minAreaFreeRect(points)
ans = 0
console.assert(ret === ans, ret, ans)

points = [[2, 1], [2, 3], [3, 3], [3, 1]]
ret = minAreaFreeRect(points)
ans = 2
console.assert(ret === ans, ret, ans)

points = [[3, 1], [1, 1], [0, 1], [2, 1], [3, 3], [3, 2], [0, 2], [2, 3]]
ret = minAreaFreeRect(points)
ans = 2
console.assert(ret === ans, ret, ans)

points = [[3, 0], [0, 1], [1, 0], [3, 3], [2, 3], [0, 2], [2, 1]]
ret = minAreaFreeRect(points)
ans = 0
console.assert(ret === ans, ret, ans)

points = [[2, 4], [3, 4], [2, 2], [1, 4]]
ret = minAreaFreeRect(points)
ans = 0
console.assert(ret === ans, ret, ans)

points = [
  [2, 4],
  [4, 2],
  [1, 0],
  [3, 4],
  [4, 4],
  [2, 2],
  [1, 1],
  [3, 0],
  [1, 4],
  [0, 3],
  [0, 1],
  [2, 1],
  [4, 0]
]
ret = minAreaFreeRect(points)
ans = 3
console.assert(ret === ans, ret, ans)

points = [[4972, 31271], [35028, 8729], [20000, 38785], [20000, 1215]]
ret = minAreaFreeRect(points)
ans = 564601960
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
