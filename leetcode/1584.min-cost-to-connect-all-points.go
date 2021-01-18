package leetcode

import (
	// "fmt"
	"math"
	"sort"
)

func minCostConnectPoints(points [][]int) int {
	l := len(points)

	distSlice := [][]int{}
	for i := 0; i < l; i++ {
		for j := i + 1; j < l; j++ {
			x1, y1 := points[i][0], points[i][1]
			x2, y2 := points[j][0], points[j][1]
			dist := int(math.Abs(float64(x1-x2))) + int(math.Abs(float64(y1-y2)))
			distSlice = append(distSlice, []int{dist, i + 1, j + 1})
		}
	}

	sort.Slice(distSlice, func(i, j int) bool {
		return distSlice[i][0] < distSlice[j][0]
	})

	// fmt.Println(distSlice)

	root := make([]int, l+1)
	var findRoot func(node int) int
	findRoot = func(node int) int {
		if root[node] == 0 {
			return node
		}
		r := findRoot(root[node])
		root[node] = r
		return r
	}

	union := func(node1 int, node2 int) {
		r1 := findRoot(node1)
		r2 := findRoot(node2)
		root[r2] = r1
	}

	cost := 0
	for _, v := range distSlice {
		dist, n1, n2 := v[0], v[1], v[2]
		r1, r2 := findRoot(n1), findRoot(n2)
		if r1 == r2 {
			continue
		}
		union(n1, n2)
		cost += dist
		// fmt.Println(n1, n2, r1, r2, cost)
	}

	return cost
}
