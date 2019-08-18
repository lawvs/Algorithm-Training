/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const counter = str =>
    str.split('').reduce((m, cur) => {
      m[cur] = (m[cur] || 0) + 1
      return m
    }, {})
  const compare = (m1, m2) => {
    for (const k in m2) {
      if ((m1[k] || 0) < m2[k]) {
        return false
      }
    }
    return true
  }
  const m = counter(chars)
  return words.reduce(
    (acc, cur) => acc + (compare(m, counter(cur)) ? cur.length : 0),
    0
  )
}
