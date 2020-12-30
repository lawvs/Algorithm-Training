function eraseOverlapIntervals(intervals: number[][]): number {
  intervals = intervals.sort(([x], [y]) => x - y)
  let cnt = 0
  let curEnd = -Infinity
  for (const [start, end] of intervals) {
    if (curEnd > start) {
      cnt++
      curEnd = Math.min(curEnd, end)
    } else {
      curEnd = end
    }
  }
  return cnt
}
