/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(N, lamps, queries) {
  const X = {}
  const Y = {}
  const M = {}
  const K = {}

  const dir = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]
  const s = new Set()
  for (const [x, y] of lamps) {
    if (!X[x]) {
      X[x] = new Set()
    }
    if (!Y[y]) {
      Y[y] = new Set()
    }
    if (!M[x + y]) {
      M[x + y] = new Set()
    }
    if (!K[x - y]) {
      K[x - y] = new Set()
    }
    s.add(`${x},${y}`)
    X[x].add(`${x},${y}`)
    Y[y].add(`${x},${y}`)
    M[x + y].add(`${x},${y}`)
    K[x - y].add(`${x},${y}`)
  }
  // console.log(X, Y, M, N)
  const ret = []
  for (const [x, y] of queries) {
    let flag = false
    if (
      (X[x] && X[x].size) ||
      (Y[y] && Y[y].size) ||
      (M[x + y] && M[x + y].size) ||
      (K[x - y] && K[x - y].size)
    ) {
      flag = true
    }
    ret.push(flag ? 1 : 0)
    for (const [dx, dy] of dir) {
      const i = x + dx
      const j = y + dy
      if (i >= 0 && i < N && j >= 0 && j < N) {
        if (s.has(`${i},${j}`)) {
          s.delete(`${i},${j}`)
          X[i].delete(`${i},${j}`)
          Y[j].delete(`${i},${j}`)
          M[i + j].delete(`${i},${j}`)
          K[i - j].delete(`${i},${j}`)
        }
      }
    }
  }
  return ret
}

N = 5
lamps = [[0, 0], [4, 4]]
queries = [[1, 1], [1, 0]]
ret = gridIllumination(N, lamps, queries)
ans = [1, 0]
console.log(ret, ans)
