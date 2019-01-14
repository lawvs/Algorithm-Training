// 爬楼梯
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const num = parseInt(line)
    const dp = [0, 1, 2]
    let pos = 3
    while (pos <= num) {
        dp.push(dp[pos - 1] + dp[pos - 2])
        pos++
    }
    // console.log(dp)
    return dp[pos - 1]
}

line = '5'
ret = solution(line)
ans = 8
console.assert(ret === ans, ret, ans)

line = '10'
ret = solution(line)
ans = 89
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
