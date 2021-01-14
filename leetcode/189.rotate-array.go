package leetcode

func rotate(nums []int, k int) {
	l := len(nums)
	k = k % l
	cnt := gcd(k, l)
	for start := 0; start < cnt; start++ {
		cur := start
		pre := nums[cur]
		for {
			// fmt.Println(nums)
			next := (cur + k) % l
			pre, nums[next] = nums[next], pre
			cur = next
			if cur == start {
				break
			}
		}
	}
}

func gcd(a, b int) int {
	for a != 0 {
		a, b = b%a, a
	}
	return b
}
