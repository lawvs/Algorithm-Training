/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const q = []
  const d = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(999))
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        q.push([i, j, 0])
      }
    }
  }

  if (!q.length) {
    return -1
  }

  const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  while (q.length) {
    const [i, j, v] = q.shift()
    if (d[i][j] < v) {
      continue
    }
    d[i][j] = v
    for (let dt = 0; dt < dir.length; dt++) {
      const x = i + dir[dt][0]
      const y = j + dir[dt][1]
      if (
        x >= 0 &&
        x < grid.length &&
        y >= 0 &&
        y < grid[x].length &&
        grid[x][y] === 0
      ) {
        q.push([x, y, v + 1])
      }
    }
  }

  // console.log(d)
  let max = -1
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        max = Math.max(max, d[i][j])
      }
    }
  }
  return max
}
