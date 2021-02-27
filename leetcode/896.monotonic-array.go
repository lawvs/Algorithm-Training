const (
	Unknown = iota
	Increasing
	Decreasing
)

func isMonotonic(A []int) bool {
	l := len(A)
	if l <= 1 {
		return true
	}
	arrType := Unknown
	for i := 1; i < l; i++ {
		if arrType == Unknown {
			if A[i] == A[i-1] {
				continue
			}
			if A[i] > A[i-1] {
				arrType = Increasing
			} else {
				arrType = Decreasing
			}
		} else if arrType == Increasing && A[i] < A[i-1] {
			return false
		} else if arrType == Decreasing && A[i] > A[i-1] {
			return false
		}
	}
	return true
}
