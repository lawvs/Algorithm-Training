/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const s = new Set(days)
  const arr = new Array(366)
  arr[0] = 0
  for (let i = 1; i < arr.length; i++) {
    if (!s.has(i)) {
      arr[i] = arr[i - 1]
      continue
    }
    arr[i] = Math.min(
      arr[i - 1] + costs[0],
      i - 7 >= 1 ? arr[i - 7] + costs[1] : costs[1],
      i - 30 >= 1 ? arr[i - 30] + costs[2] : costs[2]
    )
  }
  return arr[365]
}

days = [1, 4, 6, 7, 8, 20]
costs = [2, 7, 15]
ans = 11
ret = mincostTickets(days, costs)
console.assert(ans === ret, 'expected', ans, 'but', ret)

days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]
costs = [2, 7, 15]
ans = 17
ret = mincostTickets(days, costs)
console.assert(ans === ret, 'expected', ans, 'but', ret)

days = [1, 2, 3, 4, 6, 8, 9, 10, 13, 14, 16, 17, 19, 21, 24, 26, 27, 28, 29]
costs = [3, 14, 50]
ans = 50
ret = mincostTickets(days, costs)
console.assert(ans === ret, 'expected', ans, 'but', ret)

days = [1, 4, 6, 7, 8, 20]
costs = [2, 7, 15]
ans = 11
ret = mincostTickets(days, costs)
console.assert(ans === ret, 'expected', ans, 'but', ret)

days = [1, 4, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 27, 28]
costs = [3, 13, 45]
ans = 44
ret = mincostTickets(days, costs)
console.assert(ans === ret, 'expected', ans, 'but', ret)

console.log('All test cases passed.')
