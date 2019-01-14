// 四则运算
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // please write your code here
  const arr = line.split(' ')
  const stack = []
  const sp = arr.reduce((acc, cur) => {
    const top = acc.slice(-1)[0]
    switch (top) {
      case '*': {
        acc.pop()
        const n = acc.pop()
        const c = parseInt(cur) * parseInt(n)
        acc.push(c)
        return acc
      }
      case '/': {
        acc.pop()
        const n = acc.pop()
        const c = Math.floor(parseInt(n) / parseInt(cur))
        acc.push(c)
        return acc
      }
      default: {
        acc.push(cur)
        return acc
      }
    }
  }, [])
  const ret = new Function('return ' + sp.join(''))()
  if (ret === Infinity || ret === -Infinity) {
    return 'err'
  }
  return ret.toString()
  // return 'your_answer'
}

line = '3 + 5'
ans = '8'
ret = solution(line)
console.assert(ret === ans, ret, ans)

line = '12 + 45 / 9'
ans = '17'
ret = solution(line)
console.assert(ret === ans, ret, ans)

line = '1 / 2'
ans = '0'
ret = solution(line)
console.assert(ret === ans, ret, ans)

line = '1 / 0'
ans = 'err'
ret = solution(line)
console.assert(ret === ans, ret, ans)

line = '12 + 34 * 56 - 78'
ans = '1838'
ret = solution(line)
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
