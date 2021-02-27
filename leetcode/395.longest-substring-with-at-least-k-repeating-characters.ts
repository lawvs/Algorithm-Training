function longestSubstring(s: string, k: number): number {
  if (k > s.length) {
    return 0
  }
  const cntMap: Record<string, number> = {}
  s.split('').forEach((c) => {
    cntMap[c] = (cntMap[c] || 0) + 1
  })

  let strArr = [s]
  let flag = true
  for (const key in cntMap) {
    const cnt = cntMap[key]
    if (cnt < k) {
      flag = false
      strArr = strArr.flatMap((s) => s.split(key))
    }
  }
  if (flag) {
    return s.length
  }
  return Math.max(...strArr.map((s) => longestSubstring(s, k)))
}
