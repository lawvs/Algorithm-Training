/**
 * @param {string} workers
 * @param {string} bikes
 * @return {number}
 */
function shortestWayToFormString(source, target) {
  let index = 0
  let cnt = 0
  while (index < target.length) {
    const preIndex = index
    for (let i = 0; i < source.length; i++) {
      if (index >= target.length) {
        break
      }
      if (target[index] === source[i]) {
        index++
      }
    }
    if (preIndex === index) {
      return -1
    }
    cnt++
  }
  return cnt
}
