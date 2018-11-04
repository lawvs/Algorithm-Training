/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
    const MAGIC = 1e9 + 7
    // 1 -> 6 8
    // 2 -> 7 9
    // 3 -> 4 8
    // 4 -> 3 9 0
    // 5 ×
    // 6 -> 1 7 0
    // 7 -> 2 6
    // 8 -> 1 3
    // 9 -> 2 4
    // 0 -> 4 6

    // 1 -> 10
    // 2 -> 7 * 2 + 2 * 3
    // 3 ->
    let dp = Array(10).fill(1)
    let newdp

    // console.log(dp)
    while (N > 1) {
        newdp = Array(10).fill(0)
        newdp[0] = dp[4] + dp[6]
        newdp[1] = dp[6] + dp[8]
        newdp[2] = dp[7] + dp[9]
        newdp[3] = dp[4] + dp[8]
        newdp[4] = dp[3] + dp[9] + dp[0]
        newdp[6] = dp[1] + dp[7] + dp[0]
        newdp[7] = dp[2] + dp[6]
        newdp[8] = dp[1] + dp[3]
        newdp[9] = dp[2] + dp[4]

        const tmp = dp
        dp = newdp
        newdp = tmp
        for (let i = 0; i < dp.length; i++) {
            dp[i] %= MAGIC
        }
        // console.log(dp)
        N--
    }
    // console.log(dp)
    return dp.reduce((pre, cur) => (pre + cur) % MAGIC, 0)
}
