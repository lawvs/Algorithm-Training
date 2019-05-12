/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
  const arr = new Array(N + 1).fill(0).map(v => ({ flower: null, paths: [] }))
  paths.forEach(([x, y]) => {
    arr[x].paths.push(y)
    arr[y].paths.push(x)
  })
  arr.forEach(obj => {
    const paths = obj.paths
    const s = new Set()
    paths.forEach(p => s.add(arr[p].flower))
    for (let i = 1; i <= 5; i++) {
      if (i === 5) {
        throw new Error('Unreachable')
      }
      if (!s.has(i)) {
        obj.flower = i
        break
      }
    }
  })
  // console.log(arr)
  return arr.map(o => o.flower).slice(1)
}
