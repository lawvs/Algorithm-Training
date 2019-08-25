/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  const m = {}
  const r = new Set()
  transactions
    .map(v => v.split(','))
    .sort((a, b) => a[1] - b[1])
    .forEach(t => {
      if (!m[t[0]]) {
        m[t[0]] = []
      }
      if (t[2] > 1000) {
        r.add(t.join(','))
      }
      if (m[t[0]].length) {
        let i = 0
        let preT = m[t[0]][i]
        while (t[1] - preT[1] <= 60) {
          if (t[3] !== preT[3]) {
            r.add(t.join(','))
            r.add(preT.join(','))
          }
          i++
          if (i >= m[t[0]].length) {
            break
          }
          preT = m[t[0]][i]
        }
      }
      m[t[0]].unshift(t)
    })
  return [...r]
}
