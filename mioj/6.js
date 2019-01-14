/**
 * 交叉队列
 * #dp
 */

/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // please write your code here
  const [s1, s2, s3] = line.split(',').map(s => s.split(''))
  if (s1.length + s2.length !== s3.length) {
    return false
  }
  if (s1[0] !== s3[0] && s2[0] !== s3[0]) {
    return false
  }
  const dp = new Array(s1.length + 1)
    .fill(0)
    .map(n => new Array(s2.length + 1).fill(false))

  dp[0][0] = true
  let tmp = 1
  while (s1[tmp - 1] === s3[tmp - 1]) {
    dp[tmp][0] = true
    tmp++
  }
  tmp = 1
  while (s2[tmp - 1] === s3[tmp - 1]) {
    dp[0][tmp] = true
    tmp++
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      // s1
      if (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1]) {
        dp[i][j] = true
      }
      // s2
      if (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]) {
        dp[i][j] = true
      }
    }
  }
  return dp[s1.length][s2.length]
  // return 'your_answer'
}

testCases = [
  {
    line: 'aabcc,dbbca,aadbbcbcac',
    ans: true
  },
  {
    line: 'aabcc,dbbca,aadbbbaccc',
    ans: false
  },
  {
    line: 'a,b,ab',
    ans: true
  },
  {
    line: 'a,b,ba',
    ans: true
  },
  {
    line: 'a,b,ac',
    ans: false
  },
  {
    line: 'abc,bca,bcaabc',
    ans: true
  },
  {
    line: 'abc,bca,aabbcc',
    ans: false
  },
  {
    line: 'dbbca,aabcc,aadbbcbcac',
    ans: true
  }
]

testCases.map(({ line, ans }, i) => {
  ret = solution(line)
  console.assert(
    ret === ans,
    `in case ${i} '${line}' expected ${ans} but ${ret}`
  )
})

console.log('All test cases passed.')
