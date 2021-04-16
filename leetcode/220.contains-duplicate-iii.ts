function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number
): boolean {
  const toKey = (n: number) => Math.floor(n / (t + 1))
  const m: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    const key = toKey(nums[i])
    if (m[key] != null) {
      return true
    }
    if (m[key - 1] != null && Math.abs(m[key - 1] - nums[i]) <= t) {
      return true
    }
    if (m[key + 1] != null && Math.abs(m[key + 1] - nums[i]) <= t) {
      return true
    }

    m[key] = nums[i]
    if (i >= k) {
      m[toKey(nums[i - k])] = null
    }
  }
  return false
}
