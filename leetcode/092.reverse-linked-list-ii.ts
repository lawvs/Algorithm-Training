/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const beforeHead = new ListNode(0, head)
  let pointer = 0
  let node: ListNode = beforeHead
  while (pointer < left - 1) {
    pointer++
    node = node.next
  }
  const beforeNode = node
  const newLast = node.next
  node = node.next
  let nodeNext = node.next
  // reverse node[pointer] and node[pointer + 1]
  while (pointer < right - 1) {
    pointer++
    const tempNext = nodeNext.next
    nodeNext.next = node
    node = nodeNext
    nodeNext = tempNext
  }
  const afterNode = nodeNext
  beforeNode.next = node
  newLast.next = afterNode

  return beforeHead.next
}
