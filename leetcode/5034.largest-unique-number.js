/**
 * @param {number[]} A
 * @return {number}
 */
var largestUniqueNumber = function(A) {
  const m = new Map()
  A.forEach(v => m.set(v, m.get(v) + 1 || 1))
  return A.filter(v => m.get(v) === 1).sort((a, b) => b - a)[0] || -1
}
