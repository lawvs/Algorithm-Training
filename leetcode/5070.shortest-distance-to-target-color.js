/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function(colors, queries) {
  const MAGIC = 1e9
  const arr = new Array(colors.length)
    .fill(0)
    .map(() => [-1, MAGIC, MAGIC, MAGIC])

  let dist = [-1, MAGIC, MAGIC, MAGIC]

  for (let i = 0; i < colors.length; i++) {
    const c = colors[i]
    for (let j = 1; j <= 3; j++) {
      dist[j] = dist[j] + 1
    }
    dist[c] = 0
    for (let j = 1; j <= 3; j++) {
      arr[i][j] = Math.min(arr[i][j], dist[j])
    }
  }
  // console.log(arr)

  // dist = [-1, MAGIC, MAGIC, MAGIC] // reset
  // reverse
  for (let i = colors.length - 1; i >= 0; i--) {
    const c = colors[i]
    for (let j = 1; j <= 3; j++) {
      dist[j] = dist[j] + 1
    }
    dist[c] = 0
    for (let j = 1; j <= 3; j++) {
      arr[i][j] = Math.min(arr[i][j], dist[j])
    }
  }

  return queries.map(([index, color]) =>
    arr[index][color] === MAGIC ? -1 : arr[index][color]
  )
}
