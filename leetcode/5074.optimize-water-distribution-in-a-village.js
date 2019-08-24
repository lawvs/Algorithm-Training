/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
  let cost = 0
  const wellArr = wells.map((v, i) => [0, i + 1, v])
  const arr = [...wellArr, ...pipes].sort((a, b) => a[2] - b[2])

  const disjointSet = new Array(n + 1).fill(0).map((v, i) => i)

  const findRoot = n => {
    if (disjointSet[n] === n) {
      return n
    }
    const root = findRoot(disjointSet[n])
    disjointSet[n] = root
    return root
  }

  const union = (a, b) => {
    const root1 = findRoot(a)
    const root2 = findRoot(b)
    if (root1 === root2) {
      return
    }
    const min = Math.min(root1, root2)
    const max = Math.max(root1, root2)
    disjointSet[max] = disjointSet[min]
  }

  for (const [a, b, c] of arr) {
    if (findRoot(a) === findRoot(b)) {
      continue
    }
    union(a, b)
    cost += c
  }
  return cost
}
