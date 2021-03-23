package main

import "math"

func find132pattern(nums []int) bool {
	last := nums[len(nums)-1]
	stack := []int{last}
	max := math.MinInt64

	for i := len(nums) - 2; i >= 0; i-- {
		if nums[i] < max {
			return true
		}
		for len(stack) > 0 && nums[i] > stack[len(stack)-1] {
			max = stack[len(stack)-1]
			stack = stack[:len(stack)-1] // pop
		}
		stack = append(stack, nums[i])
	}
	return false
}
