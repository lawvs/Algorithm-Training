package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	preHead := ListNode{0, head}
	p1 := &preHead
	p2 := head
	for p2 != nil {
		curNode := p2
		curVal := p2.Val
		for p2.Next != nil && p2.Next.Val == curVal {
			p2 = p2.Next
		}
		if p2 != curNode {
			p1.Next = p2.Next
			p2 = p2.Next
			continue
		}
		p1 = p2
		p2 = p2.Next
	}
	return preHead.Next
}
