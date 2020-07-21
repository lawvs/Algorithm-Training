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

function generateTrees(n: number): Array<TreeNode | null> {
  if (!n) {
    return []
  }
  const buildTree = (start: number, end: number): Array<TreeNode | null> => {
    if (start > end) {
      return [null]
    }
    // console.log(start, end)
    const trees: TreeNode[] = []
    for (let i = start; i <= end; i++) {
      const l = buildTree(start, i - 1)
      const r = buildTree(i + 1, end)
      l.forEach((lt) =>
        r.forEach((rt) => {
          const root = new TreeNode(i)
          root.left = lt
          root.right = rt
          trees.push(root)
        })
      )
    }
    return trees
  }
  return buildTree(1, n)
}
