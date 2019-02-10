// DisjointSet
class DisjointSet {
  constructor() {
    this.map = new Map()
  }

  findRoot(n) {
    if (!this.map.has(n)) {
      this.map.set(n, n)
      return n
    }
    if (this.map.get(n) === n) {
      return n
    }
    const parent = this.findRoot(this.map.get(n))
    this.map.set(n, parent)
    return parent
  }

  union(a, b) {
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
    this.map.forEach(v => {
      if (v === this.DEFAULT_VALUE) {
        cnt++
      }
    })
    // console.log(cnt)
    return cnt
  }
}

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  console.log = () => {}
  const disjointSet = new DisjointSet()
  equations.sort((a, b) => (a[1] === '=' ? -1 : 1))
  console.log(equations)
  for (const eq of equations) {
    if (eq[0] === eq[3]) {
      if (eq[1] === '=') {
        continue
      }
      if (eq[1] === '!') {
        console.log('a!=a false!')
        return false
      }
      throw new Error() // Unreachable
    }
    const v1 = eq[0]
    const v2 = eq[3]
    const sy = eq[1]
    const root1 = disjointSet.findRoot(v1)
    const root2 = disjointSet.findRoot(v2)
    if (sy === '=') {
      disjointSet.union(v1, v2)
    }
    if (sy === '!') {
      if (root1 === root2) {
        console.log('!== && root1 === root2 false!')
        return false
      }
    }
  }
  return true
}

equations = [
  'k==j',
  'g==e',
  'h==d',
  'j==e',
  'k==a',
  'i==h',
  'h!=e',
  'i!=f',
  'i!=c'
]
ret = equationsPossible(equations)
console.log(ret)
