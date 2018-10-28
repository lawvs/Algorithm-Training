/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (j === 0) {
                A[i][j] = A[i][j] + Math.min(A[i - 1][j], A[i - 1][j + 1])
                continue
            }
            if (j === A[i].length - 1) {
                A[i][j] = A[i][j] + Math.min(A[i - 1][j - 1], A[i - 1][j])
                continue
            }
            A[i][j] =
                A[i][j] +
                Math.min(A[i - 1][j - 1], A[i - 1][j], A[i - 1][j + 1])
        }
    }

    let min = A[A.length - 1][0]
    for (let j = 1; j < A[A.length - 1].length; j++) {
        if (A[A.length - 1][j] < min) {
            min = A[A.length - 1][j]
        }
    }
    return min
}
