/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let curCnt = 1
  let cur = 0
  const arr = new Array(num_people).fill(0)
  while (candies) {
    if (candies <= curCnt) {
      arr[cur] += candies
      break
    }
    arr[cur] += curCnt
    candies -= curCnt

    curCnt++
    cur++
    cur = cur % num_people
  }
  return arr
}
