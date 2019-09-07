/**
 * @param {string[]} phrases
 * @return {string[]}
 */
var beforeAndAfterPuzzles = function(phrases) {
  const s = new Set()
  for (let i = 0; i < phrases.length; i++) {
    const p1 = phrases[i].split(' ')
    for (let j = 0; j < phrases.length; j++) {
      if (i === j) {
        continue
      }
      const p2 = phrases[j].split(' ')
      if (p1[p1.length - 1] === p2[0]) {
        s.add(`${p1.join(' ')} ${p2.slice(1).join(' ')}`.trim())
      }
    }
  }
  return [...s].sort()
}
