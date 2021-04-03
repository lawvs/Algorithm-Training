/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  // console.log(coordinates)
  if (coordinates === 'a1') {
    return false
  }
  if (coordinates[0].charCodeAt() - 'a'.charCodeAt() > 0) {
    return !squareIsWhite(
      `${String.fromCharCode(coordinates[0].charCodeAt() - 1)}${coordinates[1]}`
    )
  }
  if (+coordinates[1] > 1) {
    return !squareIsWhite(`${coordinates[0]}${+coordinates[1] - 1}`)
  }
}
