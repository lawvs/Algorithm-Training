package leetcode

func fairCandySwap(A []int, B []int) []int {
	sumA := 0
	for _, v := range A {
		sumA += v
	}

	sumB := 0
	mapB := map[int]bool{}
	for _, v := range B {
		sumB += v
		mapB[v] = true
	}

	for _, v := range A {
		num := v - (sumA-sumB)/2
		if mapB[num] == true {
			return []int{v, num}
		}
	}
	return nil
}
