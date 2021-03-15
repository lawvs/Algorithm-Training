const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]

function generateMatrix(n: number): number[][] {
  let matrix = Array(n)
    .fill(0)
    .map(() => Array(n))
  let dirIdx = 0
  let x = 0
  let y = 0
  let cur = 0
  while (cur++ < n * n) {
    // console.log(x, y)
    matrix[x][y] = cur
    let [dx, dy] = dir[dirIdx]
    if (
      x + dx >= n ||
      x + dx < 0 ||
      y + dy >= n ||
      y + dy < 0 ||
      matrix[x + dx][y + dy] !== undefined
    ) {
      dirIdx = (dirIdx + 1) % 4
      dx = dir[dirIdx][0]
      dy = dir[dirIdx][1]
    }
    x += dx
    y += dy
  }
  return matrix
}
