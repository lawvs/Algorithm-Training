/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  if (N === 1) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  if (K === 0) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
      for (let i = 1; i < N; i++) {
        const q = n % 10
        n = n * 10 + q
      }
      return n
    })
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let newArr = []
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < arr.length; j++) {
      const n = arr[j]
      const q = n % 10
      if (q + K < 10) {
        newArr.push(n * 10 + q + K)
      }
      if (q - K >= 0) {
        newArr.push(n * 10 + q - K)
      }
    }
    arr = newArr
    newArr = []
  }
  return arr
}

N = 3
K = 7
ret = numsSameConsecDiff(N, K)
console.log(ret)
