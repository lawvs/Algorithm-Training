package main

func decode(encoded []int, first int) []int {
	encoded = append([]int{first}, encoded...)
	for i := 1; i < len(encoded); i++ {
		encoded[i] = encoded[i] ^ encoded[i-1]
	}
	return encoded
}
