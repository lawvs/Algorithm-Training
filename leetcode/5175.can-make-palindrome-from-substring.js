/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
  const prefix = []
  const m = {}
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    m[i] = 0
  }
  prefix.push({ ...m })
  s.split('').reduce((acc, cur) => {
    acc[cur.charCodeAt(0)]++
    prefix.push({ ...acc })
    return acc
  }, m)

  return queries.map(([left, right, k]) => {
    right += 1
    let diff = 0
    const m = {}
    const la = prefix[left]
    const ra = prefix[right]
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
      if ((ra[i] - la[i]) % 2) {
        diff++
      }
    }
    return ~~(diff / 2) > k ? false : true
  })
}
