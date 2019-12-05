/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.prefixSum = nums.reduce(
    (sumArr, cur) => {
      const last = sumArr[sumArr.length - 1]
      sumArr.push(last + cur)
      return sumArr
    },
    [0]
  )
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.prefixSum[j + 1] - this.prefixSum[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
