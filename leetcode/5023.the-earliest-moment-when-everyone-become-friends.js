/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 */
var earliestAcq = function(logs, N) {
  logs = logs.sort((a, b) => a[0] - b[0])
  const arr = new Array(N).fill(0).map((v, i) => [i, new Set([i])])
  // DisjointSet
  const findR = n => (n === arr[n][0] ? n : findR(arr[n][0]))

  for (const [t, a, b] of logs) {
    const ra = findR(a)
    const rb = findR(b)
    if (ra === rb) continue

    arr[ra] = [ra, new Set([...arr[ra][1], ...arr[rb][1]])]
    arr[rb] = [ra, null]
    if (arr[ra][1].size === N) {
      return t
    }
  }
  return -1
}
