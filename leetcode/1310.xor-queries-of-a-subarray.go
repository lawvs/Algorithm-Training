package main

func xorQueries(arr []int, queries [][]int) []int {
	acc := make([]int, len(arr)+1)
	acc[0] = 0
	for i := 0; i < len(arr); i++ {
		acc[i+1] = acc[i] ^ arr[i]
	}
	// fmt.Println(acc)
	ret := make([]int, len(queries))
	for i := 0; i < len(queries); i++ {
		ret[i] = acc[queries[i][0]] ^ acc[queries[i+1][1]+1]
	}
	return ret
}
