/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let ans = numBottles
  while (numBottles >= numExchange) {
    numBottles -= numExchange - 1
    ans++
  }
  return ans
}
