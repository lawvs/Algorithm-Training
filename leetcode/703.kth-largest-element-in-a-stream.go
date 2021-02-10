package leetcode

import (
	"container/heap"
	"sort"
)

// See https://golang.org/pkg/container/heap/

type KthLargest struct {
	k    int
	heap IntHeap
}

// An IntHeap is a min-heap of ints.
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func Constructor(k int, nums []int) KthLargest {
	sl := IntHeap{}
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	for i := 0; i < k && i < len(nums); i++ {
		sl = append(sl, nums[i])
	}
	heap.Init(&sl)
	return KthLargest{
		k:    k,
		heap: sl,
	}
}

func (this *KthLargest) Add(val int) int {
	// fmt.Println((*this).heap)
	if len((*this).heap) == 0 || len((*this).heap) < (*this).k {
		heap.Push(&(*this).heap, val)
		return (*this).heap[0]
	}
	top := (*this).heap[0]
	if val <= top {
		return top
	}

	heap.Pop(&(*this).heap)
	heap.Push(&(*this).heap, val)
	return (*this).heap[0]
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * obj := Constructor(k, nums);
 * param_1 := obj.Add(val);
 */
