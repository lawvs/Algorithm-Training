package leetcode

var m map[int]bool

func divisorGame(N int) bool {
	if m == nil {
		m = make(map[int]bool)
	}
	if N == 1 {
		return false
	}
	ans, ok := m[N]
	if ok {
		return ans
	}
	for i := 1; i < N; i++ {
		if N%i == 0 && divisorGame(N-i) == false {
			return true
		}
	}
	m[N] = false
	return false
}
