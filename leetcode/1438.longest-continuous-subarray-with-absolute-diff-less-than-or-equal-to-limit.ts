function longestSubarray(nums: number[], limit: number): number {
  let ascQueue = [nums[0]]
  let descQueue = [nums[0]]
  let left = 0
  let right = 1
  let ans = 1
  while (right < nums.length) {
    while (ascQueue.length && nums[right] < ascQueue[ascQueue.length - 1]) {
      ascQueue.pop()
    }
    while (descQueue.length && nums[right] > descQueue[descQueue.length - 1]) {
      descQueue.pop()
    }
    ascQueue.push(nums[right])
    descQueue.push(nums[right])
    while (descQueue[0] - ascQueue[0] > limit) {
      if (descQueue[0] === nums[left]) {
        descQueue.shift()
      }
      if (ascQueue[0] === nums[left]) {
        ascQueue.shift()
      }
      left++
    }
    right++
    ans = Math.max(ans, right - left)
    // console.log(ascQueue, descQueue, ans)
  }
  return ans
}
