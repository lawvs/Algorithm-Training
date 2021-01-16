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

class UnionFind {
  constructor(n) {
    this.father = new Array(n).fill(0).map((element, index) => index)
    this.sz = new Array(n).fill(1)
  }

  find(x) {
    if (this.father[x] === x) {
      return x
    }
    const newF = this.find(this.father[x])
    this.father[x] = newF
    return this.father[x]
  }

  merge(x, y) {
    const fx = this.find(x)
    const fy = this.find(y)
    if (fx === fy) {
      return
    }
    this.father[fx] = fy
    this.sz[fy] += this.sz[fx]
  }

  size(x) {
    return this.sz[this.find(x)]
  }
}
