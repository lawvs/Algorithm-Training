/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  s = Array.from(
    new Set(
      s
        .split('')
        .filter((i) => /[0-9]/.test(i))
        .map((i) => +i)
    ).keys()
  ).sort((a, b) => b - a)
  if (s.length >= 2) {
    return s[1]
  }
  return -1
}
