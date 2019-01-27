/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  if (A.length === 1) {
    return 1
  }
  let maxl = 1
  let start = 0
  for (let i = 1; i < A.length; i++) {
    ind = i - 1
    if (ind % 2 === 0) {
      if (A[ind] >= A[ind + 1]) {
        maxl = Math.max(maxl, i - start)
        start = i
        continue
      }
    }
    if (ind % 2 === 1) {
      if (A[ind] <= A[ind + 1]) {
        maxl = Math.max(maxl, i - start)
        start = i
        continue
      }
    }
  }
  maxl = Math.max(maxl, A.length - start)
  //   console.log(maxl)
  start = 0
  for (let i = 1; i < A.length; i++) {
    ind = i - 1
    if (ind % 2 === 1) {
      if (A[ind] >= A[ind + 1]) {
        maxl = Math.max(maxl, i - start)
        start = i
        continue
      }
    }
    if (ind % 2 === 0) {
      if (A[ind] <= A[ind + 1]) {
        maxl = Math.max(maxl, i - start)
        start = i
        continue
      }
    }
  }
  maxl = Math.max(maxl, A.length - start)
  return maxl
}

A = [0, 8, 45, 88, 48, 68, 28, 55, 17, 24]
ret = maxTurbulenceSize(A)
console.log(ret)
