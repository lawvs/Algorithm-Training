/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dp = Array(s.length)
  if (s[0] === '0') {
    return 0
  }
  dp[0] = 1
  if (s.length < 2) {
    return 1
  }
  if (+(s[0] + s[1]) <= 26 && s[1] !== '0') {
    dp[1] = 2
  } else if (s[1] === '0' && +s[0] > 2) {
    return 0
  } else {
    dp[1] = 1
  }

  for (let i = 2; i < dp.length; i++) {
    // 0
    if (s[i] === '0') {
      if (s[i - 1] !== '1' && s[i - 1] !== '2') {
        return 0
      }
      dp[i] = dp[i - 2]
      continue
    }

    // 1 2 3 4 5 6 7 8 9
    const sn = +(s[i - 1] + s[i])
    const valid = sn <= 26

    if (!valid || s[i - 1] === '0') {
      dp[i] = dp[i - 1]
      continue
    }

    dp[i] = dp[i - 1] + dp[i - 2]
  }
  // console.log(dp)
  return dp[dp.length - 1]
}
