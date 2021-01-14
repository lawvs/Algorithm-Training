package leetcode

import (
	"strconv"
)

func summaryRanges(nums []int) []string {
	if len(nums) == 0 {
		return []string{}
	}
	start := nums[0]
	pre := nums[0] - 1
	ans := []string{}
	for _, num := range nums {
		if pre+1 == num {
			pre = num
			continue
		}
		if start == pre {
			ans = append(ans, strconv.Itoa(start))
		} else {
			ans = append(ans, strconv.Itoa(start)+"->"+strconv.Itoa(pre))
		}
		start = num
		pre = num
	}

	if start == pre {
		ans = append(ans, strconv.Itoa(start))
	} else {
		ans = append(ans, strconv.Itoa(start)+"->"+strconv.Itoa(pre))
	}
	return ans
}
