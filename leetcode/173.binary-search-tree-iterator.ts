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

class BSTIterator {
  node: TreeNode | null
  parents: TreeNode[] = []

  constructor(root: TreeNode | null) {
    if (!root) return
    this.node = root
    while (this.node.left) {
      this.parents.push(this.node)
      this.node = this.node.left
    }
  }

  next(): number {
    const ans = this.node.val
    if (!this.node.right) {
      if (!this.parents.length) {
        this.node = null
      }
      this.node = this.parents.pop()
    } else {
      this.node = this.node.right
      while (this.node.left) {
        this.parents.push(this.node)
        this.node = this.node.left
      }
    }
    return ans
  }

  hasNext(): boolean {
    return !!this.node
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
