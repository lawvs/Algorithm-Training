import (
  "container/heap"
)

// See https://golang.org/pkg/container/heap/#example__priorityQueue

// An Item is something we manage in a priority queue.
type Item struct {
  value    int // The value of the item; arbitrary.
  priority int    // The priority of the item in the queue.
  // The index is needed by update and is maintained by the heap.Interface methods.
  index int // The index of the item in the heap.
}

// A PriorityQueue implements heap.Interface and holds Items.
type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
  // We want Pop to give us the highest, not lowest, priority so we use greater than here.
  return pq[i].priority > pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
  pq[i], pq[j] = pq[j], pq[i]
  pq[i].index = i
  pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
  n := len(*pq)
  item := x.(*Item)
  item.index = n
  *pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
  old := *pq
  n := len(old)
  item := old[n-1]
  old[n-1] = nil  // avoid memory leak
  item.index = -1 // for safety
  *pq = old[0 : n-1]
  return item
}

// update modifies the priority and value of an Item in the queue.
func (pq *PriorityQueue) update(item *Item, value int, priority int) {
  item.value = value
  item.priority = priority
  heap.Fix(pq, item.index)
}


func lastStoneWeight(stones []int) int {
  pq := make(PriorityQueue, 0)

  for _, stone := range stones {
    pq.Push(&Item{value: stone, priority: stone})
  }

  heap.Init(&pq)

  for pq.Len() >= 2 {
    stone1 := heap.Pop(&pq).(*Item).value
    stone2 := heap.Pop(&pq).(*Item).value
    if stone1 != stone2 {
      heap.Push(&pq, &Item{value: stone1 - stone2, priority: stone1 - stone2})
    }
  }

  if pq.Len() == 0 {
    return 0
  }

  return heap.Pop(&pq).(*Item).value
}