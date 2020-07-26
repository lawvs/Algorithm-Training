function longestIncreasingPath(matrix: number[][]): number {
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]

  const m: Record<string, number> = {}
  const dfs = (i: number, j: number) => {
    const k = i + '+' + j
    if (m[k] !== undefined) {
      return m[k]
    }
    let l = 1
    const num = matrix[i][j]
    for (const [dx, dy] of dir) {
      const x = i + dx
      const y = j + dy
      if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[x].length) {
        continue
      }
      if (matrix[x][y] > num) {
        l = Math.max(l, dfs(x, y) + 1)
      }
    }
    m[k] = l
    return l
  }

  let ml = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      ml = Math.max(ml, dfs(i, j))
    }
  }

  return ml
}
