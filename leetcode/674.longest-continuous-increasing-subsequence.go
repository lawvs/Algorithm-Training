package leetcode

func findLengthOfLCIS(nums []int) int {
	l := len(nums)
	if l == 0 {
		return 0
	}
	curL := 0
	posL := 0
	pre := nums[0]
	for idx, v := range nums {
		if v <= pre {
			curL = max(curL, idx-posL)
			posL = idx
		}
		pre = v
	}
	curL = max(curL, l-posL)
	return curL
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
