/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  const ret = []
  A.reduce((pre, cur) => {
    ;(pre * 2 + cur) % 5 === 0 ? ret.push(true) : ret.push(false)
    return (pre * 2 + cur) % 5
  }, 0)
  return ret
}
