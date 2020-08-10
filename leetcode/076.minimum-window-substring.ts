function minWindow(s: string, t: string): string {
  let p1 = 0
  let p2 = 0
  let cur = ''
  const m = new Map<string, number>()
  t.split('').forEach((c) => m.set(c, (m.get(c) || 0) + 1))
  let l = 0
  while (true) {
    console.log(p1, p2, s[p1], s[p2], m, l, s.slice(p1, p2))
    if (l === t.length) {
      while (m.get(s[p1]) === undefined) {
        p1++
      }
      if (cur.length === 0 || p2 - p1 < cur.length) {
        cur = s.slice(p1, p2)
      }
      m.set(s[p1], m.get(s[p1])! + 1)
      if (m.get(s[p1])! > 0) {
        l--
      }
      p1++
    } else if (l < t.length) {
      while (true) {
        if (p2 >= s.length) {
          return cur
        }
        if (m.get(s[p2++]) !== undefined) {
          break
        }
      }
      m.set(s[p2 - 1], m.get(s[p2 - 1])! - 1)
      if (m.get(s[p2 - 1])! >= 0) {
        l++
      }
    } else {
      throw new Error('Unreachable')
    }
  }
}
