/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
  const s1 = new Set()
  const m2 = new Map()
  const m3 = new Map()
  wordlist.forEach(w => s1.add(w))
  wordlist.forEach(w => {
    const ws = w
    w = w.toLowerCase()
    const li = m2.has(w) ? m2.get(w) : []
    li.push(ws)
    m2.set(w, li)
  })
  wordlist.forEach(w => {
    const ws = w
    w = w
      .toLowerCase()
      .split('')
      .map(c => (['a', 'e', 'i', 'o', 'u'].includes(c) ? '*' : c))
      .join('')
    const li = m3.has(w) ? m3.get(w) : []
    li.push(ws)
    m3.set(w, li)
  })

  return queries.map(w => {
    if (s1.has(w)) {
      return w
    }
    w = w.toLowerCase()
    if (m2.has(w)) {
      return m2.get(w)[0]
    }
    w = w
      .split('')
      .map(c => (['a', 'e', 'i', 'o', 'u'].includes(c) ? '*' : c))
      .join('')
    if (m3.has(w)) {
      return m3.get(w)[0]
    }
    return ''
  })
}

wordlist = ['KiTe', 'kite', 'hare', 'Hare']
queries = [
  'kite',
  'Kite',
  'KiTe',
  'Hare',
  'HARE',
  'Hear',
  'hear',
  'keti',
  'keet',
  'keto'
]
ans = ['kite', 'KiTe', 'KiTe', 'Hare', 'hare', '', '', 'KiTe', '', 'KiTe']
ret = spellchecker(wordlist, queries)
console.log(ret)
