/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, sum: number): boolean {
  if (!root) {
    return false
  }
  if (!root.right && !root.left && root.val === sum) {
    return true
  }
  return (
    hasPathSum(root.right, sum - root.val) ||
    hasPathSum(root.left, sum - root.val)
  )
}
