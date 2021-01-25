package leetcode

// 0 1 2 3 4 5  6
// 0 0 1 3 6 10 15
func numEquivDominoPairs(dominoes [][]int) (ans int) {
	m := make(map[int]int)
	for _, domino := range dominoes {
		key := max(domino[0], domino[1])*10 + min(domino[0], domino[1])
		ans += m[key]
		m[key]++
	}
	return
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}
