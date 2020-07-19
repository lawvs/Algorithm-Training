/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  // TLE
  const tree = Array(n)
    .fill(0)
    .map(() => [])

  edges.forEach(([f, t]) => {
    tree[f].push(t)
    tree[t].push(f)
  })

  const ans = Array(n)
  const dfs = (i, p) => {
    const l = { [labels[i]]: 1 }
    for (let j = 0; j < tree[i].length; j++) {
      const child = tree[i][j]
      if (child === p) {
        continue
      }
      const lc = dfs(child, i)
      Object.keys(lc).forEach((k) => (l[k] = (l[k] || 0) + lc[k]))
    }
    ans[i] = l[labels[i]]
    return l
  }

  dfs(0)
  return ans
}
