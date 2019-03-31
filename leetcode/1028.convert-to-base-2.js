/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
  if (N === 0) return '0'
  let s = ''
  while (N) {
    let remainder = N % -2
    let t = (N - remainder) / -2
    if (remainder < 0) {
      remainder += 2
      t++
    }
    N = t
    s = remainder + s
    console.log(N, remainder, s)
  }
  return s
}
