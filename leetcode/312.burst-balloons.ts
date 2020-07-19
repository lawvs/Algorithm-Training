function maxCoins(nums: number[]): number {
  const m: Record<string, number> = {}

  const dfs = (start: number, end: number): number => {
    const k = start + '+' + end
    if (m[k] !== undefined) {
      return m[k]
    }

    if (start > end) {
      return 0
    }
    let cnt = 0
    for (let mid = start; mid <= end; mid++) {
      cnt = Math.max(
        cnt,
        dfs(start, mid - 1) +
          nums[start - 1] * nums[mid] * nums[end + 1] +
          dfs(mid + 1, end)
      )
    }
    m[k] = cnt
    // console.log(start, end, cnt)
    return cnt
  }
  nums.push(1)
  nums.unshift(1)
  return dfs(1, nums.length - 2)
}
