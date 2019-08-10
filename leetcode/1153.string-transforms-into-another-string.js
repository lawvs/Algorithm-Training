/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
  const s = new Set()
  const m = {}
  for (let i = 0; i < str1.length; i++) {
    const c = str1[i]
    if (m[c]) {
      if (m[c] !== str2[i]) {
        return false
      }
    }
    m[c] = str2[i]
    s.add(str2[i])
  }
  if (s.size === 26) {
    if (str1 === str2) {
      return true
    }
    return false
  }
  return true
}
