/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
  const count = {}
  for (const c of text) {
    if (!count[c]) {
      count[c] = 0
    }
    count[c]++
  }
  // console.log(count)

  let max = 1
  for (k in count) {
    if (count[k] === 1) {
      continue
    }
    let start = -1
    let flag = -1
    for (let j = 0; j < text.length; j++) {
      const c = text[j]
      if (c !== k) {
        start = flag
        flag = j
      }
      max = Math.max(max, Math.min(count[k], j - start))
    }
  }
  return max
}
