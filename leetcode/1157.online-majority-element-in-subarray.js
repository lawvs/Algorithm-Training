/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
  this.arr = arr
  // console.log(arr)
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
  // console.log(left, right, threshold)
  const m = {}
  for (let i = left; i <= right; i++) {
    !m[this.arr[i]] && (m[this.arr[i]] = 0)
    m[this.arr[i]]++
    if (m[this.arr[i]] >= threshold) return this.arr[i]
    // console.log(m[this.arr[i]], threshold)
  }
  return -1
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
