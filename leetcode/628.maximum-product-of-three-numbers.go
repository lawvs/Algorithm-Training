package leetcode

import "sort"

func maximumProduct(nums []int) int {
	l := len(nums)
	sort.Ints(nums)
	return max(nums[l-1]*nums[l-2]*nums[l-3], nums[0]*nums[1]*nums[l-1])
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
