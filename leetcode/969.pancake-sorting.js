/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  seq = []
  pos = A.length
  while (pos > 0) {
    max = A[0]
    maxPos = 0
    for (let i = 1; i < pos; i++) {
      if (A[i] > max) {
        maxPos = i
        max = A[i]
      }
    }
    A = [...A.slice(0, maxPos + 1).reverse(), ...A.slice(maxPos + 1)]
    A = [...A.slice(0, pos).reverse(), ...A.slice(pos)]
    seq.push(maxPos + 1, pos--)
  }
  //   console.log('A ', A) // debug
  return seq
}

A = [3, 2, 4, 1]
ret = pancakeSort(A)
console.log(ret)

A = [1, 2, 3]
ret = pancakeSort(A)
console.log(ret)
