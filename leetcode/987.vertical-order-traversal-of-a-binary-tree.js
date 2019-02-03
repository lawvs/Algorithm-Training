/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  if (!root) {
    return []
  }
  const arr = []
  const dfs = (node, x, y) => {
    if (!node) {
      return
    }
    node.x = x
    node.y = y
    arr.push(node)
    dfs(node.left, x - 1, y - 1)
    dfs(node.right, x + 1, y - 1)
  }
  dfs(root, 0, 0)
  arr.sort((a, b) => a.x - b.x || b.y - a.y || a.val - b.val)
  const ans = []
  let arrX = [arr[0].val]
  let x = arr[0].x
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].x === x) {
      arrX.push(arr[i].val)
    } else {
      ans.push(arrX)
      arrX = [arr[i].val]
      x = arr[i].x
    }
  }
  ans.push(arrX)
  return ans
}
