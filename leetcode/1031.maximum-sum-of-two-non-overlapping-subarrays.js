/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  const sumA = [0]
  A.reduce((pre, cur) => {
    sumA.push(pre + cur)
    return pre + cur
  }, 0)
  const mx = Math.max(L, M)
  const mi = Math.min(L, M)
  const sumMX = new Array(sumA.length).fill(-1)
  const sumMI = new Array(sumA.length).fill(-1)
  for (let i = 0; i < sumA.length - mx; i++) {
    sumMX[i] = sumA[i + mx] - sumA[i]
  }
  for (let i = 0; i < sumA.length - mi; i++) {
    sumMI[i] = sumA[i + mi] - sumA[i]
  }

  let ret = -1
  for (let i = 0; i < sumMX.length - mx; i++) {
    let sum = -1
    for (let j = 0; j < i - mi; j++) {
      sum = sumMX[i] + sumMI[j]
      ret = Math.max(ret, sum)
    }
    for (let j = i + mx; j < sumMX.length - mi; j++) {
      sum = sumMX[i] + sumMI[j]
      ret = Math.max(ret, sum)
    }
  }

  // console.log(sumA)
  // console.log(sumMX)
  // console.log(sumMI)
  return ret
}

// A = [0, 6, 5, 2, 2, 5, 1, 9, 4]
// L = 1
// M = 2
A = [1, 0, 1]
L = 1
M = 1
ret = maxSumTwoNoOverlap(A, L, M)
console.log(ret)
