package leetcode
func isSubsequence(s string, t string) bool {
	if len(s) == 0 {
		return true
	}
	var pos int
	for i := 0; i < len(t); i++ {
		if s[pos] == t[i] {
			pos++
		}
		if pos == len(s) {
			return true
		}
	}
	return false
}
