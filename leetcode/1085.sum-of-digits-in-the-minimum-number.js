/**
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function(A) {
  return (A.sort((a, b) => a - b)[0] + '')
    .split('')
    .map(c => +c)
    .reduce((pre, cur) => pre + cur) %
    2 ===
    1
    ? 0
    : 1
}
