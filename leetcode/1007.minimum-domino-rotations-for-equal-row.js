/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  let m = {}
  m[A[0]] = true
  m[B[0]] = true
  for (let i = 1; i < A.length; i++) {
    const tmp = {}
    if (m[A[i]]) {
      tmp[A[i]] = true
    }
    if (m[B[i]]) {
      tmp[B[i]] = true
    }
    m = tmp
  }
  const k = Object.keys(m)
  if (!k || k.length <= 0) {
    return -1
  }
  // console.log(k)
  let cnt = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < k.length; i++) {
    const la = A.filter(n => n != k[i]).length
    const lb = B.filter(n => n != k[i]).length
    cnt = Math.min(cnt, la, lb)
  }
  return cnt
}
