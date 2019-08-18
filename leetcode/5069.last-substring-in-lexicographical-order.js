/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
  let str = s
  for (let i = 1; i < s.length; i++) {
    // console.log(s.slice(i), str)
    const sub = s.slice(i)
    str = str > sub ? str : sub
  }
  return str
}
