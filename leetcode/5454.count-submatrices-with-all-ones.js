/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  let cnt = 0
  const height = Array.from({ length: mat.length }, (v) =>
    new Array(mat[0].length).fill(0)
  )

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        continue
      }
      if (i === 0) {
        height[i][j] = 1
      } else {
        height[i][j] = height[i - 1][j] + 1
      }

      let width = height[i][j]
      for (let k = j; k >= 0; k--) {
        if (height[i][k] === 0) break

        width = Math.min(width, height[i][k])
        cnt += width
      }
    }
  }

  return cnt
}
