function findMaxConsecutiveOnes(nums: number[]): number {
  return nums
    .join('')
    .split('0')
    .filter((i) => i)
    .reduce((pre, cur) => Math.max(pre, cur.length), 0)
}
