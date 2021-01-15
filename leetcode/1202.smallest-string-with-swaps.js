class DisjointSet {
  constructor(n) {
    this.DEFAULT_VALUE = Number.MIN_VALUE
    this.map = new Map()
  }

  findRoot(n) {
    if (!this.map.has(n)) {
      this.map.set(n, this.DEFAULT_VALUE)
    }
    if (this.map.get(n) === this.DEFAULT_VALUE) {
      return n
    }
    const parent = this.findRoot(this.map.get(n))
    this.map.set(n, parent)
    return parent
  }

  union(a, b) {
    if (!this.map.has(a)) {
      this.map.set(a, this.DEFAULT_VALUE)
    }
    if (!this.map.has(b)) {
      this.map.set(b, this.DEFAULT_VALUE)
    }
    const roota = this.findRoot(a)
    const rootb = this.findRoot(b)
    if (roota === rootb) {
      return roota
    }
    this.map.set(rootb, roota)
    return roota
  }

  /**
   * @returns {number}
   */
  count() {
    let cnt = 0
    this.map.forEach((v) => {
      if (v === this.DEFAULT_VALUE) {
        cnt++
      }
    })
    // console.log(cnt)
    return cnt
  }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const djs = new DisjointSet(s.length)

  for (const [a, b] of pairs) {
    djs.union(a, b)
  }

  const sm = {}
  for (let i = 0; i < s.length; i++) {
    const r = djs.findRoot(i)
    const c = s[i]
    if (!sm[r]) {
      sm[r] = []
    }
    sm[r].push(c)
  }
  // console.log(sm)

  for (const key of Object.keys(sm)) {
    sm[key] = sm[key].sort((a, b) => a.charCodeAt() - b.charCodeAt())
  }
  // console.log(sm)

  ans = ''
  for (let i = 0; i < s.length; i++) {
    ans += sm[djs.findRoot(i)].shift()
  }
  return ans
}
