// Wi-Fi 部署
// https://code.mi.com/problem/list/view?id=97&cid=1

/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line.split(';')
    const [A, B] = arr[0].split(' ').map(s => parseInt(s))
    const s = arr[1]
        .split(' ')
        .map(s => parseInt(s))
        .sort((x, y) => x - y)
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return A
    }
    // console.log(A, B, s) // debug
    const dp = new Array(s.length)
    // init
    dp[0] = A
    for (let i = 1; i < dp.length; i++) {
        dp[i] = Math.min(dp[i - 1] + A, dp[i - 1] + ((s[i] - s[i - 1]) * B) / 2)
    }
    // console.log(dp) // debug
    return dp.slice(-1)[0].toFixed(1)
}

line = '20 5;100 0 7'
ans = solution(line)
console.log(ans)

line = '702 626;65098 84355 39226 94653 67498 49319 51022 80722 28539 12572'
ans = solution(line)
console.log(ans)
