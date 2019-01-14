// 抢劫！
// dp
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line.split(',').map(s => parseInt(s))
    const l = arr.length
    if (l === 1) {
        return arr[0]
    }
    if (l === 2) {
        return Math.max(arr[0], arr[1])
    }
    const dp = [arr[0], Math.max(arr[0], arr[1])]
    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
    }
    // console.log(dp)
    return dp[l - 1]
}

line = '1,2'
ret = solution(line)
ans = 2
console.assert(ret === ans, ret, ans)

line = '100,2,3,4'
ret = solution(line)
ans = 104
console.assert(ret === ans, ret, ans)

line =
    '45,63,38,22,36,31,54,72,59,59,3,87,46,35,54,32,74,50,43,22,1,85,61,94,6,3,95,11,27,74,79,15,74,85,89,44,9,82,10,78,78,90,46,13,43,96,68,54,66'
ret = solution(line)
ans = 1478
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
