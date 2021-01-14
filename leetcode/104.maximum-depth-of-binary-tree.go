package leetcode

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	if root.Right == nil && root.Left == nil {
		return 1
	}
	if root.Right == nil {
		return 1 + maxDepth(root.Left)
	}
	if root.Left == nil {
		return 1 + maxDepth(root.Right)
	}
	return 1 + max(maxDepth(root.Right), maxDepth(root.Left))
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
