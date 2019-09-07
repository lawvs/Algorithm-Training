/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
  let sum = 0
  let pc = ''
  let l = 0
  for (let i = 0; i < S.length; i++) {
    const c = S[i]
    if (c !== pc) {
      pc = c
      l = 1
    } else {
      l++
    }
    sum += l
  }
  return sum
}
