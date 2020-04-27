/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0
  }
  const sa = s.split('')
  let m = new Map()
  let ps = 1 // point fast
  let pe = -1 // point slow
  let l = 1 // ans

  m.set(sa[0], 0)

  while (true) {
    if (ps >= sa.length) {
      break
    }
    const ch = sa[ps]

    if (m.has(ch)) {
      pe = Math.max(pe, m.get(ch))
    }

    m.set(ch, ps)

    l = Math.max(l, ps - pe)
    ps++
  }
  return l
}
