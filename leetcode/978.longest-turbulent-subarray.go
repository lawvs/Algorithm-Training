package leetcode

func maxTurbulenceSize(arr []int) int {
	ans := 0
	start := 0
	end := 1
	for end < len(arr) {
		if (isOdd(end-1) && arr[end-1] > arr[end]) || (!isOdd(end-1) && arr[end-1] < arr[end]) {
			ans = max(ans, end-start+1)
		} else {
			start = end
		}
		end++
	}
	ans = max(ans, end-start)

	start = 0
	end = 1
	for end < len(arr) {
		if (isOdd(end-1) && arr[end-1] < arr[end]) || (!isOdd(end-1) && arr[end-1] > arr[end]) {
			ans = max(ans, end-start+1)
		} else {
			start = end
		}
		end++
	}
	ans = max(ans, end-start)
	return ans
}

func isOdd(a int) bool {
	return a%2 == 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
