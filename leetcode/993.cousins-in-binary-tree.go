package main

type DataNode struct {
	TreeNode *TreeNode
	Parent   *TreeNode
	Depth    int
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isCousins(root *TreeNode, x int, y int) bool {
	queue := []DataNode{{TreeNode: root, Parent: nil, Depth: 0}}
	var node1 *DataNode
	for len(queue) > 0 {
		head := queue[0]
		queue = queue[1:]

		if head.TreeNode.Val == x || head.TreeNode.Val == y {
			if node1 == nil {
				node1 = &head
			} else {
				return node1.Depth == head.Depth && node1.Parent != head.Parent
			}
		}

		if head.TreeNode.Left != nil {
			queue = append(queue, DataNode{TreeNode: head.TreeNode.Left, Parent: head.TreeNode, Depth: head.Depth + 1})
		}
		if head.TreeNode.Right != nil {
			queue = append(queue, DataNode{TreeNode: head.TreeNode.Right, Parent: head.TreeNode, Depth: head.Depth + 1})
		}
	}
	return false
}
