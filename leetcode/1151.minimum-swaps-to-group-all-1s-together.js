/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
  const cnt = data.reduce((acc, cur) => (cur ? acc + 1 : acc), 0)
  let cur = 0
  for (let i = 0; i < cnt; i++) {
    if (data[i] === 1) {
      cur++
    }
  }
  let min = cnt - cur
  cur = min
  for (let i = cnt; i < data.length; i++) {
    data[i] === 1 && cur--
    data[i - cnt] === 1 && cur++
    min = Math.min(min, cur)
  }
  return min
}
