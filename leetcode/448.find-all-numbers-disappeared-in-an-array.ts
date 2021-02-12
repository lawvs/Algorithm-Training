function findDisappearedNumbers(nums: number[]): number[] {
  const map: Record<number, true> = {}
  for (const num of nums) {
    map[num] = true
  }
  const ans = []
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      ans.push(i)
    }
  }
  return ans
}
