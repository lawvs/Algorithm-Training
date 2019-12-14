/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix

  for (let i = 1; i < matrix.length; i++) {
    matrix[i][0] += matrix[i - 1][0]
  }

  if (!matrix.length) {
    this.matrix = [[]]
    return
  }

  for (let j = 1; j < matrix[0].length; j++) {
    matrix[0][j] += matrix[0][j - 1]
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      matrix[i][j] =
        matrix[i][j] +
        matrix[i][j - 1] +
        matrix[i - 1][j] -
        matrix[i - 1][j - 1]
    }
  }
  // console.log(matrix)
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (row2 > this.matrix.length) {
    row2 = this.matrix.length - 1
  }
  if (col2 > this.matrix[0].length) {
    col2 = this.matrix[0].length - 1
  }

  return (
    this.matrix[row2][col2] +
    (row1 === 0 || col1 === 0 ? 0 : this.matrix[row1 - 1][col1 - 1]) -
    (row1 === 0 ? 0 : this.matrix[row1 - 1][col2]) -
    (col1 === 0 ? 0 : this.matrix[row2][col1 - 1])
  )
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
