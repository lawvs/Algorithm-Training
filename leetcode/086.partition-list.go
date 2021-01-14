package leetcode

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func partition(head *ListNode, x int) *ListNode {
	if head == nil {
		return head
	}
	nilHead := ListNode{Val: -1e9, Next: head}
	start := &nilHead
	fast := head
	slow := start
	for fast != nil && (*fast).Val < x {
		fast = (*fast).Next
		slow = (*slow).Next
	}
	nowSlow := slow
	nowFast := fast

	for nowFast != nil {
		// fmt.Println((*nowFast).Val)
		if (*nowFast).Val < x {
			node := nowFast
			nowFast = (*node).Next
			(*nowSlow).Next = nowFast
			(*node).Next = fast
			(*slow).Next = node
			slow = node
			continue
		}

		nowFast = (*nowFast).Next
		nowSlow = (*nowSlow).Next
	}

	return nilHead.Next
}
