function countSmaller(nums: number[]): number[] {
  const sortedNums: number[] = []

  for (let i = nums.length - 1; i >= 0; i--) {
    const curNum = nums[i]
    sortedNums.push(curNum)
    let cnt = 0
    // insertion sort
    let j = sortedNums.length - 2
    for (; j >= 0 && sortedNums[j] >= curNum; j--) {
      sortedNums[j + 1] = sortedNums[j]
      cnt++
    }
    sortedNums[j + 1] = curNum
    nums[i] = sortedNums.length - cnt - 1
  }
  // console.log(sortedNums)
  return nums
}
