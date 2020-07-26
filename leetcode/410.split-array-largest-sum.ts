function splitArray(nums: number[], m: number): number {
  let l = -1
  let r = nums.reduce((acc, cur) => {
    l = Math.max(l, cur)
    return acc + cur
  }, 0)

  // Binary search
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    // console.log(l, r, mid)
    let cur = 1
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
      if (sum > mid) {
        sum = nums[i]
        cur++
        if (cur > m) {
          l = mid + 1
          break
        }
      }
    }
    if (cur <= m) {
      r = mid
    }
  }

  return l
}
