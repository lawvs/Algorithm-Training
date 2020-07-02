/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  return matrix.flat().sort((a, b) => a - b)[k - 1]
}

let ans
ans = kthSmallest(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  8
)
console.assert(ans === 13)

ans = kthSmallest(
  [
    [1, 2],
    [1, 3],
  ],
  3
)
console.assert(ans === 2)
