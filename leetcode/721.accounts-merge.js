class DisjointSet {
  constructor(n) {
    this.DEFAULT_VALUE = Symbol()
    this.map = new Map()
    this.nameMap = {}
    this.group = {}
    this.rootKey = []
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

  union(name, a, b) {
    const rootA = this.findRoot(a)
    const rootB = this.findRoot(b)
    if (rootA === rootB) {
      this.nameMap[rootA] = name
      return rootA
    }
    this.map.set(rootB, rootA)
    // set name
    this.nameMap[rootA] = name
    return rootA
  }

  findName(n) {
    const root = this.findRoot(n)
    return this.nameMap[root]
  }

  collectEmail() {
    this.map.forEach((v, k) => {
      if (v === this.DEFAULT_VALUE) {
        this.rootKey.push(k)
      }
      const root = this.findRoot(k)
      if (!this.group[root]) {
        this.group[root] = []
      }
      this.group[root].push(k)
    })
  }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const djs = new DisjointSet()
  for (const [name, ...emails] of accounts) {
    for (const email of emails) djs.union(name, emails[0], email)
  }
  djs.collectEmail()
  // console.log(djs.map)
  // console.log(djs.nameMap)
  // console.log(djs.rootKey)
  const ans = []
  for (const root of djs.rootKey) {
    ans.push([djs.findName(root), ...djs.group[root].sort()])
  }
  return ans
}
