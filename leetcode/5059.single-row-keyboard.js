/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let p = 0
  let dist = 0
  const keyboardArr = keyboard.split('')
  for (const ci in word) {
    const c = word[ci]
    const i = keyboardArr.findIndex(i => i === c)
    const d = Math.abs(i - p)
    dist += d
    p = i
  }
  return dist
}
