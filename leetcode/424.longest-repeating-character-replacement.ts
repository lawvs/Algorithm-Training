function characterReplacement(s: string, k: number): number {
  let max = 0
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    const curChar = String.fromCharCode(i)
    let curCnt = 0
    let curStart = 0
    for (let j = 0; j < s.length; j++) {
      const c = s[j]
      if (curChar === c) {
        continue
      }
      if (curCnt < k) {
        curCnt++
        continue
      }
      max = Math.max(max, j - curStart)
      while (s[curStart] === curChar && curStart < j) {
        curStart++
      }
      curStart++
    }
    max = Math.max(max, s.length - curStart)
  }
  return max
}
