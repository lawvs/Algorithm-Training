/**
 * @param {string} S
 * @return {number}
 */
var longestRepeatingSubstring = function(S) {
  let max = 0
  const set = new Set()
  for (let i = S.length - 1; i > 0; i--) {
    for (let j = 0; j + i - 1 < S.length; j++) {
      const sub = S.slice(j, j + i)
      // console.log(sub)
      if (set.has(sub)) {
        return sub.length
      }
      set.add(sub)
    }
  }
  return 0
}
