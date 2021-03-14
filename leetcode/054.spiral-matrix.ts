const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]
const symbol = Symbol()

function spiralOrder(matrix: (number | typeof symbol)[][]): number[] {
  let n = matrix.length * matrix[0].length
  let dirIdx = 0
  const ans = []
  let x = 0
  let y = 0
  while (n--) {
    // console.log(x, y)
    ans.push(matrix[x][y])
    matrix[x][y] = symbol
    let [dx, dy] = dir[dirIdx]
    if (
      x + dx >= matrix.length ||
      x + dx < 0 ||
      y + dy >= matrix[0].length ||
      y + dy < 0 ||
      matrix[x + dx][y + dy] === symbol
    ) {
      dirIdx = (dirIdx + 1) % 4
      dx = dir[dirIdx][0]
      dy = dir[dirIdx][1]
    }
    x += dx
    y += dy
  }
  return ans
}
