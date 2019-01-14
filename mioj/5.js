// 找出旋转有序数列的中间值
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // please write your code here
  const arr = line
    .split(',')
    .map(s => parseInt(s))
    .sort((a, b) => a - b)
  return arr[Math.floor(arr.length / 2)]
  // return 'your_answer'
}

line = '1'
ans = 1
ret = solution(line)
console.assert(ret === ans, ret, ans)

line = '1,2,3'
ans = 2
ret = solution(line)
console.assert(ret === ans, ret, ans)

line = '12,13,14,5,6,7,8,9,10'
ans = 9
ret = solution(line)
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
