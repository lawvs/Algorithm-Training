/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  return Math.round(Math.sqrt(num)) ** 2 === num
}

/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function(A) {
  let cnt = 0
  const m = new Map()
  for (const it of A) {
    m.set(it, (m.get(it) || 0) + 1)
  }
  // console.log(m)

  /**
   * @param {number[]} arr
   */
  const dfs = arr => {
    if (arr.length === A.length) {
      // console.log(arr)
      cnt++
      return
    }
    const last = arr[arr.length - 1]
    for (var [k, v] of m.entries()) {
      if (v <= 0) {
        continue
      }
      if (!isPerfectSquare(last + k)) {
        continue
      }
      m.set(k, v - 1)
      dfs([...arr, k])
      m.set(k, v)
    }
  }

  for (var [k, v] of m.entries()) {
    m.set(k, v - 1)
    dfs([k])
    m.set(k, v)
  }
  return cnt
}
