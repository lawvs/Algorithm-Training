/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
  // bitwise operation
  const s2i = str =>
    str
      .split('')
      .reduce((acc, c) => (acc |= 1 << (c.charCodeAt() - 'a'.charCodeAt())), 0)

  const m = words.map(s2i).reduce((m, w) => {
    m[w] = (m[w] || 0) + 1
    return m
  }, {})
  // console.log(Object.keys(m).map(s => (+s).toString(2)))
  // console.log(Object.values(m))

  return puzzles.map(s => {
    let cnt = 0
    const num = s2i(s)
    const fc = 1 << (s[0].charCodeAt() - 'a'.charCodeAt())
    // console.log(s, fc.toString(2))
    // bitwise operation
    for (let i = num; i; i = (i - 1) & num) {
      if (fc & i) {
        cnt += m[i] || 0
      }
    }
    return cnt
  })
}
