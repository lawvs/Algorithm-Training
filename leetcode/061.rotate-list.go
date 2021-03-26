package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
	if k == 0 || head == nil || head.Next == nil {
		return head
	}
	cnt := 1
	p := head
	for p.Next != nil && cnt <= k {
		cnt++
		p = p.Next
	}
	if cnt == k+1 {
		preP := head
		for p.Next != nil {
			p = p.Next
			preP = preP.Next
		}
		p.Next = head
		newHead := preP.Next
		preP.Next = nil
		return newHead
	}
	return rotateRight(head, k%cnt)
}
