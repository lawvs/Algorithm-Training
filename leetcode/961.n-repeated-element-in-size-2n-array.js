/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const arr = new Array(10000).fill(0)
  A.forEach(v => arr[v]++)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === A.length / 2) {
      return i
    }
  }
}
