/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const arr = text.split(' ')
  const ret = []

  for (let i = 2; i < arr.length; i++) {
    const f = arr[i - 2]
    const s = arr[i - 1]
    if (f === first && s === second) {
      ret.push(arr[i])
    }
  }
  return ret
}
