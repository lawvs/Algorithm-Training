/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  if (N === 0) {
    return 1
  }
  let reduce = ''
  while (N > 0) {
    const re = N % 2
    N = N >> 1
    reduce = re ? '0' + reduce : '1' + reduce
  }
  console.log(reduce)
  return parseInt(reduce, 2)
}
