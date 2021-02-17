func flip(arr []int, K int, from int)  {
	for i := from; i < from + K; i++ {
		arr[i] ^= 1
	}
}

func minKBitFlips(A []int, K int) int {
	cnt := 0
	l := len(A)
	for idx, v := range A {
		if v == 0 {
			if idx + K > l {
				return -1
			}
			flip(A, K, idx)
			// fmt.Println(A)
			cnt++
		}
	}
	return cnt
}