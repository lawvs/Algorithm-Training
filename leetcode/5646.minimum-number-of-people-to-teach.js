/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
  const langMap = {}
  languages.forEach((v, i) => {
    i++
    langMap[i] = {}
    v.forEach((l) => {
      langMap[i][l] = true
    })
  })

  friendships = friendships.filter(([a, b]) => {
    for (const lang in langMap[a]) {
      if (langMap[b][lang]) {
        return false
      }
    }
    return true
  })

  let min = Infinity
  for (let i = 1; i <= n; i++) {
    let cnt = 0
    const learned = {}
    for (const [a, b] of friendships) {
      const isA = learned[a] || langMap[a][i]
      const isB = learned[b] || langMap[b][i]
      if (isA && isB) {
        continue
      }
      if (!isA) {
        cnt++
        learned[a] = true
      }
      if (!isB) {
        cnt++
        learned[b] = true
      }
    }
    min = Math.min(min, cnt)
  }
  return min
}
