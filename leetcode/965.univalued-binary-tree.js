/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function checklVal(root, v) {
  if (!root) {
    return true
  }
  if (root.val !== v) {
    return false
  }
  if (!root.left && !root.right) {
    return true
  }
  if (!root.left) {
    return checklVal(root.right, v)
  }
  if (!root.right) {
    return checklVal(root.left, v)
  }
  return checklVal(root.left, v) && checklVal(root.right, v)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) {
    return true
  }
  if (!root.left && !root.right) {
    return true
  }
  const v = root.val
  // console.log(v)
  if (!root.left) {
    return checklVal(root.right, v)
  }
  if (!root.right) {
    return checklVal(root.left, v)
  }
  return checklVal(root.left, v) && checklVal(root.right, v)
}
