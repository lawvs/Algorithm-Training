/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (!preorder || preorder.length <= 0) {
    return null
  }
  // console.log(preorder)
  const root = new TreeNode(preorder[0])
  const ri = preorder.findIndex(num => num > preorder[0])
  if (ri < 0) {
    root.left = bstFromPreorder(preorder.slice(1))
    return root
  }
  if (ri == 1) {
    root.right = bstFromPreorder(preorder.slice(1))
    return root
  }
  root.left = bstFromPreorder(preorder.slice(1, ri))
  root.right = bstFromPreorder(preorder.slice(ri))
  return root
}

preorder = [10, 3, 19, 14]
bstFromPreorder(preorder)
