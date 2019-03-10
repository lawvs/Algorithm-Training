/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
  const arr = []
  let sum = 0
  let stat = '*'
  let cur = N
  for (let i = cur - 1; i >= 1; i--) {
    switch (stat) {
      case '*':
        cur = cur * i
        stat = '/'
        break
      case '/':
        cur = Math.floor(cur / i)
        stat = '+'
        break
      case '+':
        sum += i
        stat = '-'
        break
      case '-':
        arr.push(cur)
        cur = i
        stat = '*'
        break
      default:
        break
    }
  }
  arr.push(cur)
  // console.log(arr)

  sum += arr.reduce((acc, cur) => acc - cur)
  return sum
}
