package main

import (
	// "fmt"
	"reflect"
)

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func leafSimilar(root1 *TreeNode, root2 *TreeNode) bool {
	seq1 := []int{}
	seq2 := []int{}
	var dfs func(node *TreeNode, seq *[]int)
	dfs = func(node *TreeNode, seq *[]int) {
		if node == nil {
			return
		}
		if node.Left == nil && node.Right == nil {
			*seq = append(*seq, node.Val)
			return
		}
		dfs(node.Left, seq)
		dfs(node.Right, seq)
		return
	}
	dfs(root1, &seq1)
	dfs(root2, &seq2)
	// fmt.Println(seq1, seq2)
	return reflect.DeepEqual(seq1, seq2)
}
