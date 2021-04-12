package main

import (
	"math"
	"sort"
)

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDiffInBST(root *TreeNode) int {
	valSlice := []int{}
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		head := queue[0]
		queue = queue[1:len(queue)]
		valSlice = append(valSlice, head.Val)
		if head.Left != nil {
			queue = append(queue, head.Left)
		}
		if head.Right != nil {
			queue = append(queue, head.Right)
		}
	}
	sort.Ints(valSlice)
	ans := math.MaxInt32
	for i := 1; i < len(valSlice); i++ {
		ans = min(ans, valSlice[i]-valSlice[i-1])
	}
	return ans
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}