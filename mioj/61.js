// 找出矩阵中相同的行
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // please write your code here
  const array = line.split(';')
  const m = new Map()
  for (let i = 0; i < array.length; i++) {
    if (m.get(array[i])) {
      return `${m.get(array[i])},${i + 1}`
    }
    m.set(array[i], i + 1)
  }
  // return 'your_answer'
}

line = '1,1;1,1'
ans = '1,2'
ret = solution(line)

console.assert(ret === ans, ret, ans)
