function largestNumber(nums: number[]): string {
  const ans = nums
    .sort((a, b) => {
      const as = a.toString()
      const bs = b.toString()
      if (+(bs + as) > +(as + bs)) {
        return 1
      } else if (+(bs + as) < +(as + bs)) {
        return -1
      }

      return bs.length < as.length ? 1 : -1
    })
    .join('')
  if (ans.startsWith('0')) {
    return '0'
  }
  return ans
}
