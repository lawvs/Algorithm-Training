/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const arr = Array(n)
    .fill(0)
    .map((v, i) => i + 1)
  let curIdx = 0
  while (arr.length > 1) {
    const targetIdx = (curIdx + k - 1) % arr.length
    curIdx = targetIdx
    arr.splice(targetIdx, 1)
    // console.log(arr)
  }
  return arr[0]
}
