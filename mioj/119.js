// 小米兔跳格子
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // please write your code here
  const arr = line.split(' ').map(s => parseInt(s))
  const n = arr.length
  const dp = new Array(n).fill(false)
  dp[0] = true
  for (let i = 0; i < arr.length; i++) {
    if (!dp[i]) {
      return false
    }
    for (let j = i + 1; j <= i + arr[i]; j++) {
      dp[j] = true
    }
  }
  return true
  // return 'your_answer'
}

line = '2 0 1 0 0 3 4'
ans = false
ret = solution(line)
console.assert(ret === ans, ret, ans)
