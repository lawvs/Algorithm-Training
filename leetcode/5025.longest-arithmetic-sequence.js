/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  const m = new Map()
  let max = 2
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      const sub = A[i] - A[j]
      const nk = JSON.stringify([sub, A[i]])
      const ok = JSON.stringify([sub, A[j]])
      if (m.has(ok)) {
        let nv = m.has(nk) ? Math.max(m.get(ok) + 1, m.get(nk)) : m.get(ok) + 1
        if (sub === 0 && A.lastIndexOf(A[i]) !== i) {
          nv--
        }
        m.set(nk, nv)
        if (m.get(nk) > max) {
          max = m.get(nk)
          // console.log(i, j, nk, sub, max)
        }
        continue
      }
      m.set(nk, 2)
      if (sub === 0) {
        m.set(nk, 1)
      }
    }
  }
  // console.log(m)
  return max
}
