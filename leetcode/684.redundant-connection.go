package leetcode

func findRedundantConnection(edges [][]int) []int {
	l := len(edges)
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
		if r1 == r2 {
			return
		}
		root[r2] = r1
	}

	for _, v := range edges {
		n1 := v[0]
		n2 := v[1]
		r1 := findRoot(n1)
		r2 := findRoot(n2)
		if r1 == r2 {
			return v
		}
		union(r1, r2)
	}
	return nil
}
