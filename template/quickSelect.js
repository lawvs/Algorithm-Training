// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/solution/zhao-chu-di-k-da-de-yi-huo-zuo-biao-zhi-mgick/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
const nthLargeElement = (results, left, kth, right) => {
  if (left === right) {
    return
  }
  const pivot = parseInt(Math.random() * (right - left) + left)
  swap(results, pivot, right)
  // 三路划分（three-way partition）
  let sepl = left - 1
  let sepr = left - 1
  for (let i = left; i <= right; i++) {
    if (results[i] > results[right]) {
      swap(results, ++sepr, i)
      swap(results, ++sepl, sepr)
    } else if (results[i] === results[right]) {
      swap(results, ++sepr, i)
    }
  }
  if (sepl < left + kth && left + kth <= sepr) {
    return
  } else if (left + kth <= sepl) {
    nthElement(results, left, kth, sepl)
  } else {
    nthElement(results, sepr + 1, kth - (sepr - left + 1), right)
  }
}

const swap = (results, index1, index2) => {
  const temp = results[index1]
  results[index1] = results[index2]
  results[index2] = temp
}
