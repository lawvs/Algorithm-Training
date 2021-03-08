func removeDuplicates(S string) string {
	stack := []rune{}
	for _, v := range S {
		if len(stack) > 0 && stack[len(stack)-1] == v {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, v)
		}
	}
	return string(stack)
}
