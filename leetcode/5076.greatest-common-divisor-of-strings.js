/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const s1 = str1.length < str2.length ? str1 : str2
  const s2 = str1.length < str2.length ? str2 : str1
  let x = ''
  for (let i = str1.length; i > 0; i--) {
    x = str1.slice(0, i)
    let tmp1 = s1
    let tmp2 = s2
    while (tmp1.length && tmp1.startsWith(x)) {
      tmp1 = tmp1.slice(x.length)
    }
    while (tmp2.length && tmp2.startsWith(x)) {
      tmp2 = tmp2.slice(x.length)
    }

    if (!tmp1 && !tmp2) {
      return x
    }
  }
  return ''
}
