/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    const dp = new Array(S.length).fill(0).map(a => (a = new Array(2)))
    if (S[0] === '0') {
        dp[0][0] = 0
        dp[0][1] = 1
    } else {
        dp[0][0] = 1
        dp[0][1] = 0
    }
    for (let i = 1; i < dp.length; i++) {
        if (S[i] === '0') {
            dp[i][0] = dp[i - 1][0]
            dp[i][1] = Math.min(dp[i - 1][0] + 1, dp[i - 1][1] + 1)
        } else {
            dp[i][0] = dp[i - 1][0] + 1
            dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1])
        }
    }
    return Math.min(dp[dp.length - 1][0], dp[dp.length - 1][1])
}
