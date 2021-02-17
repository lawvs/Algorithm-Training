/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (nums.length * nums[0].length !== r * c) {
    return nums
  }
  const ans = []
  nums.flat().reduce((acc, cur) => {
    acc.push(cur)
    if (acc.length === c) {
      ans.push(acc)
      return []
    }
    return acc
  }, [])
  return ans
}
