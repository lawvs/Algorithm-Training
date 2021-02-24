function transpose(matrix: number[][]): number[][] {
  const arr = Array(matrix[0].length)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[j][i] = matrix[i][j]
    }
  }
  return arr
}
