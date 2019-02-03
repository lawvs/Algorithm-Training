/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number} num
 * @return {string}
 */
function numToChar(num) {
  return String.fromCharCode(97 + num)
}

/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  if (!root) {
    return
  }
  if (!root.left && !root.right) {
    return numToChar(root.val)
  }
  if (!root.left) {
    return smallestFromLeaf(root.right) + numToChar(root.val)
  }
  if (!root.right) {
    return smallestFromLeaf(root.left) + numToChar(root.val)
  }
  const r = smallestFromLeaf(root.right)
  const l = smallestFromLeaf(root.left)
  const max = r > l ? l : r
  return max + numToChar(root.val)
}
