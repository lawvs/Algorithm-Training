package main

import "sort"

func kthLargestValue(matrix [][]int, k int) int {
	for i := 1; i < len(matrix); i++ {
		matrix[i][0] = matrix[i-1][0] ^ matrix[i][0]
	}
	for j := 1; j < len(matrix[0]); j++ {
		matrix[0][j] = matrix[0][j-1] ^ matrix[0][j]
	}
	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[i]); j++ {
			matrix[i][j] = matrix[i][j] ^ matrix[i-1][j] ^ matrix[i][j-1] ^ matrix[i-1][j-1]
		}
	}

	arr := []int{}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			arr = append(arr, matrix[i][j])
		}
	}
	sort.Sort(sort.Reverse(sort.IntSlice(arr)))
	return arr[k-1]
}
