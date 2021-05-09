function minDays(bloomDay: number[], m: number, k: number): number {
  const isNDayCanMake = (n: number): boolean => {
    let bouquetCnt = 0
    let adjacent = 0
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= n) adjacent++
      else adjacent = 0
      if (adjacent >= k) {
        adjacent = 0
        bouquetCnt++
        if (bouquetCnt >= m) {
          return true
        }
      }
    }
    return false
  }

  const [min, max] = bloomDay.reduce(
    ([min, max], cur) => {
      if (cur > max) {
        max = cur
      } else if (cur < min) {
        min = cur
      }
      return [min, max]
    },
    [+Infinity, -Infinity]
  )

  if (!isNDayCanMake(max)) return -1

  let left = min
  let right = max
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (isNDayCanMake(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
