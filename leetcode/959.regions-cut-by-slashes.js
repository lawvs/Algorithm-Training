class DisjointSet {
  constructor(n) {
    this.DEFAULT_VALUE = Symbol()
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
    const rootA = this.findRoot(a)
    const rootB = this.findRoot(b)
    if (rootA === rootB) {
      return rootA
    }
    this.map.set(rootB, rootA)
    return rootA
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
    return cnt
  }
}

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  // z up left down right
  const convert2Key = (x, y, z) => `${x},${y},${z}`
  const uf = new DisjointSet()
  for (let i = 0; i < grid.length; i++) {
    const s = grid[i]
    s.split('').forEach((c, j) => {
      switch (c) {
        case ' ':
          uf.union(convert2Key(i, j, 0), convert2Key(i, j, 1))
          uf.union(convert2Key(i, j, 0), convert2Key(i, j, 2))
          uf.union(convert2Key(i, j, 0), convert2Key(i, j, 3))
          break
        case '/':
          uf.union(convert2Key(i, j, 0), convert2Key(i, j, 1))
          uf.union(convert2Key(i, j, 2), convert2Key(i, j, 3))
          break
        case '\\':
          uf.union(convert2Key(i, j, 0), convert2Key(i, j, 3))
          uf.union(convert2Key(i, j, 1), convert2Key(i, j, 2))
          break
        default:
          throw Error('Unreachable')
      }
      if (i > 0) {
        uf.union(convert2Key(i, j, 0), convert2Key(i - 1, j, 2))
      }
      if (j > 0) {
        uf.union(convert2Key(i, j, 1), convert2Key(i, j - 1, 3))
      }
    })
  }
  return uf.count()
}
