function equalSubstring(s: string, t: string, maxCost: number): number {
  let start = 0
  let end = 0
  let curCost = 0
  let max = 0
  while (end < s.length) {
    curCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end))
    end++
    while (curCost > maxCost) {
      curCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start))
      start++
    }
    // console.log(start, end, curCost, max)
    max = Math.max(max, end - start)
  }
  return max
}
