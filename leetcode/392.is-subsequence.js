/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let p = 0
  for (const c of t) {
    if (c === s[p]) {
      p++
    }
    if (p === s.length) {
      return true
    }
  }
  return p === s.length // fix s === ''  t === ''
}
