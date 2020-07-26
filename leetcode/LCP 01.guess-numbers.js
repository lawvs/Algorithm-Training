/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  return guess.filter((v, i) => v === answer[i]).length
}
