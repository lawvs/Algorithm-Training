/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  return s
    .split('')
    .reduce((acc, cur, i) => {
      if (i % 2 === 0) acc.push(cur)
      else {
        /** @type{string} */
        const last = acc[acc.length - 1]
        acc.push(String.fromCharCode(last.charCodeAt(0) + +cur))
      }
      return acc
    }, [])
    .join('')
}
