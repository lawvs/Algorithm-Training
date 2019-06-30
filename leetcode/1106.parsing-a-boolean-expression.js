/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
  const every = (...arr) => arr.every(v => v)
  const some = (...arr) => arr.some(v => v)

  return eval(
    expression
      .replace(/f/g, 'false')
      .replace(/t/g, 'true')
      .replace(/&/g, 'every')
      .replace(/\|/g, 'some')
  )
}
