type NumMatrix struct {
	preSumMatrix [][]int
}

func Constructor(matrix [][]int) NumMatrix {
	for i := 1; i < len(matrix); i++ {
		matrix[i][0] += matrix[i-1][0]
	}

	if len(matrix) != 0 {
		for j := 1; j < len(matrix[0]); j++ {
			matrix[0][j] += matrix[0][j-1]
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[i]); j++ {
			matrix[i][j] += matrix[i-1][j] + matrix[i][j-1] - matrix[i-1][j-1]
		}
	}

	return NumMatrix{
		preSumMatrix: matrix,
	}
}

func (this *NumMatrix) SumRegion(row1 int, col1 int, row2 int, col2 int) int {
	ans := (*this).preSumMatrix[row2][col2]
	if row1 > 0 {
		ans -= (*this).preSumMatrix[row1-1][col2]
	}
	if col1 > 0 {
		ans -= (*this).preSumMatrix[row2][col1-1]
	}
	if row1 > 0 && col1 > 0 {
		ans += (*this).preSumMatrix[row1-1][col1-1]
	}
	return ans
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * obj := Constructor(matrix);
 * param_1 := obj.SumRegion(row1,col1,row2,col2);
 */