/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [-1]
  let max = 0
  s.split('').forEach((c, i) => {
    switch (c) {
      case '(': {
        stack.push(i)
        return
      }
      case ')': {
        stack.pop()
        if (!stack.length) {
          stack.push(i)
          return
        }
        const top = stack[stack.length - 1]
        max = Math.max(max, i - top)
        return
      }
      default:
        throw new Error('Unreachable')
    }
  })
  return max
}

let ret
let ans

ret = longestValidParentheses('(()')
ans = 2
console.assert(ret === ans, ans, ret)

ret = longestValidParentheses(')()())')
ans = 4
console.assert(ret === ans, ans, ret)
