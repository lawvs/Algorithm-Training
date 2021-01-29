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
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  let connects = []

  for (let i = 1; i < grid.length; i++) {
    connects.push([[i - 1, 0], [i, 0], Math.max(grid[i - 1][0], grid[i][0])])
  }

  for (let j = 1; j < grid[0].length; j++) {
    connects.push([[0, j - 1], [0, j], Math.max(grid[0][j - 1], grid[0][j])])
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      connects.push([[i - 1, j], [i, j], Math.max(grid[i - 1][j], grid[i][j])])
      connects.push([[i, j - 1], [i, j], Math.max(grid[i][j - 1], grid[i][j])])
    }
  }

  // console.log(connects)
  connects = connects.sort((a, b) => a[2] - b[2])

  const uf = new DisjointSet()
  let max = 0
  const target = [grid.length - 1, grid[grid.length - 1].length - 1]
  for (const [from, to, cost] of connects) {
    if (uf.findRoot([0, 0].toString()) === uf.findRoot(target.toString())) {
      return max
    }
    uf.union(from.toString(), to.toString())
    max = Math.max(max, cost)
  }
  return max
}
