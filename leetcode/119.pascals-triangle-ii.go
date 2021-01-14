package leetcode

func getRow(rowIndex int) []int {
	arr := []int{1}
	for i := 0; i <= rowIndex; i++ {
		t := make([]int, i+1)
		t[0] = 1
		t[i] = 1
		for j := 1; j < i; j++ {
			t[j] = arr[j] + arr[j-1]
		}
		arr = t
	}
	return arr
}
