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
var maximumAverageSubtree = function(root) {
  const calc = root => {
    if (!root) {
      return {
        sum: 0,
        cnt: 0.000000000001,
        max: 0
      }
    }
    const l = calc(root.left)
    const r = calc(root.right)
    const sum = l.sum + r.sum + root.val
    const cnt = l.cnt + r.cnt + 1
    const max = Math.max(l.max, r.max, sum / cnt)

    return {
      sum,
      cnt,
      max
    }
  }
  return calc(root).max
}
