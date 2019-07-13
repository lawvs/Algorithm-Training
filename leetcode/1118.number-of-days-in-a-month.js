/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
var numberOfDays = function(Y, M) {
  return new Date(Y, M, 0).getDate()
}
