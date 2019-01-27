/**
 * Definition for a binary tree node.
 */
// function TreeNode(val) {
//   this.val = val
//   this.left = this.right = null
// }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  let cnt = 0
  const dfs = node => {
    if (!node) {
      return 0
    }
    const v = node.val - 1 + dfs(node.left) + dfs(node.right)
    cnt += Math.abs(v)
    return v
  }
  dfs(root)
  return cnt
}

// [0,3,0]
right = new TreeNode(0)
left = new TreeNode(3)
root = new TreeNode(0)
root.right = right
root.left = left
ret = distributeCoins(root)
console.log(ret) // 3
