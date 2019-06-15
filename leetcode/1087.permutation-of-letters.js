/**
 * @param {string} S
 * @return {string[]}
 */
var permute = function(S) {
  const arr = []
  const f = (s1, s2) => {
    if (!s2.includes('{')) {
      arr.push(s1 + s2)
      return
    }
    const prefix = s2.slice(0, s2.indexOf('{'))
    const mid = s2
      .slice(s2.indexOf('{') + 1, s2.indexOf('}'))
      .split(',')
      .sort()
    const suffix = s2.slice(s2.indexOf('}') + 1)
    // console.log(s2, prefix, mid, suffix)
    for (const c of mid) {
      f(s1 + prefix, c + suffix)
    }
  }

  f('', S)
  return arr
}
