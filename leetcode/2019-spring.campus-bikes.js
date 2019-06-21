/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
  const manhattan = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
  const map = new Map()
  const set = new Set()
  const ret = new Array(workers.length).fill(-1)

  for (let i = 0; i < workers.length; i++) {
    for (let j = 0; j < bikes.length; j++) {
      const d = manhattan(workers[i], bikes[j])
      const arr = map.get(d) || []
      arr.push([i, j])
      map.set(d, arr)
    }
  }
  const smap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]))
  // console.log(smap)
  for (let [dis, arr] of smap.entries()) {
    if (arr.length === 0) {
      throw new Error()
    }
    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i][1])) {
        continue
      }
      if (ret[arr[i][0]] !== -1) {
        continue
      }
      ret[arr[i][0]] = arr[i][1]
      set.add(arr[i][1])
    }
  }
  return ret
}
