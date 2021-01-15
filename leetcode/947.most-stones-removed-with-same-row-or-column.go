package leetcode

// import "fmt"

func removeStones(stones [][]int) int {
	root := map[int]int{}
	var findRoot func(node int) int
	findRoot = func(node int) int {
		ro, exist := root[node]
		if !exist || ro == node {
			root[node] = node
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

	count := func() int {
		cnt := 0
		for i, node := range root {
			if node == i {
				cnt++
			}
		}
		return cnt
	}

	for _, v := range stones {
		union(v[0], v[1]+1e4)
		// fmt.Println(v[0], v[1], root)
	}
	// fmt.Println(root)

	return len(stones) - count()
}
