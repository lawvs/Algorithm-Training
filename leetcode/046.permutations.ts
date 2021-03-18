function permute(nums: number[]): number[][] {
  const ans = [] as number[][]
  const helper = (first = 0) => {
    if (first === nums.length - 1) {
      ans.push([...nums])
      return
    }
    for (let i = first; i < nums.length; i++) {
      ;[nums[first], nums[i]] = [nums[i], nums[first]]
      helper(first + 1)
      ;[nums[first], nums[i]] = [nums[i], nums[first]]
    }
  }
  helper()
  return ans
}
