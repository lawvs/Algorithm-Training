/**
 * leetcode #919 complete-binary-tree-inserter 完全二叉树插入器
 * https://leetcode-cn.com/contest/weekly-contest-105/problems/complete-binary-tree-inserter/
 */
// Threaded binary tree

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
  this.root = root
  this.now = root
  this.threaded = root
  // init threaded tree
  if (root.left) {
    root.left.parent = root
    root.next = root.left
    this.threaded = root.left
  }
  while (this.now.left && this.now.right) {
    if (this.now.left === this.threaded) {
      this.threaded.next = this.now.right
    } else {
      this.threaded.next = this.now.left
      this.threaded = this.threaded.next
      this.threaded.next = this.now.right
    }
    this.threaded = this.threaded.next
    this.now = this.now.next
  }
  if (this.now.left) {
    this.threaded.next = this.now.left
    this.threaded = this.threaded.next
  }
  // console.log(this.root, this.now.val,this.threaded.val)
}

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
  const node = new TreeNode(v)
  if (!this.now.left) {
    this.now.left = node
    node.parent = this.now
  } else {
    this.now.right = node
    node.parent = this.now
    this.now = this.now.next
  }
  this.threaded.next = node // threaded
  this.threaded = node
  return node.parent.val
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = Object.create(CBTInserter).createNew(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */

root = new TreeNode(0)
var obj = Object.create(CBTInserter) // .createNew(root)
var obj = new CBTInserter(root)
var param_1 = obj.insert(1)
console.log(param_1.val)
var param_1 = obj.insert(2)
console.log(param_1.val)
var param_1 = obj.insert(3)
console.log(param_1.val)
var param_2 = obj.get_root()
console.log(param_2.val)

console.log(obj)
