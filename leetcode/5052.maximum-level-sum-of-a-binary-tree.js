/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  const sum = {}
  const counter = (node, deep = 1) => {
    if (!node) return
    sum[deep] = (sum[deep] || 0) + node.val
    counter(node.left, deep + 1)
    counter(node.right, deep + 1)
  }
  counter(root)
  // console.log(sum)

  let max = -1e6
  let deep = 1e4
  for (const k in sum) {
    if (sum[k] > max) {
      max = sum[k]
      deep = k
      continue
    }
    if (sum[k] === max && k < deep) {
      max = sum[k]
      deep = k
      continue
    }
  }
  return deep
}
