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
var maxAncestorDiff = function(root) {
  const dfs = (node, mx, mn) => {
    if (!node) return 0
    let ret = Math.max(node.val - mn, mx - node.val)
    mx = Math.max(mx, node.val)
    mn = Math.min(mn, node.val)
    ret = Math.max(ret, dfs(node.right, mx, mn))
    ret = Math.max(ret, dfs(node.left, mx, mn))
    return ret
  }
  return dfs(root, root.val, root.val)
}
