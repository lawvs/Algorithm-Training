function findCircleNum(isConnected: number[][]): number {
  // DisjointSet
  const n = isConnected.length
  const root = [...Array(n).keys()]

  const findRoot = (node: number) => {
    if (root[node] === node) {
      return node
    }
    const r = findRoot(root[node])
    root[node] = r
    return r
  }

  const union = (node1: number, node2: number) => {
    const r2 = findRoot(node2)
    root[r2] = node1
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === j) {
        continue
      }
      const isLinked = isConnected[i][j]
      if (isLinked) {
        union(i, j)
      }
    }
  }

  // count
  let cnt = 0
  for (let i = 0; i < n; i++) {
    const p = root[i]
    if (p === i) {
      cnt++
    }
  }

  // console.log(root)
  return cnt
}
