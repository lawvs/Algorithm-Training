/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  let ans = 0
  const arr = [[0, A[0]]]
  for (let i = 1; i < A.length; i++) {
    if (A[i] < arr[arr.length - 1][1]) {
      arr.push([i, A[i]])
      continue
    }
    let t = i
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j][1] > A[i]) {
        break
      }
      t = arr[j][0]
    }
    ans = Math.max(ans, i - t)
  }
  return ans
}

A = [6, 0, 8, 2, 1, 5]
ret = maxWidthRamp(A)
console.log(ret)
