/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let l = 0
  let r = 0
  const m = {}
  for (const c of s) {
    if (!m[c]) {
      r++
      m[c] = 0
    }
    m[c] += 1
  }

  let cnt = 0
  const set = new Set()
  for (const c of s) {
    if (!set.has(c)) {
      set.add(c)
      l++
    }
    m[c]--
    if (!m[c]) {
      r--
    }
    if (l === r) {
      cnt++
    }
    // console.log(l, r, cnt)
  }
  return cnt
}
