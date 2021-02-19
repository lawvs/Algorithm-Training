func longestOnes(A []int, K int) int {
	ans := K
	l := len(A)
	left := 0
	right := 0
	for right < l {
		if A[right] == 1 {
			right++
			ans = max(ans, right - left)
			continue
		}
		right++
		if K > 0 {
			K--
		} else {
			for A[left] == 1 {
				left++
			}
			left++
		}
		ans = max(ans, right - left)
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
