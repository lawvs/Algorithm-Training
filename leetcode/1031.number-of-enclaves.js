/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
  const dfs = (i, j) => {
    if (i < 0 || i >= A.length || j < 0 || j >= A[0].length) {
      return
    }
    if (A[i][j] === 0) {
      return
    }
    A[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  for (let i = 0; i < A.length; i++) {
    dfs(i, 0)
    dfs(i, A[0].length - 1)
  }
  for (let j = 0; j < A[0].length; j++) {
    dfs(0, j)
    dfs(A.length - 1, j)
  }
  console.log(A)
  const count = n => {
    let cnt = 0
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        if (A[i][j] === n) {
          cnt++
        }
      }
    }
    return cnt
  }
  return count(1)
}
