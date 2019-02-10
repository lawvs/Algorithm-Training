/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  if (Y <= X) {
    return X - Y
  }
  if (Y % 2 === 1) {
    return brokenCalc(X, Y + 1) + 1
  }
  return brokenCalc(X, Y / 2) + 1
}

X = 1
Y = 1000000000
ret = brokenCalc(X, Y)
console.log(ret)
