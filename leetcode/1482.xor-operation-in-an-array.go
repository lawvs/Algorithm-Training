package main

func xorOperation(n int, start int) int {
	acc := 0
	for i := 0; i < n; i++ {
		acc ^= start + 2*i
	}
	return acc
}
