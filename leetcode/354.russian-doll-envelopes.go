import "sort"

func maxEnvelopes(envelopes [][]int) int {
	sort.Slice(envelopes, func(i, j int) bool {
		return envelopes[i][0] < envelopes[j][0] || (envelopes[i][0] == envelopes[j][0] && envelopes[i][1] > envelopes[j][1])
	})

	dp := make([]int, len(envelopes))
	for i := 0; i < len(dp); i++ {
		dp[i] = 1
	}

	for i := 0; i < len(envelopes); i++ {
		for j := 0; j < i; j++ {
			if envelopes[i][1] > envelopes[j][1] {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}
	}

	return max(dp...)
}

func max(a ...int) int {
	res := a[0]
	for _, v := range a[1:] {
		if v > res {
			res = v
		}
	}
	return res
}

