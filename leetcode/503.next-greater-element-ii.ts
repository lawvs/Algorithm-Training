function nextGreaterElements(nums: number[]): number[] {
  let max = -Infinity
  let maxIdx = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxIdx = i
    }
  }

  const stack = [max]
  for (let i = nums.length; i; i--) {
    const shift = (nums.length + maxIdx + i) % nums.length
    const num = nums[shift]
    while (stack.length && stack[stack.length - 1] <= num) {
      stack.pop()
    }
    if (!stack.length) {
      nums[shift] = -1
    } else {
      nums[shift] = stack[stack.length - 1]
    }
    stack.push(num)
  }
  return nums
}
