/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const f = s => {
    const sa = s.split('').sort()
    const c = sa[0]
    let cnt = 0
    for (const ch of sa) {
      c === ch && cnt++
    }
    return cnt
  }
  queries = queries.map(f)
  words = words.map(f).sort((a, b) => a - b)
  return queries.map(v =>
    words.reduce((cnt, cur) => {
      cur > v && cnt++
      return cnt
    }, 0)
  )
}
