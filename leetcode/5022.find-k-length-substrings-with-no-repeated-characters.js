/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(S, K) {
  if (S.length < K) return 0
  if (K === 1) return S.length
  const m = new Map()
  let flag = 0
  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    m.set(String.fromCharCode(i), 0)
  }
  for (let i = 0; i < K; i++) {
    const char = S[i]
    if (m.get(char) > 0) flag++
    m.set(char, m.get(char) + 1)
  }
  let cnt = 0
  if (!flag) cnt++
  for (let i = K; i < S.length; i++) {
    const charStart = S[i - K]
    const charEnd = S[i]
    if (m.get(charStart) > 1) flag--
    m.set(charStart, m.get(charStart) - 1)
    if (m.get(charEnd) >= 1) flag++
    m.set(charEnd, m.get(charEnd) + 1)
    if (!flag) cnt++
  }
  return cnt
}
