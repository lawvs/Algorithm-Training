package leetcode

func checkStraightLine(coordinates [][]int) bool {
	l := len(coordinates)
	if l <= 2 {
		return true
	}
	p0 := coordinates[0]
	p1 := coordinates[1]
	dx, dy := (p0[0] - p1[0]), (p0[1] - p1[1])
	for i := 2; i < len(coordinates); i++ {
		point := coordinates[i]
		px, py := (p0[0] - point[0]), (p0[1] - point[1])
		if dy * px != dx * py {
			return false
		}
	}
	return true
}
