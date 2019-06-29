/**
 * @param {number[][]} A
 * @return {number}
 */
var maximumMinimumPath = function(A) {
  const d = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const score = new Array(A.length)
    .fill(0)
    .map(() => new Array(A[0].length).fill(0))
  const queue = [[0, 0, Number.MAX_SAFE_INTEGER]]
  while (queue.length) {
    let [x, y, s] = queue.shift()
    if (x < 0 || x >= A.length || y < 0 || y >= A[0].length) continue
    s = Math.min(A[x][y], s)
    if (s <= score[x][y]) continue
    score[x][y] = s
    for (const [dx, dy] of d) {
      queue.push([x + dx, y + dy, s])
    }
  }
  return score[A.length - 1][A[0].length - 1]
}
