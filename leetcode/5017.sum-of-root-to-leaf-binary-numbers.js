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
var sumRootToLeaf = function(root) {
  const MAGIC = 1e9 + 7
  let ret = 0
  const dfs = (node, cur) => {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      ret += cur * 2 + node.val
      ret %= MAGIC
    }
    cur %= MAGIC
    dfs(node.left, cur * 2 + node.val)
    dfs(node.right, cur * 2 + node.val)
  }
  dfs(root, 0)
  return ret
}
