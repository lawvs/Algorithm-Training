function findShortestSubArray(nums: number[]): number {
  let maxCnt = 0
  let cntQueue: number[] = []
  const cntMap: Record<number, number> = {}
  const startMap: Record<number, number> = {}
  const endMap: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (startMap[num] === undefined) {
      startMap[num] = i
    }
    endMap[num] = i + 1
    cntMap[num] = (cntMap[num] || 0) + 1
    if (cntMap[num] > maxCnt) {
      maxCnt = cntMap[num]
      cntQueue = [num]
    } else if (cntMap[num] === maxCnt) {
      cntQueue.push(num)
    }
  }
  let minLen = Infinity
  for (const num of cntQueue) {
    minLen = Math.min(minLen, endMap[num] - startMap[num])
  }
  return minLen
}
