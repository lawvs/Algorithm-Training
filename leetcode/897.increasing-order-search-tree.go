package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func increasingBST(root *TreeNode) *TreeNode {
	// fmt.Println(root.Val)
	var node *TreeNode
	if root.Left != nil {
		node = increasingBST(root.Left)
		right := root.Left
		for right.Right != nil {
			right = right.Right
		}
		right.Right = root
		root.Left = nil
	} else {
		node = root
	}

	if root.Right != nil {
		root.Right = increasingBST(root.Right)
	}

	return node
}
