/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let sum = 0
  let cnt = 0
  const m = new Map()
  m.set(0, 1)
  A.forEach(n => {
    sum = (sum + n) % K
    sum < 0 && (sum += K)
    if (m.has(sum)) {
      cnt += m.get(sum)
      m.set(sum, m.get(sum) + 1)
    } else {
      m.set(sum, 1)
    }
  })
  return cnt
}

A = [4, 5, 0, -2, -3, 1]
K = 5
ret = subarraysDivByK(A, K)
console.log(ret) // 7

A = [0, 0, 0]
K = 5
ret = subarraysDivByK(A, K)
console.log(ret) // 6

A = [-1, 2, 9]
K = 2
ret = subarraysDivByK(A, K)
console.log(ret) // 2
