function trap(height: number[]): number {
  let cnt = 0
  let max = 0
  let max2 = 0
  for (const h of height) {
    if (h > max) {
      max2 = max
      max = h
    } else if (h > max2) {
      max2 = h
    }
  }
  for (let i = 1; i <= max2; i++) {
    let left = false
    let curCnt = 0
    for (const h of height) {
      if (!left) {
        if (h >= i) {
          left = true
        }
        continue
      }
      if (h < i) {
        curCnt++
      } else {
        cnt += curCnt
        curCnt = 0
      }
    }
  }
  return cnt
}
