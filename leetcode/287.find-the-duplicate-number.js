/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // Binary search
  let l = 1
  let r = nums.length - 1

  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    let cnt = 0
    let i = l

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        cnt++
      }
    }

    if (cnt <= mid) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}

let ret
ret = findDuplicate([1, 3, 4, 2, 2])
console.assert(ret, 2)
ret = findDuplicate([3, 1, 3, 4, 2])
console.assert(ret, 3)
