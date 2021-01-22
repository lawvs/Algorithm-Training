package leetcode

func addToArrayForm(A []int, K int) []int {
	p := len(A)

	carry := 0
	for p > 0 && K > 0 {
		p--
		num := K % 10
		K /= 10
		A[p] += num + carry
		carry = A[p] / 10
		A[p] %= 10
		// fmt.Println(A, p, K, carry)
	}

	for K > 0 {
		num := K % 10
		K /= 10
		n := num + carry
		carry = n / 10
		A = append([]int{n % 10}, A...)
	}

	for carry > 0 {
		if p == 0 {
			A = append([]int{carry}, A...)
			break
		} else {
			p--
			A[p] += carry
			carry = A[p] / 10
			A[p] %= 10
		}
	}
	return A
}
