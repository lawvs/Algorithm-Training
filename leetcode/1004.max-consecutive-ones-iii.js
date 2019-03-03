/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  if (K >= A.length) {
    return A.length
  }
  let max = 0
  let cnt = 0
  let start = 0
  const l = []
  for (let i = 0; i < A.length; i++) {
    if (A[i]) {
      cnt++
      continue
    }
    if (K > 0) {
      l.push(i)
      cnt++
      K--
      continue
    }
    max = Math.max(max, cnt)
    if (l.length <= 0) {
      cnt = 0
      start = i
      continue
    }
    const ind = l.shift()
    cnt -= ind - start
    start = ind + 1
    l.push(i)
  }
  max = Math.max(max, cnt)
  return max
}

A = [0, 0, 1, 1, 1, 0, 0]
K = 0
ret = longestOnes(A, K)
console.log(ret)
